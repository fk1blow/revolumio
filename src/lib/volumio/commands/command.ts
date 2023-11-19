import { ApiMessageMap, VolumioApiCommand } from './types'

export const fetchStateCommand: VolumioApiCommand = {
  message: ApiMessageMap.GetState,
}

export const fetchFavoritesCommand: VolumioApiCommand = {
  message: ApiMessageMap.BrowseLibrary,
  payload: {
    uri: 'favourites',
  },
}

export const pausePlayerCommand: VolumioApiCommand = {
  message: ApiMessageMap.PausePlayer,
}

export const playPlayerCommand: VolumioApiCommand = {
  message: ApiMessageMap.PlayPlayer,
}
