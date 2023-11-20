import { ApiCommandsMap, VolumioApiCommand } from './types'

export const fetchStateCommand: VolumioApiCommand = {
  message: ApiCommandsMap.GetState,
}

export const fetchFavoritesCommand: VolumioApiCommand = {
  message: ApiCommandsMap.BrowseLibrary,
  payload: {
    uri: 'favourites',
  },
}

export const pausePlayerCommand: VolumioApiCommand = {
  message: ApiCommandsMap.PausePlayer,
}

// TODO rename it
export const playPlayerCommand: VolumioApiCommand = {
  message: ApiCommandsMap.PlayPlayer,
}

export const changePlayerVolumeCommand: (
  volume: number
) => VolumioApiCommand = (volume: number) => ({
  message: ApiCommandsMap.ChangeVolume,
  payload: volume,
})
