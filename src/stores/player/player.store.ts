import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { PlayerStore } from './types'

export const usePlayerStore = create<PlayerStore>()(
  devtools(
    immer((set) => ({
      playerState: undefined,
      updatePlayerState: (playerState) => {
        return set(
          () => ({ playerState }),
          false,
          'playerStore/updatePlayerState'
        )
      },
    }))
  )
)