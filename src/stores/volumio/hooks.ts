import { useEffect } from 'react'
import { onMessage, sendCommand } from '../../lib/volumio/api'
import {
  fetchFavoritesCommand,
  fetchStateCommand,
} from '../../lib/volumio/command'
import { VolumioPlayerStateSchema } from '../../lib/volumio/schemas/player-state-schema'
import { useVolumioStore } from './volumio.store'

export const useVolumioInitialization = () => {
  const updatePlayerState = useVolumioStore((state) => state.updatePlayerState)

  useEffect(() => {
    onMessage('pushState', (data) => {
      // TODO might need to catch zod errors and update the store accordingly
      VolumioPlayerStateSchema.parse(data)
      updatePlayerState(data)
    })

    onMessage('pushBrowseLibrary', (data) => {
      console.log('data: ', data.navigation.lists[0].items)
    })

    onMessage('connect', () => {
      sendCommand(fetchStateCommand)
      sendCommand(fetchFavoritesCommand)
    })
  }, [updatePlayerState])
}
