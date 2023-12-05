import { Box } from '@chakra-ui/react'
import { FunctionComponent, useRef } from 'react'
import { usePlaybackStore } from '../../stores/playback/playback.store'

interface BackgroundBlurProps {}

export const BackgroundBlur: FunctionComponent<BackgroundBlurProps> = (
  _props
) => {
  const imageBoxRef = useRef(null)

  const playerState = usePlaybackStore((state) => state.playbackState)

  return (
    <Box
      ref={imageBoxRef}
      position={'absolute'}
      left={0}
      top={0}
      w="100vw"
      h="100vh"
      zIndex={-1}
      filter={'grayscale(45%)'}
      backgroundPosition={'center'}
      backgroundSize={'cover'}
      backgroundImage={
        playerState?.albumart ?? 'https://via.placeholder.com/150'
      }
      _after={{
        content: '""',
        position: 'absolute',
        w: '100%',
        h: '100%',
        background: '#23252865',
        backdropFilter: 'blur(17px)',
      }}
    ></Box>
  )
}
