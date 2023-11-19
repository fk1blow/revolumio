interface Window {
  io: (path: string) => ReturnType<typeof import('@types/socket.io').io>
}
