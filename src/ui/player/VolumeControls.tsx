import {
  Flex,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'
import { FunctionComponent, useCallback, useMemo, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import {
  FaVolumeHigh,
  FaVolumeLow,
  FaVolumeOff,
  FaVolumeXmark,
} from 'react-icons/fa6'
import { usePlayerVolume } from './player-controls.hooks'

export interface VolumeControlsProps {
  // Whether the volume track should be displayed inline or floating
  style: 'inline' | 'floating'
}

export const VolumeControls: FunctionComponent<VolumeControlsProps> = ({
  style = 'inline',
}: VolumeControlsProps) => {
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

  const renderRangeSlider = useMemo(() => {
    return (
      <RangeSlider
        aria-label={['min', 'max']}
        w={style === 'floating' ? '3rem' : '10rem'}
        mr={style === 'inline' ? '0.625rem' : '0rem'}
        orientation={style === 'floating' ? 'vertical' : 'horizontal'}
        focusThumbOnChange={false}
        value={[muteState.isMuted ? 0 : volume]}
        onChange={onClickVolumeRange}
      >
        <RangeSliderTrack w="0.5rem" bg={'#6A4477'}>
          {!muteState.isMuted && (
            <RangeSliderFilledTrack w="0.5rem" bg="#BB7CD1" />
          )}
        </RangeSliderTrack>
        <RangeSliderThumb h={'1rem'} w={'1rem'} index={0} tabIndex={-1} />
      </RangeSlider>
    )
  }, [muteState.isMuted, onClickVolumeRange, style, volume])

  const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      {style === 'floating' ? (
        <Popover
          isOpen={isOpened}
          closeOnBlur={true}
          onOpen={() => setIsOpened(true)}
          onClose={() => setIsOpened(false)}
          isLazy
          lazyBehavior="keepMounted"
          placement="top"
        >
          <PopoverTrigger>
            <Flex alignItems={'center'}>
              <IconButton
                aria-label="Volume"
                border="none"
                fontSize={'1.25rem'}
                variant="ghost"
                rounded={'full'}
                _focus={{ outline: 'none' }}
                icon={renderVolumeIcon}
              />
            </Flex>
          </PopoverTrigger>

          <PopoverContent
            h={'200px'}
            w={'auto'}
            pb="0rem"
            bg="transparent"
            outline={'none'}
            border={'none'}
          >
            {renderRangeSlider}
          </PopoverContent>
        </Popover>
      ) : (
        <Flex alignItems={'center'} gap=".5rem">
          <IconButton
            aria-label="Volume"
            onClick={toggleMuteState}
            border="none"
            fontSize={'1.25rem'}
            variant="ghost"
            rounded={'full'}
            _focus={{ outline: 'none' }}
            icon={renderVolumeIcon}
          />
          {renderRangeSlider}
        </Flex>
      )}
    </>
  )
}
