import { Flex, IconButton } from '@chakra-ui/react'
import { FunctionComponent, useState } from 'react'
import {
  FaBackward,
  FaForward,
  FaPause,
  FaPlay,
  FaRotateLeft,
  FaShuffle,
} from 'react-icons/fa6'

const sizeToPropsMap = {
  sm: {
    mainButton: {
      fontSize: '1.25rem',
      h: '3rem',
      w: '3rem',
    },
    sideButtons: {
      fontSize: '1rem',
      w: '3rem',
      h: '3rem',
    },
  },
  lg: {
    mainButton: {
      fontSize: '2rem',
      h: '4.5rem',
      w: '4.5rem',
    },
    sideButtons: {
      fontSize: '1.8rem',
      w: '3rem',
      h: '3rem',
    },
  },
}

interface PlaybackControlsProps {
  size: 'sm' | 'lg'
  style?: 'single' | 'slim' | 'full'
}

export const PlaybackControls: FunctionComponent<PlaybackControlsProps> = ({
  size,
  style = 'full',
}) => {
  const [status, setStatus] = useState('pause')

  return (
    <Flex gap={'.5rem'}>
      <Flex gap={'.25rem'}>
        {style === 'full' && (
          <IconButton
            aria-label="Play/Pause"
            border="none"
            color="#E1E2E7"
            fontSize={sizeToPropsMap[size].sideButtons.fontSize}
            size="lg"
            h={sizeToPropsMap[size].sideButtons.h}
            w={sizeToPropsMap[size].sideButtons.w}
            bg={'transparent'}
            rounded={'full'}
            _focus={{ outline: 'none' }}
            icon={<FaRotateLeft />}
          />
        )}
        {(style === 'full' || style === 'slim') && (
          <IconButton
            aria-label="Play/Pause"
            border="none"
            color="#E1E2E7"
            fontSize={sizeToPropsMap[size].sideButtons.fontSize}
            size="lg"
            h={sizeToPropsMap[size].sideButtons.h}
            w={sizeToPropsMap[size].sideButtons.w}
            bg={'transparent'}
            rounded={'full'}
            _focus={{ outline: 'none' }}
            icon={<FaBackward />}
          />
        )}
      </Flex>

      <IconButton
        aria-label="Play/Pause"
        border="none"
        colorScheme="gray"
        fontSize={sizeToPropsMap[size].mainButton.fontSize}
        color={'#E1E2E7'}
        size="lg"
        rounded={'full'}
        _focus={{ outline: 'none' }}
        icon={status === 'play' ? <FaPause /> : <FaPlay />}
      />

      <Flex gap={'.5rem'}>
        {(style === 'full' || style === 'slim') && (
          <IconButton
            aria-label="Play/Pause"
            border="none"
            color="#E1E2E7"
            fontSize={sizeToPropsMap[size].sideButtons.fontSize}
            bg={'transparent'}
            size="lg"
            h={sizeToPropsMap[size].sideButtons.h}
            w={sizeToPropsMap[size].sideButtons.w}
            rounded={'full'}
            _focus={{ outline: 'none' }}
            icon={<FaForward />}
          />
        )}

        {style === 'full' && (
          <IconButton
            aria-label="Play/Pause"
            border="none"
            color="#E1E2E7"
            fontSize={sizeToPropsMap[size].sideButtons.fontSize}
            size="lg"
            h={sizeToPropsMap[size].sideButtons.h}
            w={sizeToPropsMap[size].sideButtons.w}
            bg={'transparent'}
            rounded={'full'}
            _focus={{ outline: 'none' }}
            icon={<FaShuffle />}
          />
        )}
      </Flex>
    </Flex>
  )
}
