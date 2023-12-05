import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { PlayerStore } from './types'

export const usePlayerStore = create<PlayerStore>()(
  devtools(
    immer((set) => ({
      isDocked: true,

      showDockedPlayer: () =>
        set(() => ({ isDocked: true }), false, 'playerStore/showDockedPlayer'),

      showFocusedPlayer: () =>
        set(
          () => ({ isDocked: false }),
          false,
          'playerStore/showFocusedPlayer'
        ),
    }))
  )
)
