import { BrowseLibrarySchemaInferred } from '../../lib/volumio/schemas/browse-library-schema'

export type FavoriteItemsLists =
  BrowseLibrarySchemaInferred['navigation']['lists']

export interface FavoritesStore {
  lists?: FavoriteItemsLists
  updateLists: (lists: FavoriteItemsLists) => void
}

export interface FavoriteItem {
  album: string
  artist: string
  service: string
  title: string
  type: string
  albumart: string
  uri: string
}
