import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { VolumioStore } from "./types"

export const useVolumioStore = create<VolumioStore>()(
  devtools(
    immer((set) => ({
      playerState: undefined,
      websocket: undefined,
      setWebsocketConnection: (websocket) =>
        set(
          () => ({ websocket }),
          false,
          "volumioStore/setWebsocketConnection"
        ),
      updatePlayerState: (playerState) =>
        set(() => ({ playerState }), false, "volumioStore/updatePlayerState"),
    }))
  )
)