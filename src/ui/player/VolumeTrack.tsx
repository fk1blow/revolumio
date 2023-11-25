import {
  Flex,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'
import { FunctionComponent, useCallback, useMemo } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import {
  FaVolumeHigh,
  FaVolumeLow,
  FaVolumeOff,
  FaVolumeXmark,
} from 'react-icons/fa6'
import { usePlayerVolume } from './player-controls.hooks'

export const VolumeTrack: FunctionComponent = () => {
  const {
    volume,
    changeVolume,
    changeVolumeUp,
    changeVolumeDown,
    muteState,
    toggleMuteState,
  } = usePlayerVolume()

  useHotkeys('arrow up', changeVolumeUp, [volume, changeVolume])

  useHotkeys('arrow down', changeVolumeDown, [volume, changeVolume])

  useHotkeys('m', toggleMuteState, [volume, muteState])

  const onClickVolumeRange = useCallback(
    ([value]: number[]) => {
      changeVolume(value)
    },
    [changeVolume]
  )

  const renderVolumeIcon = useMemo(() => {
    if (muteState.isMuted) return <FaVolumeXmark />
    if (volume === 0) return <FaVolumeOff />
    if (volume > 50) return <FaVolumeHigh />
    return <FaVolumeLow />
  }, [volume, muteState])

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
        value={[muteState.isMuted ? 0 : volume]}
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
