import { Box, Flex, theme } from '@chakra-ui/react'
import { FunctionComponent, useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'
import { usePlayerStore } from '../../stores/player/player.store'
import { PlaybackControls } from '../player/PlaybackControls'
import { PlaybackMeta } from '../player/PlaybackMeta'
import { PlaybackProgress } from '../player/PlaybackProgress'
import { VolumeControls } from '../player/VolumeControls'

interface DockerPlayerProps {}

export const DockedPlayer: FunctionComponent<DockerPlayerProps> = (_props) => {
  const showFocusedPlayer = usePlayerStore((state) => state.showFocusedPlayer)

  const isMediumScreen = useMediaQuery({
    minWidth: theme.breakpoints.md,
  })

  const isXLScreen = useMediaQuery({
    minWidth: theme.breakpoints.xl,
  })

  const isLargeScreen = useMediaQuery({
    minWidth: theme.breakpoints.lg,
  })

  const playbackCtrlsStyle = useMemo(() => {
    if (isMediumScreen && !isLargeScreen) {
      return 'slim'
    }
    if (isLargeScreen) {
      return 'full'
    }

    return 'single'
  }, [isLargeScreen, isMediumScreen])

  return (
    <Flex
      position={'relative'}
      px={'2rem'}
      py={'1rem'}
      gap={isMediumScreen ? '1rem' : '.5rem'}
      bg={'#1F1F23'}
    >
      <Box
        position={'absolute'}
        top={'-14px'}
        left={0}
        w={'full'}
        h={'auto'}
        minH={0}
      >
        <PlaybackProgress rounded={false} />
      </Box>

      <Flex
        maxW={theme.breakpoints.xl}
        w={'full'}
        mx={'auto'}
        justify={'space-between'}
        gap={'2rem'}
      >
        <Flex justifyContent={'start'} alignItems={'center'}>
          <PlaybackControls style={playbackCtrlsStyle} size="sm" />
        </Flex>

        <Flex
          justifyContent={'center'}
          mx={'auto'}
          flexGrow={1}
          gap={isMediumScreen ? '1rem' : '.5rem'}
        >
          <PlaybackMeta
            showImage={isMediumScreen}
            onClickImage={showFocusedPlayer}
          />
        </Flex>

        <Flex gap={{ base: '1rem', lg: '2rem' }}>
          <VolumeControls style={isXLScreen ? 'inline' : 'floating'} />
        </Flex>
      </Flex>
    </Flex>
  )
}
