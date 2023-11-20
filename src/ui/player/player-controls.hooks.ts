import throttle from 'lodash.throttle'
import { useCallback, useMemo } from 'react'
import { sendCommand } from '../../lib/volumio/api'
import { changePlayerVolumeCommand } from '../../lib/volumio/commands/command'
import { usePlayerStore } from '../../stores/player/player.store'

const volumeSyncThrottleWaitTime = 500

export const usePlayerVolume = () => {
  const playerState = usePlayerStore((state) => state.playerState)

  const volume = useMemo(() => playerState?.volume ?? 0, [playerState])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setVolume = useCallback(
    throttle(
      (value: number) => sendCommand(changePlayerVolumeCommand(value)),
      volumeSyncThrottleWaitTime
    ),
    []
  )

  return {
    volume,
    setVolume,
  }
}
