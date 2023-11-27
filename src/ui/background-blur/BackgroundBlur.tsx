import { Box, Image } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface BackgroundBlurProps {}

export const BackgroundBlur: FunctionComponent<BackgroundBlurProps> = (
  _props
) => {
  return (
    <Box position={'absolute'} left={0} top={0} w="100vw" h="100vh">
      <Image
        w="100vw"
        h="100vh"
        objectFit={'cover'}
        src="https://i.ytimg.com/vi/P5fzCZFPQ6c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_dAFEM7XPRmI4mraqQrZ4COoXNg"
      />
      <Box
        position={'absolute'}
        top={0}
        left={0}
        w="full"
        h="full"
        bg="#064C5750"
        backdropFilter={'blur(17px)'}
      ></Box>
    </Box>
  )
}
