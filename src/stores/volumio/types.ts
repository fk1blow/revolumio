import { VolumioPlayerState } from '../../lib/volumio/types'

export interface VolumioStore {
  playerState?: VolumioPlayerState
  updatePlayerState: (playerState: VolumioPlayerState) => void
}

// TODO DODODODODODO
// need a player state store
// need the pages/sections store(favorites, etc)
