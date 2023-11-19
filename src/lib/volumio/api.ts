import { ApiResponseMap, VolumioApiCommand } from './command'
import { volumioConnection } from './socket/connection'
import { volumioApiEndpoint } from './socket/constants'

// TODO remove it in favor of the socket connection
/** @deprecated */
export interface FavoriteItem {
  albume: string
  artist: string
  service: string
  title: string
  type: 'song' | 'playlist'
  albumart: string
  uri: string
}

// TODO remove it in favor of the socket connection
/** @deprecated */
export const getFavorites = () => {
  return fetch(`${volumioApiEndpoint}/browse?uri=favourites`)
    .then((res) => res.json())
    .then((res) => res.navigation.lists[0]?.items as FavoriteItem[])
}

export function onMessage<K extends keyof ApiResponseMap>(
  message: K,
  callback: (data: ApiResponseMap[K]) => void
) {
  return volumioConnection.on(message as string, callback)
}

export function sendCommand(command: VolumioApiCommand) {
  volumioConnection.emit(command.message, command.payload)
}
