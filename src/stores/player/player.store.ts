import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { PlayerStore } from './types'

export const usePlayerStore = create<PlayerStore>()(
  devtools(
    immer((set) => ({
      playerState: {
        status: 'stop',
        position: 0,
        title: '',
        artist: '',
        album: '',
        albumart: '',
        uri: '',
        trackType: '',
        seek: 0,
        duration: 0,
        samplerate: '',
        channels: 0,
        bitrate: 0,
        random: null,
        repeat: null,
        repeatSingle: false,
        consume: false,
        volume: 0,
        dbVolume: 0,
        mute: false,
        disableVolumeControl: false,
        stream: false,
        updatedb: false,
        volatile: false,
        service: '',
      },
      updateState: (playerState) =>
        set(() => ({ playerState }), false, 'playerStore/updateState'),
    }))
  )
)
