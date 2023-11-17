const volumioEndpoint = "http://volumio.local/api/v1"

export interface FavoriteItem {
  albume: string
  artist: string
  service: string
  title: string
  type: "song" | "playlist"
  albumart: string
  uri: string
}

export const getFavorites = () => {
  return fetch(`${volumioEndpoint}/browse?uri=favourites`)
    .then((res) => res.json())
    .then((res) => res.navigation.lists[0]?.items as FavoriteItem[])
}
