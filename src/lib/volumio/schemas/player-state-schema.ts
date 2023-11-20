import { z } from 'zod'

export const VolumioPlayerStateSchema = z.object({
  status: z.enum(['play', 'pause', 'stop']),
  position: z.number(),
  title: z.string(),
  artist: z.string(),
  album: z.string(),
  albumart: z.string(),
  uri: z.string(),
  trackType: z.string().or(z.undefined()),
  seek: z.number(),
  duration: z.number(),
  samplerate: z.string(),
  channels: z.number().or(z.undefined()),
  bitrate: z.number().or(z.null()).or(z.undefined()),
  random: z.null(),
  repeat: z.boolean(),
  repeatSingle: z.boolean(),
  consume: z.boolean(),
  volume: z.number(),
  dbVolume: z.number().or(z.null()),
  mute: z.boolean(),
  disableVolumeControl: z.boolean(),
  stream: z.boolean(),
  updatedb: z.boolean(),
  volatile: z.boolean(),
  service: z.string(),
})

export type VolumioPlayerStateSchemaInferred = z.infer<
  typeof VolumioPlayerStateSchema
>
