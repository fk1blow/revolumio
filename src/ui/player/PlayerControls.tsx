import { Flex, IconButton } from '@chakra-ui/react'
import { FunctionComponent, useCallback } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { FaPause, FaPlay } from 'react-icons/fa6'
import { sendCommand } from '../../lib/volumio/api'
import {
  pausePlayerCommand,
  playPlayerCommand,
} from '../../lib/volumio/commands/command'
import { usePlayerStore } from '../../stores/player/player.store'
import { PlaybackTrack } from './PlaybackTrack'
import { VolumeControls } from './VolumeControls'

interface PlayerControlsProps {}

export const PlayerControls: FunctionComponent<PlayerControlsProps> = (
  _props
) => {
  const playerState = usePlayerStore((state) => state.playerState)
  const onTogglePlay = useCallback(() => {
    if (playerState?.status === 'play') {
      sendCommand(pausePlayerCommand)
    } else {
      sendCommand(playPlayerCommand)
    }
  }, [playerState?.status])

  useHotkeys('space', () => onTogglePlay(), [])

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
          onClick={onTogglePlay}
        />

        <PlaybackTrack />
      </Flex>

      <VolumeControls />
    </>
  )
}
