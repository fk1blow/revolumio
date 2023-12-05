import { Box, Flex, Heading, Image } from '@chakra-ui/react'
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
        <Flex userSelect={'none'} alignItems={'center'}>
          <Image
            src={playerState?.albumart ?? 'https://via.placeholder.com/150'}
            maxH="100%"
            h={'68px'}
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
        </Flex>
      )}

      <Flex
        flexDirection={'column'}
        justifyContent={'space-between'}
        maxW={'54ch'}
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
          fontWeight={'medium'}
          fontSize={'1rem'}
          textOverflow={'ellipsis'}
          noOfLines={2}
          wordBreak={'break-all'}
        >
          {playerState?.title}
        </Heading>

        <Box
          as="p"
          display="inline"
          w={'100%'}
          padding="0"
          border="none"
          width={'inherit'}
          color="gray.400"
          fontSize={'.875rem'}
          fontWeight={'normal'}
          title={playerState?.artist}
          noOfLines={1}
          textOverflow={'ellipsis'}
        >
          {playerState?.artist}

          {playerState?.album?.length && ` : ${playerState?.album}`}
        </Box>
      </Flex>
    </>
  )
}
