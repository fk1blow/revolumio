import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { usePlaybackStore } from '../../stores/playback/playback.store'

interface PlaybackMetaProps {
  showImage: boolean
  onClickImage?: () => void
}

export const PlaybackMeta: FunctionComponent<PlaybackMetaProps> = ({
  showImage,
  onClickImage,
}) => {
  const playerState = usePlaybackStore((state) => state.playbackState)

  return (
    <>
      {showImage && (
        <Box position={'relative'} userSelect={'none'}>
          <Image
            src={playerState?.albumart ?? 'https://via.placeholder.com/150'}
            maxH="100%"
            h={'100%'}
            rounded={'.5rem'}
            aspectRatio={16 / 10}
            fit={'cover'}
            onClick={onClickImage}
            _hover={{
              cursor: 'pointer',
              opacity: 0.8,
              filter: 'blur(2px)',
              transition: 'all .2s ease',
            }}
          />
        </Box>
      )}

      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        gap=".25rem"
        maxW={'100%'}
        h={'full'}
        textOverflow={'ellipsis'}
        overflow={'hidden'}
      >
        <Heading
          as="p"
          textAlign={'left'}
          padding="0"
          display="inline"
          border="none"
          width={'inherit'}
          fontWeight={'semibold'}
          textOverflow={'ellipsis'}
          noOfLines={1}
          fontSize={'clamp(1rem, 1.2vw, 1.375rem)'}
        >
          {playerState?.title}
        </Heading>

        <Box
          as="p"
          padding="0"
          display="inline"
          border="none"
          width={'inherit'}
          color="gray.400"
          fontSize={'clamp(0.875rem, 1vw, 1.025rem)'}
          title={playerState?.artist}
          fontWeight={'normal'}
          w={'100%'}
          noOfLines={1}
          textOverflow={'ellipsis'}
        >
          {playerState?.artist}
        </Box>

        <Text fontSize={'12px'} color={'gray.500'}>
          {playerState?.album}
        </Text>
      </Flex>
    </>
  )
}
