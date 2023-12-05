import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useMediaQuery } from 'react-responsive'
import { usePlaybackStore } from '../../stores/playback/playback.store'
import { usePlayerStore } from '../../stores/player/player.store'
import { BackgroundBlur } from '../background-blur/BackgroundBlur'
import { PlaybackControls } from '../player/PlaybackControls'
import { PlaybackProgress } from '../player/PlaybackProgress'

interface FocusPlayerProps {}

export const FocusedPlayer: FunctionComponent<FocusPlayerProps> = (_props) => {
  const playerState = usePlaybackStore((state) => state.playbackState)
  const showDockedPlayer = usePlayerStore((state) => state.showDockedPlayer)

  const isLayoutInline = useMediaQuery({ maxHeight: '480px' })

  return (
    <Grid
      position={'absolute'}
      top={0}
      left={0}
      h={'100vh'}
      w={'100vw'}
      overflow={'hidden'}
      zIndex={'99'}
      templateRows={
        isLayoutInline ? '1fr' : 'minmax(200px, 4fr) minmax(200px, 5fr)'
      }
      templateColumns={isLayoutInline ? '1fr 1fr' : '1fr'}
      p={isLayoutInline ? '2rem' : '2rem'}
      gap={'1rem'}
    >
      {<BackgroundBlur />}

      <Box
        position={'absolute'}
        width={'clamp(40px, 15vw, 100px)'}
        left={'calc(50% - (clamp(40px, 15vw, 100px) / 2))'}
        top={isLayoutInline ? '.5rem' : '1rem'}
        height={'3rem'}
        px={'1rem'}
        rounded={'full'}
        opacity={0.4}
        transition={'opacity .2s ease'}
        _hover={{ cursor: 'pointer', opacity: 0.8 }}
        _after={{
          content: '""',
          width: 'full',
          marginTop: '1.35rem',
          height: '.35rem',
          display: 'block',
          bg: '#ffffff',
          rounded: 'full',
        }}
        onClick={showDockedPlayer}
      />

      <GridItem
        as="section"
        justifySelf={'center'}
        maxW={isLayoutInline ? 'auto' : '600px'}
        alignSelf={isLayoutInline ? 'center' : 'normal'}
        mt={isLayoutInline ? '.5rem' : '2rem'}
      >
        <Flex h="full" justify={'center'} px={'2rem'} alignItems={'center'}>
          <Image
            h={'auto'}
            w={'100%'}
            maxH={'100%'}
            maxW={'100%'}
            minW={'200px'}
            objectFit={'contain'}
            rounded={'.5rem'}
            src={playerState?.albumart ?? 'https://via.placeholder.com/150'}
          />
        </Flex>
      </GridItem>

      <GridItem
        as="section"
        display={'flex'}
        flexDir={'column'}
        justifySelf={'center'}
        alignSelf={isLayoutInline ? 'center' : 'normal'}
        maxW={'700px'}
        width={'100%'}
      >
        <Flex direction={'column'} gap={'2rem'}>
          <Flex direction={'column'} align={'start'} gap={'1rem'}>
            <Heading
              fontSize={'clamp(1.125rem, 2.5vw, 2rem)'}
              fontWeight={'medium'}
              noOfLines={3}
            >
              {playerState?.title}
            </Heading>

            <Text
              as="p"
              fontSize={'clamp(.9375rem, 2vw, 1.25rem)'}
              color="#D9D9D9"
              noOfLines={1}
            >
              {playerState?.artist}
            </Text>
          </Flex>

          <PlaybackProgress />

          <PlaybackControls size="sm" />
        </Flex>
      </GridItem>
    </Grid>
  )
}
