import { Flex, IconButton } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { FaPause, FaPlay } from 'react-icons/fa6'
import { PlaybackTrack } from './PlaybackTrack'
import { VolumeControls } from './VolumeControls'
import { usePlayerStatus } from './player-controls.hooks'

interface PlayerControlsProps {}

export const PlayerControls: FunctionComponent<PlayerControlsProps> = (
  _props
) => {
  const { status, toggleStatus } = usePlayerStatus()

  useHotkeys('space', toggleStatus, [toggleStatus])

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
          _focus={{ outline: 'none' }}
          icon={status === 'play' ? <FaPause /> : <FaPlay />}
          onClick={toggleStatus}
        />

        <PlaybackTrack />
      </Flex>

      <VolumeControls />
    </>
  )
}
