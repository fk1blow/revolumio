export function io(endpoint: string) {
  return window.io(endpoint) as ReturnType<typeof import('socket.io-client').io>
}
