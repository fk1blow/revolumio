import { Box, IconButton } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { FaStar } from 'react-icons/fa6'
import { MediaSources } from './MediaSources'

export const Sidebar: FunctionComponent<unknown> = () => {
  return (
    <>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        listStyleType={'none'}
        mt="-.25rem"
        mb=".75rem"
        position={'relative'}
      >
        <Box
          minH="full"
          bg="purple.400"
          w={'3px'}
          position={'absolute'}
          borderRadius={'3px'}
          left={0}
        />
        <IconButton
          aria-label="Home"
          variant="ghost"
          border="none"
          fontSize={'1.5rem'}
          color={'gray.300'}
          size="lg"
          icon={<FaStar />}
        />
      </Box>

      <MediaSources />
    </>
  )
}
