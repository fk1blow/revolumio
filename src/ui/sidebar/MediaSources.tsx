import { Box, IconButton } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import {
  FaPlus,
  FaRadio,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from 'react-icons/fa6'

enum BrandColorsToSourcesMap {
  youtube2 = '#FF0000',
  spotify = '#24BB59',
  soundcloud = '#FF5500',
}

interface MediaSourcesProps {}

export const MediaSources: FunctionComponent<MediaSourcesProps> = (_props) => {
  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      gap={'1rem'}
      listStyleType={'none'}
    >
      <IconButton
        aria-label="Youtube"
        variant="ghost"
        border="none"
        fontSize={'1.5625rem'}
        color={'gray.300'}
        size="lg"
        icon={<FaYoutube />}
      />

      <IconButton
        aria-label="Spotify"
        variant="ghost"
        border="none"
        fontSize={'1.5625rem'}
        color={'gray.300'}
        size="lg"
        icon={<FaSpotify />}
      />

      <IconButton
        aria-label="Soundcloud"
        variant="ghost"
        border="none"
        color={'gray.300'}
        fontSize={'1.5625rem'}
        size="lg"
        icon={<FaSoundcloud />}
      />

      <IconButton
        aria-label="Radio"
        variant="ghost"
        border="none"
        fontSize={'1.5625rem'}
        color={'gray.300'}
        size="lg"
        icon={<FaRadio />}
      />

      <IconButton
        aria-label="Add Media Source"
        title="Add Media Source"
        variant="ghost"
        border="none"
        fontSize={'1.5625rem'}
        color={'gray.300'}
        size="lg"
        icon={<FaPlus />}
      />
    </Box>
  )
}
