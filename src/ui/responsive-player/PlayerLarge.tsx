import { Box } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface PlayerLargeProps {}

export const PlayerLarge: FunctionComponent<PlayerLargeProps> = (_props) => {
  return (
    <Box
      position={'absolute'}
      left={0}
      bottom={0}
      w={'100vw'}
      py={'1rem'}
      bg={'#ff00ff'}
    >
      {/* <PlaybackControls size="sm" /> */}
      large player controls
    </Box>
  )
}
