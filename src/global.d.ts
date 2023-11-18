interface Window {
  io: (path: string) => ReturnType<typeof import("socket.io-client").io>
}
