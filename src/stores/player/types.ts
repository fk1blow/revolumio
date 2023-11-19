import { VolumioPlayerStateSchemaInferred } from '../../lib/volumio/schemas/player-state-schema'

export interface PlayerStore {
  playerState?: VolumioPlayerStateSchemaInferred
  updatePlayerState: (playerState: VolumioPlayerStateSchemaInferred) => void
}
