import { Flex, IconButton } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa6'
import { usePlayerStore } from '../../stores/player/player.store'
import { PlaybackTrack } from './PlaybackTrack'
import { VolumeControls } from './VolumeControls'

interface PlayerControlsProps {}

export const PlayerControls: FunctionComponent<PlayerControlsProps> = (
  _props
) => {
  const playerState = usePlayerStore((state) => state.playerState)

  return (
    <>
      <Flex
        flex="2"
        display={'flex'}
        flexDir={'column'}
        w={'100%'}
        h={'full'}
        alignItems={'center'}
        pt="1.25rem"
        gap="2rem"
      >
        <IconButton
          aria-label="Play/Pause"
          border="none"
          colorScheme="gray"
          fontSize={'1.6rem'}
          size="lg"
          rounded={'full'}
          icon={playerState?.status === 'play' ? <FaPause /> : <FaPlay />}
        />

        <PlaybackTrack />
      </Flex>

      <VolumeControls />
    </>
  )
}
