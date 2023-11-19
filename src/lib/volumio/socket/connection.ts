import { io } from '../../socket.io/client'
import { volumioApiEndpoint } from './constants'

const socket = io(volumioApiEndpoint)

export const volumioConnection = socket

// TODO should type the `connection.on` so that it only accepts the commands
// and expects the payload to be of the correct type
