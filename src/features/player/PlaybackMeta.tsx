import { Button, Flex, Image } from "@chakra-ui/react"
import { FunctionComponent } from "react"
import spaceStation from "../../assets/spacestationsoma.png"

interface PlaybackMetaProps {}

export const PlaybackMeta: FunctionComponent<PlaybackMetaProps> = (_props) => {
  return (
    <Flex gap="1rem">
      <Image src={spaceStation} h="100%" />

      <Flex
        flexDirection={"column"}
        justify={"center"}
        align={"start"}
        gap=".2rem"
      >
        <Button
          textAlign={"left"}
          padding="0"
          display="inline"
          border="none"
          width={"inherit"}
          variant="link"
          fontSize="sm"
        >
          Soma FM
        </Button>

        <Button
          textAlign={"left"}
          padding="0"
          display="inline"
          border="none"
          width={"inherit"}
          color="gray.400"
          variant="link"
          fontSize="small"
          fontWeight={"normal"}
        >
          Space Station Soma
        </Button>
      </Flex>
    </Flex>
  )
}
