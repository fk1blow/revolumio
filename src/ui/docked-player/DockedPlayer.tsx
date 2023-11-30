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

  const is2XLScreen = useMediaQuery({
    minWidth: theme.breakpoints['2xl'],
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

  const playerContainerHeight = useMemo(() => {
    if (is2XLScreen) {
      return '140px'
    }
    return '100px'
  }, [is2XLScreen])

  return (
    <Flex
      h={playerContainerHeight}
      p={isMediumScreen ? '1rem' : '.5rem'}
      bg={'#232628'}
      gap={isMediumScreen ? '1rem' : '.5rem'}
      position={'relative'}
    >
      <Box
        position={'absolute'}
        top={'-16px'}
        left={0}
        w={'full'}
        h={'auto'}
        minH={0}
      >
        <PlaybackProgress rounded={false} />
      </Box>

      <Flex
        justifyContent={'start'}
        flexGrow={1}
        gap={isMediumScreen ? '1rem' : '.5rem'}
      >
        <PlaybackMeta
          showImage={isMediumScreen}
          onClickImage={showFocusedPlayer}
        />
      </Flex>

      <PlaybackControls style={playbackCtrlsStyle} size="sm" />

      <VolumeControls style={isXLScreen ? 'inline' : 'floating'} />
    </Flex>
  )
}
