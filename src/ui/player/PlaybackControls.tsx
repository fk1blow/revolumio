import { Flex, IconButton } from "@chakra-ui/react"
import { FunctionComponent } from "react"
import { FaPlay } from "react-icons/fa6"
import { PlaybackTrack } from "./PlaybackTrack"

interface PlaybackControlsProps {}

export const PlaybackControls: FunctionComponent<PlaybackControlsProps> = (
  _props
) => {
  return (
    <Flex flexDir={"column"} w={"100%"} alignItems={"center"} gap="1.5rem">
      <IconButton
        aria-label="Play/Pause"
        border="none"
        colorScheme="gray"
        fontSize={"1.2rem"}
        maxH="3rem"
        maxW="3rem"
        size="lg"
        rounded={"full"}
        icon={<FaPlay />}
      />

      <PlaybackTrack />
    </Flex>
  )
}
