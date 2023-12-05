import { z } from 'zod'

export const VolumioPlaybackStateSchema = z.object({
  status: z.enum(['play', 'pause', 'stop']),
  position: z.number(),
  title: z.string(),
  artist: z.string(),
  album: z.string().or(z.null()),
  albumart: z.string(),
  uri: z.string(),
  trackType: z.string().or(z.undefined()),
  seek: z.number().or(z.null()),
  duration: z.number().or(z.undefined()),
  samplerate: z.string().or(z.undefined()),
  channels: z.number().or(z.undefined()),
  bitrate: z.number().or(z.string()).or(z.null()).or(z.undefined()),
  random: z.null(),
  repeat: z.boolean().or(z.null()),
  repeatSingle: z.boolean(),
  consume: z.boolean(),
  volume: z.number(),
  dbVolume: z.number().or(z.null()),
  mute: z.boolean(),
  disableVolumeControl: z.boolean(),
  stream: z.boolean().or(z.undefined()),
  updatedb: z.boolean(),
  volatile: z.boolean(),
  service: z.string(),
})

export type VolumioPlaybackStateSchemaInferred = z.infer<
  typeof VolumioPlaybackStateSchema
>
