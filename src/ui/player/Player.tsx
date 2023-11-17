import { Box, Flex } from "@chakra-ui/react"
import { FunctionComponent } from "react"
import { OtherControls } from "./OtherControls"
import { PlaybackControls } from "./PlaybackControls"
import { PlaybackMeta } from "./PlaybackMeta"

interface PlayerProps {}

export const Player: FunctionComponent<PlayerProps> = (_props) => {
  return (
    <Flex w="100%" h="6.25rem" justify={"space-between"} gap="4rem">
      <Box>
        <PlaybackMeta />
      </Box>

      <Box maxW="50%" flex="2" display={"flex"} justifyContent={"center"}>
        <PlaybackControls />
      </Box>

      <Box>
        <OtherControls />
      </Box>
    </Flex>
  )
}
