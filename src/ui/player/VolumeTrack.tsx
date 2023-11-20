import {
  Flex,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'
import throttle from 'lodash.throttle'
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import {
  FaVolumeHigh,
  FaVolumeLow,
  FaVolumeOff,
  FaVolumeXmark,
} from 'react-icons/fa6'
import { usePlayerVolume } from './player-controls.hooks'

const volumeSyncThrottleWaitTime = 500
const volumeStepSize = 5

export const VolumeTrack: FunctionComponent = () => {
  const { setVolume: setSyncedVolume, volume: syncedVolume } = usePlayerVolume()

  const [internalVolume, setInternalVolume] = useState(syncedVolume)
  const [muteState, setMuteState] = useState<{
    volumeWas: number
    isMuted: boolean
  }>({
    volumeWas: syncedVolume,
    isMuted: false,
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledSetSyncedVolume = useCallback(
    throttle((vol: number) => setSyncedVolume(vol), volumeSyncThrottleWaitTime),
    []
  )

  // set the "synced" volume when the internal volume changes
  useEffect(() => {
    throttledSetSyncedVolume(internalVolume)
  }, [internalVolume, throttledSetSyncedVolume])

  // set the internal volume value when the (incoming)"synced" volume changes
  useEffect(() => {
    setInternalVolume(syncedVolume)
  }, [syncedVolume])

  useHotkeys(
    'arrow up',
    () => {
      setInternalVolume((prev) => (prev >= 100 ? 100 : prev + volumeStepSize))
    },
    []
  )

  useHotkeys(
    'arrow down',
    () => {
      setInternalVolume((prev) => {
        if (prev <= 0) return 0
        return prev - volumeStepSize
      })
    },
    []
  )

  const toggleMuteState = useCallback(() => {
    if (!muteState.isMuted) {
      setMuteState(() => ({
        volumeWas: internalVolume,
        isMuted: true,
      }))

      setInternalVolume(0)
    } else {
      setMuteState(({ isMuted: current, volumeWas: previous }) => ({
        volumeWas: previous,
        isMuted: !current,
      }))

      setInternalVolume(muteState.volumeWas)
    }
  }, [internalVolume, muteState.isMuted, muteState.volumeWas])

  useHotkeys('m', toggleMuteState, [internalVolume, muteState])

  const onClickVolumeRange = useCallback(([value]: number[]) => {
    setInternalVolume(value)
  }, [])

  const renderVolumeIcon = useMemo(() => {
    if (muteState.isMuted) return <FaVolumeXmark />
    if (internalVolume === 0) return <FaVolumeOff />
    if (internalVolume > 50) return <FaVolumeHigh />
    return <FaVolumeLow />
  }, [internalVolume, muteState])

  return (
    <Flex alignItems={'center'} gap="2rem">
      <IconButton
        onClick={toggleMuteState}
        aria-label="Volume"
        border="none"
        fontSize={'1.25rem'}
        maxH="3rem"
        maxW="3rem"
        variant="ghost"
        rounded={'full'}
        _focus={{ outline: 'none' }}
        icon={renderVolumeIcon}
      />

      <RangeSlider
        w="10rem"
        aria-label={['min', 'max']}
        focusThumbOnChange={false}
        value={[muteState.isMuted ? 0 : internalVolume]}
        onChange={onClickVolumeRange}
      >
        <RangeSliderTrack h="0.35rem">
          {!muteState.isMuted && (
            <RangeSliderFilledTrack h="0.5rem" bg="purple.500" />
          )}
        </RangeSliderTrack>
        <RangeSliderThumb h="1rem" w={'1rem'} index={0} tabIndex={-1} />
      </RangeSlider>
    </Flex>
  )
}
