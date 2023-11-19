import { z } from 'zod'

export const BrowseLibrarySchema = z.object({
  navigation: z.object({
    lists: z.array(
      z.object({
        items: z.array(
          z.object({
            service: z.string(),
            type: z.string(),
            title: z.string(),
            artist: z.string(),
            album: z.string(),
            albumart: z.string(),
            uri: z.string(),
          })
        ),
      })
    ),
  }),
})

export type BrowseLibrarySchemaInferred = z.infer<typeof BrowseLibrarySchema>
