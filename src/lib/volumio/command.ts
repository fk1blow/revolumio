import { BrowseLibrarySchemaInferred } from './schemas/browse-library-schema'
import { VolumioPlayerStateSchemaInferred } from './schemas/player-state-schema'

export enum ApiMessageMap {
  GetState = 'getState',
  BrowseLibrary = 'browseLibrary',
}

export interface ApiResponseMap {
  pushBrowseLibrary: BrowseLibrarySchemaInferred
  pushState: VolumioPlayerStateSchemaInferred
  connect: void
}

export type VolumioApiCommand = {
  message: ApiMessageMap
  payload?: unknown
}

export const fetchStateCommand: VolumioApiCommand = {
  message: ApiMessageMap.GetState,
}

export const fetchFavoritesCommand: VolumioApiCommand = {
  message: ApiMessageMap.BrowseLibrary,
  payload: {
    uri: 'favourites',
  },
}