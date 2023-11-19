import { useEffect } from 'react'
import { onReceiveMessage, sendCommand } from '../../lib/volumio/api'
import {
  fetchFavoritesCommand,
  fetchStateCommand,
} from '../../lib/volumio/commands/command'
import { VolumioPlayerStateSchema } from '../../lib/volumio/schemas/player-state-schema'
import { useFavoriteItemsStore } from '../favorites/favorites.store'
import { usePlayerStore } from '../player/player.store'

export const useVolumioInitialization = () => {
  const updateFavorites = useFavoriteItemsStore((state) => state.updateLists)
  const updatePlayerState = usePlayerStore((state) => state.updatePlayerState)

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
