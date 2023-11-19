import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { usePlayerStore } from '../../stores/player/player.store'

interface PlaybackMetaProps {}

export const PlaybackMeta: FunctionComponent<PlaybackMetaProps> = (_props) => {
  const playerState = usePlayerStore((state) => state.playerState)

  return (
    <Flex
      gap="1rem"
      align={'center'}
      justifyContent={'center'}
      h={'full'}
      p={'1.5rem'}
    >
      <Image
        rounded={'.5rem'}
        src={playerState?.albumart ?? 'https://via.placeholder.com/150'}
        h="100%"
      />

      <Flex
        flexDirection={'column'}
        justify={'center'}
        align={'start'}
        gap=".2rem"
      >
        <Button
          textAlign={'left'}
          padding="0"
          display="inline"
          border="none"
          width={'inherit'}
          variant="link"
          fontSize="md"
        >
          {playerState?.artist}
        </Button>

        <Button
          textAlign={'left'}
          padding="0"
          display="inline"
          border="none"
          width={'inherit'}
          color="gray.400"
          variant="link"
          fontSize="sm"
          fontWeight={'normal'}
        >
          {playerState?.title}
        </Button>

        <Text fontSize={'12px'} color={'gray.500'} mt={'.75rem'}>
          {playerState?.album}
        </Text>
      </Flex>
    </Flex>
  )
}
