import { useMemo } from 'react'
import { sendCommand } from '../../lib/volumio/api'
import { changePlayerVolumeCommand } from '../../lib/volumio/commands/command'
import { usePlayerStore } from '../../stores/player/player.store'

export const usePlayerVolume = () => {
  const playerState = usePlayerStore((state) => state.playerState)

  const volume = useMemo(() => playerState?.volume ?? 0, [playerState])

  const setVolume = (value: number) => {
    sendCommand(changePlayerVolumeCommand(value))
  }

  return {
    volume,
    setVolume,
  }
}
