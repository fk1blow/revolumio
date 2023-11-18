import { Box } from "@chakra-ui/react"
import { FunctionComponent } from "react"
import { VolumeTrack } from "./VolumeTrack"

interface OtherControlsProps {}

export const OtherControls: FunctionComponent<OtherControlsProps> = (
  _props
) => {
  return (
    <Box h="full" p={"1.5rem"}>
      <VolumeTrack />
    </Box>
  )
}
