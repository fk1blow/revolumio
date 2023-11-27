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
      fontSize: '1.75rem',
      h: '3.5rem',
      w: '3.5rem',
    },
    sideButtons: {
      fontSize: '1.2rem',
      w: '3rem',
      h: '3rem',
    },
  },
  lg: {
    mainButton: {
      fontSize: '2.5rem',
      h: '5.5rem',
      w: '5.5rem',
    },
    sideButtons: {
      fontSize: '1.8rem',
      w: '4rem',
      h: '4rem',
    },
  },
}

interface PlaybackControlsProps {
  size: 'sm' | 'lg'
}

export const PlaybackControls: FunctionComponent<PlaybackControlsProps> = ({
  size,
}) => {
  const [status, setStatus] = useState('pause')

  return (
    <Flex alignItems={'center'} gap={'1.5rem'}>
      <Flex gap={'.5rem'}>
        <IconButton
          aria-label="Play/Pause"
          border="none"
          colorScheme="gray"
          fontSize={sizeToPropsMap[size].sideButtons.fontSize}
          size="lg"
          h={sizeToPropsMap[size].sideButtons.h}
          w={sizeToPropsMap[size].sideButtons.w}
          bg={'transparent'}
          rounded={'full'}
          _focus={{ outline: 'none' }}
          icon={<FaRotateLeft />}
        />
        <IconButton
          aria-label="Play/Pause"
          border="none"
          colorScheme="gray"
          fontSize={sizeToPropsMap[size].sideButtons.fontSize}
          size="lg"
          h={sizeToPropsMap[size].sideButtons.h}
          w={sizeToPropsMap[size].sideButtons.w}
          bg={'transparent'}
          rounded={'full'}
          _focus={{ outline: 'none' }}
          icon={<FaBackward />}
        />
      </Flex>

      <IconButton
        aria-label="Play/Pause"
        border="none"
        colorScheme="gray"
        fontSize={sizeToPropsMap[size].mainButton.fontSize}
        bg={'#EF6024'}
        size="lg"
        h={sizeToPropsMap[size].mainButton.h}
        w={sizeToPropsMap[size].mainButton.h}
        rounded={'full'}
        _focus={{ outline: 'none' }}
        icon={status === 'play' ? <FaPause /> : <FaPlay />}
      />

      <Flex gap={'.5rem'}>
        <IconButton
          aria-label="Play/Pause"
          border="none"
          colorScheme="gray"
          fontSize={sizeToPropsMap[size].sideButtons.fontSize}
          bg={'transparent'}
          size="lg"
          h={sizeToPropsMap[size].sideButtons.h}
          w={sizeToPropsMap[size].sideButtons.w}
          rounded={'full'}
          _focus={{ outline: 'none' }}
          icon={<FaForward />}
        />

        <IconButton
          aria-label="Play/Pause"
          border="none"
          colorScheme="gray"
          fontSize={sizeToPropsMap[size].sideButtons.fontSize}
          size="lg"
          h={sizeToPropsMap[size].sideButtons.h}
          w={sizeToPropsMap[size].sideButtons.w}
          bg={'transparent'}
          rounded={'full'}
          _focus={{ outline: 'none' }}
          icon={<FaShuffle />}
        />
      </Flex>
    </Flex>
  )
}
