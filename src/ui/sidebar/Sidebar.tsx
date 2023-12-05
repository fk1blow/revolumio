import { Flex, IconButton } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { FaGear, FaStar } from 'react-icons/fa6'
import { MediaSources } from './MediaSources'

export const Sidebar: FunctionComponent<unknown> = () => {
  return (
    <Flex
      direction={'column'}
      px={'.75rem'}
      pt={'5rem'}
      h={'full'}
      w={'5rem'}
      minW={0}
      bg={'#1F1F23'}
    >
      <IconButton
        aria-label="Home"
        variant="ghost"
        border="none"
        fontSize={'1.25rem'}
        color={'#E1E2E7'}
        size="lg"
        icon={<FaStar />}
      />

      <MediaSources />

      <Flex
        direction={'column'}
        flexGrow={1}
        justifyContent={'end'}
        pb={'4rem'}
      >
        <IconButton
          aria-label="Home"
          variant="ghost"
          border="none"
          fontSize={'1.25rem'}
          color={'#E1E2E7'}
          size="lg"
          icon={<FaGear />}
        />
      </Flex>
    </Flex>
  )
}
