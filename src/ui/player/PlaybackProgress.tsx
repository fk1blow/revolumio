import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface PlaybackProgressProps {
  rounded?: boolean
}

export const PlaybackProgress: FunctionComponent<PlaybackProgressProps> = ({
  rounded = true,
}) => {
  return (
    <RangeSlider w="100%" h={'1.5rem'} aria-label={['min', 'max']} value={[20]}>
      <RangeSliderTrack bg="#6A4477" rounded={rounded ? '.5rem' : 0}>
        <RangeSliderFilledTrack bg="#BB7CD1" />
      </RangeSliderTrack>
      {/* <RangeSliderThumb index={0} h={'1.25rem'} w={'1.25rem'} /> */}
    </RangeSlider>
  )
}
