import { useEffect } from 'react'
import { onReceiveMessage, sendCommand } from '../../lib/volumio/api'
import {
  fetchFavoritesCommand,
  fetchStateCommand,
} from '../../lib/volumio/command'
import { VolumioPlayerStateSchema } from '../../lib/volumio/schemas/player-state-schema'
import { useFavoritesListStore } from '../favorites/favorites.store'
import { useVolumioStore } from './volumio.store'

export const useVolumioInitialization = () => {
  const updatePlayerState = useVolumioStore((state) => state.updatePlayerState)
  const updateFavorites = useFavoritesListStore((state) => state.updateLists)

  useEffect(() => {
    onReceiveMessage('pushState', (data) => {
      // TODO might need to catch zod errors and update the store accordingly
      VolumioPlayerStateSchema.parse(data)
      updatePlayerState(data)
    })

    onReceiveMessage('pushBrowseLibrary', (data) => {
      updateFavorites(data.navigation.lists)
    })

    onReceiveMessage('connect', () => {
      sendCommand(fetchStateCommand)
      sendCommand(fetchFavoritesCommand)
    })
  }, [updateFavorites, updatePlayerState])
}
