import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { VolumioStore } from './types'

// TOODO remove in favor of the player store
export const useVolumioStore = create<VolumioStore>()(
  devtools(
    immer((set) => ({
      playerState: undefined,
      updatePlayerState: (playerState) =>
        set(() => ({ playerState }), false, 'volumioStore/updatePlayerState'),
    }))
  )
)
