import { ApiResponseMap, VolumioApiCommand } from './commands/command'
import { volumioConnection } from './socket/connection'

export function onReceiveMessage<K extends keyof ApiResponseMap>(
  message: K,
  callback: (data: ApiResponseMap[K]) => void
) {
  return volumioConnection.on(message as string, callback)
}

export function sendCommand(command: VolumioApiCommand) {
  volumioConnection.emit(command.message, command.payload)
}
