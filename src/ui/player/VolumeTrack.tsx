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
      if (isMuted) setIsMuted(false)
      setVolume((prev) => (prev >= 100 ? 100 : prev + volumeIncrement))
    },
    [isMuted]
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

  const onClickVolumeRange = useCallback(
    ([value]: number[]) => {
      if (isMuted && value > 0) setIsMuted(false)
      setVolume(value)
    },
    [isMuted]
  )

  const renderVolumeIcon = useMemo(() => {
    if (isMuted) return <FaVolumeXmark />
    if (volume === 0) return <FaVolumeOff />
    if (volume > 50) return <FaVolumeHigh />
    return <FaVolumeLow />
  }, [volume, isMuted])

  return (
    <Flex alignItems={"center"} gap="2rem">
      <IconButton
        onClick={() => setIsMuted((prev) => !prev)}
        aria-label="Volume"
        border="none"
        fontSize={"1.25rem"}
        maxH="3rem"
        maxW="3rem"
        variant="ghost"
        rounded={"full"}
        icon={renderVolumeIcon}
      />

      <RangeSlider
        w="10rem"
        aria-label={["min", "max"]}
        focusThumbOnChange={false}
        value={[isMuted ? 0 : volume]}
        onChange={onClickVolumeRange}
      >
        <RangeSliderTrack h="0.35rem">
          {!isMuted && <RangeSliderFilledTrack h="0.5rem" bg="purple.500" />}
        </RangeSliderTrack>
        <RangeSliderThumb h="1rem" w={"1rem"} index={0} tabIndex={-1} />
      </RangeSlider>
    </Flex>
  )
}
