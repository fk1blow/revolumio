import { Box } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { PlaybackControls } from './controls/PlaybackControls'

interface PlayerWideProps {}

export const PlayerWide: FunctionComponent<PlayerWideProps> = (_props) => {
  return (
    <Box
      position={'absolute'}
      left={0}
      right={0}
      bottom={'4rem'}
      w={'100vw'}
      py={'1rem'}
      bg={'#032D34'}
      rounded={'1.5rem'}
      margin={'0 auto'}
      maxW={'70rem'}
    >
      <PlaybackControls size="sm" />
    </Box>
  )
}
