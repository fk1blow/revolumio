import throttle from 'lodash.throttle'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { sendCommand } from '../../lib/volumio/api'
import {
  changePlayerVolumeCommand,
  pausePlayerCommand,
  playPlayerCommand,
} from '../../lib/volumio/commands/command'
import { usePlaybackStore } from '../../stores/playback/playback.store'

const volumeSyncThrottleWaitTime = 1000
const playerStatusSyncThrottleWaitTime = 500
const volumeStepSize = 5

export const usePlayerVolume = () => {
  const playerState = usePlaybackStore((state) => state.playbackState)

  const syncedVolume = useMemo(() => playerState?.volume ?? 0, [playerState])

  const [internalVolume, setInternalVolume] = useState(0)

  const [muteState, setMuteState] = useState<{
    volumeWas: number
    isMuted: boolean
  }>({
    volumeWas: internalVolume,
    isMuted: false,
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setSyncedVolume = useCallback(
    throttle(
      (value: number) => sendCommand(changePlayerVolumeCommand(value)),
      volumeSyncThrottleWaitTime
    ),
    []
  )

  // set the internal volume value when the (incoming)"synced" volume changes
  useEffect(() => {
    setInternalVolume(syncedVolume)
  }, [syncedVolume])

  const changeVolume = useCallback(
    (value: number) => {
      if (muteState.isMuted && value > 0) {
        setMuteState({ isMuted: false, volumeWas: value })
      }
      setInternalVolume(value)
      setSyncedVolume(value)

      // "track" the volume to use it when un-muting(and going back to the previous volume > 0)
      setMuteState(({ isMuted }) => ({ isMuted, volumeWas: value }))
    },
    [muteState.isMuted, setSyncedVolume]
  )

  const changeVolumeUp = useCallback(() => {
    if (muteState.isMuted) {
      changeVolume(
        internalVolume >= 100 ? 100 : muteState.volumeWas + volumeStepSize
      )
    } else {
      changeVolume(
        internalVolume >= 100 ? 100 : internalVolume + volumeStepSize
      )
    }
  }, [changeVolume, internalVolume, muteState.isMuted, muteState.volumeWas])

  const changeVolumeDown = useCallback(() => {
    if (muteState.isMuted) return
    changeVolume(internalVolume <= 0 ? 0 : internalVolume - volumeStepSize)
  }, [changeVolume, internalVolume, muteState.isMuted])

  const toggleMuteState = useCallback(() => {
    if (muteState.isMuted) {
      setMuteState(({ volumeWas }) => ({ isMuted: false, volumeWas }))
      setInternalVolume(muteState.volumeWas)
      setSyncedVolume(muteState.volumeWas)
    } else {
      setMuteState({ isMuted: true, volumeWas: internalVolume })
      setInternalVolume(0)
      setSyncedVolume(0)
    }
  }, [internalVolume, muteState, setSyncedVolume])

  return {
    volume: internalVolume,
    changeVolumeUp,
    changeVolumeDown,
    changeVolume,
    muteState,
    toggleMuteState,
  }
}

// need to distinguish between "synced" and "internal" status b/c
// the player state is not updated immediately after a command is sent
// and the server response time is not consistent
export const usePlayerStatus = () => {
  const playerState = usePlaybackStore((state) => state.playbackState)

  const syncedStatus = useMemo(
    () => (playerState?.status === undefined ? 'stop' : playerState?.status),
    [playerState]
  )

  const [internalStatus, setInternalStatus] = useState(syncedStatus)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setSyncedStatus = useCallback(
    throttle((status: string) => {
      if (status === 'play') {
        sendCommand(playPlayerCommand)
      } else {
        sendCommand(pausePlayerCommand)
      }
    }, playerStatusSyncThrottleWaitTime),
    []
  )

  // set the internal status value when the (incoming)"synced" status changes
  useEffect(() => {
    setInternalStatus(syncedStatus)
  }, [syncedStatus])

  const toggleStatus = useCallback(() => {
    if (internalStatus === 'play') {
      setInternalStatus('pause')
      setSyncedStatus('pause')
    } else {
      setInternalStatus('play')
      setSyncedStatus('play')
    }
  }, [internalStatus, setSyncedStatus])

  return {
    status: internalStatus,
    toggleStatus,
  }
}
