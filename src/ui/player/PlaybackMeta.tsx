import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { usePlayerStore } from '../../stores/player/player.store'

interface PlaybackMetaProps {}

export const PlaybackMeta: FunctionComponent<PlaybackMetaProps> = (_props) => {
  const playerState = usePlayerStore((state) => state.playerState)

  return (
    <Flex gap="1rem" align={'start'} justifyContent={'start'} minH={0} p="1rem">
      <Image
        src={playerState?.albumart ?? 'https://via.placeholder.com/150'}
        maxH="full"
        h={'full'}
        aspectRatio={16 / 10}
        fit={'cover'}
      />

      <Flex
        flexDirection={'column'}
        alignItems={'flex-start'}
        justifyContent={'start'}
        gap=".5rem"
        maxW={'100%'}
        py={'.5rem'}
        textOverflow={'ellipsis'}
        overflow={'hidden'}
      >
        <Box
          as="p"
          textAlign={'left'}
          padding="0"
          display="inline"
          border="none"
          width={'inherit'}
          fontSize="small"
          fontWeight={'medium'}
          textOverflow={'ellipsis'}
          noOfLines={2}
        >
          {playerState?.title}
        </Box>

        <Box
          as="p"
          padding="0"
          display="inline"
          border="none"
          width={'inherit'}
          color="gray.400"
          fontSize="smaller"
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
    </Flex>
  )
}
