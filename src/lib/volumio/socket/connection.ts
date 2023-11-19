import { io } from '../../socket.io/client'
import { volumioWebsocketApiEndpoint } from './constants'

const socket = io(volumioWebsocketApiEndpoint)

export const volumioConnection = socket
