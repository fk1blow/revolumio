import { VolumioPlaybackStateSchemaInferred } from './schemas/playback-state-schema'

export type PlaybackStatus = Pick<VolumioPlaybackStateSchemaInferred, 'status'>

export type PlaybackTrackMeta = Pick<
  VolumioPlaybackStateSchemaInferred,
  'title' | 'artist' | 'album' | 'albumart' | 'uri' | 'trackType'
>

export type PlabackTrackState = Pick<
  VolumioPlaybackStateSchemaInferred,
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
