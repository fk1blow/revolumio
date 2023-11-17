import {
  Flex,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react"
import { FunctionComponent, useMemo, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import { FaVolumeHigh, FaVolumeLow, FaVolumeOff } from "react-icons/fa6"

interface VolumeTrackProps {}

export const VolumeTrack: FunctionComponent<VolumeTrackProps> = (_props) => {
  const [volume, setVolume] = useState(0)

  const volumeIncrement = 5

  useHotkeys(
    "arrow up",
    () => {
      setVolume((prev) => {
        if (prev >= 100) return 100
        return prev + volumeIncrement
      })
    },
    []
  )
  useHotkeys(
    "arrow down",
    () => {
      setVolume((prev) => {
        if (prev <= 0) return 0
        return prev - volumeIncrement
      })
    },
    []
  )
  useHotkeys("m", () => console.log("mute"), [])

  const renderVolumeIcon = useMemo(() => {
    if (volume === 0) return <FaVolumeOff />
    if (volume > 50) return <FaVolumeHigh />
    return <FaVolumeLow />
  }, [volume])

  return (
    <Flex alignItems={"center"} gap=".5rem">
      <IconButton
        aria-label="Volume"
        border="none"
        fontSize={"1rem"}
        maxH="3rem"
        maxW="3rem"
        variant="ghost"
        rounded={"full"}
        icon={renderVolumeIcon}
      />

      <RangeSlider w="10rem" aria-label={["min", "max"]} value={[volume]}>
        <RangeSliderTrack h="0.35rem">
          <RangeSliderFilledTrack h="0.5rem" bg="purple.500" />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
      </RangeSlider>
    </Flex>
  )
}
