import { Flex } from "@chakra-ui/react"
import { FunctionComponent } from "react"
import { PlaybackMeta } from "./PlaybackMeta"
import { PlayerControls } from "./PlayerControls"

interface PlayerProps {}

export const Player: FunctionComponent<PlayerProps> = (_props) => {
  return (
    <Flex w="100%" h="full" justify={"space-between"} gap="4rem">
      <PlaybackMeta />
      <PlayerControls />
    </Flex>
  )
}
