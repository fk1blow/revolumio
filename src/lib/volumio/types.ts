import { VolumioPlayerStateSchemaInferred } from './schemas/player-state-schema'

export type PlaybackStatus = Pick<VolumioPlayerStateSchemaInferred, 'status'>

export type PlaybackTrackMeta = Pick<
  VolumioPlayerStateSchemaInferred,
  'title' | 'artist' | 'album' | 'albumart' | 'uri' | 'trackType'
>

export type PlabackTrackState = Pick<
  VolumioPlayerStateSchemaInferred,
  | 'seek'
  | 'duration'
  | 'samplerate'
  | 'channels'
  | 'repeat'
  | 'repeatSingle'
  | 'consume'
  | 'volume'
  | 'mute'
  | 'disableVolumeControl'
  | 'stream'
>

// prettier-ignore
export type VolumioPlayerState = PlaybackStatus & PlaybackTrackMeta & PlabackTrackState
