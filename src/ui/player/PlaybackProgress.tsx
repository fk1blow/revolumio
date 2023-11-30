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
    <RangeSlider h="0.625rem" w="100%" aria-label={['min', 'max']} value={[20]}>
      <RangeSliderTrack h="0.5rem" bg="#585960" rounded={rounded ? '.5rem' : 0}>
        <RangeSliderFilledTrack h="0.625rem" bg="#E1E2E7" />
      </RangeSliderTrack>
      {/* <RangeSliderThumb index={0} h={'1.25rem'} w={'1.25rem'} /> */}
    </RangeSlider>
  )
}
