import {
  Flex,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { FaList } from 'react-icons/fa6'
import { VolumeTrack } from '../../player/VolumeTrack'

interface PlaybackMetaProps {}

export const PlaybackMeta: FunctionComponent<PlaybackMetaProps> = (_props) => {
  return (
    <Flex px={'2rem'} py={'1rem'} bg="#032D34" gap={'2rem'}>
      {/* TODO should move this to its own component */}
      <RangeSlider w="100%" aria-label={['min', 'max']} value={[80]}>
        <RangeSliderTrack h="0.625rem" bg="#554130">
          <RangeSliderFilledTrack h="0.625rem" bg="#D9731A" />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} h={'1.25rem'} w={'1.25rem'} />
      </RangeSlider>

      <Flex gap="1rem">
        <VolumeTrack style="floating" />

        <IconButton
          aria-label="Volume"
          border="none"
          fontSize={'1.25rem'}
          variant="ghost"
          rounded={'full'}
          _focus={{ outline: 'none' }}
          icon={<FaList />}
        />
      </Flex>
    </Flex>
  )
}
