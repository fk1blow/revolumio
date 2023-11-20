import throttle from 'lodash.throttle'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { sendCommand } from '../../lib/volumio/api'
import {
  changePlayerVolumeCommand,
  pausePlayerCommand,
  playPlayerCommand,
} from '../../lib/volumio/commands/command'
import { usePlayerStore } from '../../stores/player/player.store'

const volumeSyncThrottleWaitTime = 500

const playerStatusSyncThrottleWaitTime = 500

// need to distinguish between "synced" and "internal" status b/c
// the player state is not updated immediately after a command is sent
// and the server response time is not consistent
export const usePlayerVolume = () => {
  const playerState = usePlayerStore((state) => state.playerState)

  const syncedVolume = useMemo(() => playerState?.volume ?? 0, [playerState])

  const [internalVolume, setInternalVolume] = useState(syncedVolume)

  const [muteState, setMuteState] = useState<{
    volumeWas: number
    isMuted: boolean
  }>({
    volumeWas: syncedVolume,
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

  // set the "synced" volume when the internal volume changes
  useEffect(() => {
    setSyncedVolume(internalVolume)
  }, [internalVolume, setSyncedVolume])

  // set the internal volume value when the (incoming)"synced" volume changes
  useEffect(() => {
    setInternalVolume(syncedVolume)
  }, [syncedVolume])

  const toggleMuteState = useCallback(() => {
    if (!muteState.isMuted) {
      setMuteState(() => ({
        volumeWas: internalVolume,
        isMuted: true,
      }))

      setInternalVolume(0)
    } else {
      setMuteState(({ isMuted: current, volumeWas: previous }) => ({
        volumeWas: previous,
        isMuted: !current,
      }))

      setInternalVolume(muteState.volumeWas)
    }
  }, [internalVolume, muteState.isMuted, muteState.volumeWas])

  return {
    volume: internalVolume,
    setVolume: setInternalVolume,
    muteState,
    setMuteState,
    toggleMuteState,
  }
}

// need to distinguish between "synced" and "internal" status b/c
// the player state is not updated immediately after a command is sent
// and the server response time is not consistent
export const usePlayerStatus = () => {
  const playerState = usePlayerStore((state) => state.playerState)

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

  // set the "synced" volume when the internal volume changes
  useEffect(() => {
    setSyncedStatus(internalStatus)
  }, [internalStatus, setSyncedStatus])

  // set the internal volume value when the (incoming)"synced" volume changes
  useEffect(() => {
    setInternalStatus(syncedStatus)
  }, [syncedStatus])

  const toggleStatus = useCallback(() => {
    console.log('internalStatus: ', internalStatus)

    if (internalStatus === 'play') {
      setInternalStatus('pause')
    } else {
      setInternalStatus('play')
    }
  }, [internalStatus])

  return {
    status: internalStatus,
    toggleStatus,
  }
}
