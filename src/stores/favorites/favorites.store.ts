import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { FavoriteItemsLists, FavoritesStore } from './types'

export const useFavoritesListStore = create<FavoritesStore>()(
  devtools(
    immer((set) => ({
      lists: undefined,
      updateLists: (lists: FavoriteItemsLists) =>
        set(() => ({ lists }), false, 'favoritesStore/updateList'),
    }))
  )
)
