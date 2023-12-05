import { useEffect } from 'react'
import { onReceiveMessage, sendCommand } from '../../lib/volumio/api'
import {
  fetchFavoritesCommand,
  fetchStateCommand,
} from '../../lib/volumio/commands/command'
import { VolumioPlaybackStateSchema } from '../../lib/volumio/schemas/playback-state-schema'
import { useFavoriteItemsStore } from '../favorites/favorites.store'
import { usePlaybackStore } from '../playback/playback.store'

// don't really like this hook but hey, it works
export const useVolumioInitialization = () => {
  const updateFavorites = useFavoriteItemsStore((state) => state.updateLists)
  const updatePlayerState = usePlaybackStore((state) => state.updateState)

  useEffect(() => {
    onReceiveMessage('pushState', (data) => {
      // TODO might need to catch zod errors and update the store accordingly
      VolumioPlaybackStateSchema.parse(data)
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
