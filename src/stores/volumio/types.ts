import { VolumioPlayerState } from '../../lib/volumio/types'

export interface VolumioStore {
  playerState?: VolumioPlayerState
  updatePlayerState: (playerState: VolumioPlayerState) => void
}
