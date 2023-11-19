// Need this b/c atm the volumio api works with an outdated version of socket.io
// so we load the exact version of socket.io-client that volumio uses(injected directly into the html)
// and the expse it to the `window` object
export function io(endpoint: string) {
  return window.io(endpoint) as ReturnType<typeof import('socket.io-client').io>
}
