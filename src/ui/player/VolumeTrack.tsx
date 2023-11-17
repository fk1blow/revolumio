import {
  Flex,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react"
import { FunctionComponent, useCallback, useMemo, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import {
  FaVolumeHigh,
  FaVolumeLow,
  FaVolumeOff,
  FaVolumeXmark,
} from "react-icons/fa6"

interface VolumeTrackProps {}

export const VolumeTrack: FunctionComponent<VolumeTrackProps> = (_props) => {
  const [volume, setVolume] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
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
  useHotkeys(
    "m",
    () => {
      setIsMuted((prev) => !prev)
    },
    []
  )

  const onClickVolumeRange = useCallback(([value]: number[]) => {
    setVolume(value)
  }, [])

  const renderVolumeIcon = useMemo(() => {
    if (isMuted) return <FaVolumeXmark />
    if (volume === 0) return <FaVolumeOff />
    if (volume > 50) return <FaVolumeHigh />
    return <FaVolumeLow />
  }, [volume, isMuted])

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

      <RangeSlider
        w="10rem"
        aria-label={["min", "max"]}
        value={[volume]}
        onChange={onClickVolumeRange}
      >
        <RangeSliderTrack h="0.35rem">
          {!isMuted && <RangeSliderFilledTrack h="0.5rem" bg="purple.500" />}
        </RangeSliderTrack>
        {!isMuted && <RangeSliderThumb index={0} />}
      </RangeSlider>
    </Flex>
  )
}
