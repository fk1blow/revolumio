import { useEffect } from "react"
import { io } from "../../lib/socket.io/client"
import { volumioApiEndpoint } from "./constants"
import { VolumioPlayerStateSchema } from "./schemas"
import { VolumioPlayerState } from "./types"
import { useVolumioStore } from "./volumio.store"

export const useVolumioInitialization = () => {
  const websocketConnection = useVolumioStore(
    (state) => state.websocketConnection
  )
  const updatePlayerState = useVolumioStore((state) => state.updatePlayerState)
  const setWebsocketConnection = useVolumioStore(
    (state) => state.setWebsocketConnection
  )

  useEffect(() => {
    if (websocketConnection) return

    const socket = io(volumioApiEndpoint)

    socket.on("connect", () => {
      setWebsocketConnection(socket)
      socket.emit("getState")
    })

    socket.on("pushState", (data: VolumioPlayerState) => {
      // TODO might need to catch zod errors and update the store accordingly
      VolumioPlayerStateSchema.parse(data)
      updatePlayerState(data)
    })
  }, [setWebsocketConnection, updatePlayerState, websocketConnection])
}
