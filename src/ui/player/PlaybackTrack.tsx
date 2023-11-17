import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
} from "@chakra-ui/react"
import { FunctionComponent } from "react"

interface PlaybackTrackProps {}

export const PlaybackTrack: FunctionComponent<PlaybackTrackProps> = (
  _props
) => {
  return (
    <RangeSlider w="100%" aria-label={["min", "max"]} value={[0]}>
      <RangeSliderTrack h="0.35rem" bg="purple.500">
        <RangeSliderFilledTrack h="0.5rem" bg="purple.500" />
      </RangeSliderTrack>
      {/* disabled for now */}
      {/* <RangeSliderThumb index={0} /> */}
    </RangeSlider>
  )
}
