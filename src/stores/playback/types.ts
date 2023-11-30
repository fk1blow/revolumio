import { VolumioPlaybackStateSchemaInferred } from '../../lib/volumio/schemas/playback-state-schema'

export interface PlaybackStore {
  playbackState?: VolumioPlaybackStateSchemaInferred
  updateState: (playbackState: VolumioPlaybackStateSchemaInferred) => void
}
