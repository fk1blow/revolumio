import { Box } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { VolumeTrack } from './VolumeTrack'

interface VolumeControlsProps {}

export const VolumeControls: FunctionComponent<VolumeControlsProps> = (
  _props
) => {
  return (
    <Box h="full" p={'1.5rem'}>
      <VolumeTrack />
    </Box>
  )
}
