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

// TODO rename it
export const playPlayerCommand: VolumioApiCommand = {
  message: ApiMessageMap.PlayPlayer,
}

export const changePlayerVolumeCommand: (
  volume: number
) => VolumioApiCommand = (volume: number) => ({
  message: ApiMessageMap.ChangeVolume,
  payload: volume,
})
