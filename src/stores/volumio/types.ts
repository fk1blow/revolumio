import { z } from "zod"
import { io } from "../../lib/socket.io/client"
import { VolumioPlayerStateSchema } from "./schemas"

type VolumioPlayerStateSchemaInferred = z.infer<typeof VolumioPlayerStateSchema>

export type PlaybackStatus = Pick<VolumioPlayerStateSchemaInferred, "status">

export type PlaybackTrackMeta = Pick<
  VolumioPlayerStateSchemaInferred,
  "title" | "artist" | "album" | "albumart" | "uri" | "trackType"
>

export type PlabackTrackState = Pick<
  VolumioPlayerStateSchemaInferred,
  | "seek"
  | "duration"
  | "samplerate"
  | "channels"
  | "repeat"
  | "repeatSingle"
  | "consume"
  | "volume"
  | "mute"
  | "disableVolumeControl"
  | "stream"
>

// prettier-ignore
export type VolumioPlayerState = PlaybackStatus & PlaybackTrackMeta & PlabackTrackState

export interface VolumioStore {
  playerState?: VolumioPlayerState
  websocketConnection?: ReturnType<typeof io>
  updatePlayerState: (playerState: VolumioPlayerState) => void
  setWebsocketConnection: (websocketConnection: ReturnType<typeof io>) => void
}
