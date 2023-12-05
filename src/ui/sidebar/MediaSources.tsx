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
      gap={'.5rem'}
      listStyleType={'none'}
    >
      <IconButton
        aria-label="Youtube"
        variant="ghost"
        border="none"
        fontSize={'1.25rem'}
        color={'#E1E2E7'}
        h={'2.625rem'}
        w={'2.625rem'}
        rounded={'.75rem'}
        icon={<FaYoutube />}
        _focus={{ outline: 'none' }}
      />

      <IconButton
        aria-label="Spotify"
        variant="ghost"
        border="none"
        fontSize={'1.25rem'}
        color={'#E1E2E7'}
        h={'2.625rem'}
        w={'2.625rem'}
        rounded={'.75rem'}
        _focus={{ outline: 'none' }}
        icon={<FaSpotify />}
      />

      <IconButton
        aria-label="Soundcloud"
        variant="ghost"
        border="none"
        color={'#E1E2E7'}
        fontSize={'1.25rem'}
        h={'2.625rem'}
        w={'2.625rem'}
        rounded={'.75rem'}
        _focus={{ outline: 'none' }}
        icon={<FaSoundcloud />}
      />

      <IconButton
        aria-label="Radio"
        variant="ghost"
        border="none"
        fontSize={'1.25rem'}
        color={'#E1E2E7'}
        h={'2.625rem'}
        w={'2.625rem'}
        rounded={'.75rem'}
        _focus={{ outline: 'none' }}
        icon={<FaRadio />}
      />

      <IconButton
        aria-label="Add Media Source"
        title="Add Media Source"
        variant="ghost"
        border="none"
        fontSize={'1.25rem'}
        color={'#E1E2E7'}
        h={'2.625rem'}
        w={'2.625rem'}
        rounded={'.75rem'}
        _focus={{ outline: 'none' }}
        icon={<FaPlus />}
      />
    </Box>
  )
}
