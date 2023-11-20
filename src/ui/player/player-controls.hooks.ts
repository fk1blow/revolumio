import throttle from 'lodash.throttle'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { sendCommand } from '../../lib/volumio/api'
import { changePlayerVolumeCommand } from '../../lib/volumio/commands/command'
import { usePlayerStore } from '../../stores/player/player.store'

const volumeSyncThrottleWaitTime = 500

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

// export const usePlayerStatus = () => {
//   const playerState = usePlayerStore((state) => state.playerState)

//   const togglePlayPause = useCallback(
//     throttle(() => {
//       if (playerState?.status === 'play') {
//         sendCommand(pausePlayerCommand)
//       } else {
//         sendCommand(playPlayerCommand)
//       }
//     }, 500),
//     []
//   )

//   // TODO
//   // return {
//   //   toggle
//   // }
// }
