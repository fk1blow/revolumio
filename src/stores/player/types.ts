import { VolumioPlayerStateSchemaInferred } from '../../lib/volumio/schemas/player-state-schema'

export interface PlayerStore {
  playerState?: VolumioPlayerStateSchemaInferred
  updateState: (playerState: VolumioPlayerStateSchemaInferred) => void
}
