import { BrowseLibrarySchemaInferred } from '../schemas/browse-library-schema'
import { VolumioPlaybackStateSchemaInferred } from '../schemas/playback-state-schema'

export enum ApiCommandsMap {
  GetState = 'getState',
  BrowseLibrary = 'browseLibrary',
  PausePlayer = 'pause',
  PlayPlayer = 'play',
  ChangeVolume = 'volume',
}

export interface ApiResponseMap {
  pushBrowseLibrary: BrowseLibrarySchemaInferred
  pushState: VolumioPlaybackStateSchemaInferred
  connect: void
}

export type VolumioApiCommand = {
  message: ApiCommandsMap
  payload?: unknown
}
