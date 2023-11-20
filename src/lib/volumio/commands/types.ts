import { BrowseLibrarySchemaInferred } from '../schemas/browse-library-schema'
import { VolumioPlayerStateSchemaInferred } from '../schemas/player-state-schema'

export enum ApiCommandsMap {
  GetState = 'getState',
  BrowseLibrary = 'browseLibrary',
  PausePlayer = 'pause',
  PlayPlayer = 'play',
  ChangeVolume = 'volume',
}

export interface ApiResponseMap {
  pushBrowseLibrary: BrowseLibrarySchemaInferred
  pushState: VolumioPlayerStateSchemaInferred
  connect: void
}

export type VolumioApiCommand = {
  message: ApiCommandsMap
  payload?: unknown
}
