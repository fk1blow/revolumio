import { Box } from "@chakra-ui/react"
import { FunctionComponent } from "react"
import { VolumeTrack } from "./VolumeTrack"

interface OtherControlsProps {}

export const OtherControls: FunctionComponent<OtherControlsProps> = (
  _props
) => {
  return (
    <Box h="3rem" pr={"2rem"}>
      <VolumeTrack />
    </Box>
  )
}
