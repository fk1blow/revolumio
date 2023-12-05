import { Flex, IconButton } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { FaGear, FaListUl, FaMagnifyingGlass, FaStar } from 'react-icons/fa6'
import { MediaSources } from './MediaSources'

export const Sidebar: FunctionComponent<unknown> = () => {
  return (
    <Flex
      direction={'column'}
      align={'center'}
      px={'.75rem'}
      pt={'2rem'}
      h={'full'}
      w={'5rem'}
      gap={'.5rem'}
      justify={'space-between'}
      bg={'#1F1F23'}
    >
      <Flex direction={'column'} gap={'.5rem'} flexGrow={1}>
        <IconButton
          aria-label="Home"
          variant="ghost"
          border="none"
          fontSize={'1rem'}
          color={'#E1E2E7'}
          h={'2.625rem'}
          w={'2.625rem'}
          rounded={'.75rem'}
          icon={<FaMagnifyingGlass />}
          _focus={{ outline: 'none' }}
        />

        <IconButton
          aria-label="Home"
          isActive
          variant="ghost"
          border="none"
          fontSize={'1.25rem'}
          color={'#E1E2E7'}
          h={'2.625rem'}
          w={'2.625rem'}
          rounded={'.75rem'}
          icon={<FaStar />}
          _focus={{ outline: 'none' }}
          _active={{
            bg: '#6A4477',
          }}
        />

        <IconButton
          aria-label="Home"
          variant="ghost"
          border="none"
          fontSize={'1.25rem'}
          color={'#E1E2E7'}
          h={'2.625rem'}
          w={'2.625rem'}
          rounded={'.75rem'}
          icon={<FaListUl />}
          _focus={{ outline: 'none' }}
        />
      </Flex>

      <MediaSources />

      <Flex
        direction={'column'}
        flexGrow={1}
        justifyContent={'end'}
        pb={'2rem'}
      >
        <IconButton
          aria-label="Home"
          variant="ghost"
          border="none"
          fontSize={'1.25rem'}
          color={'#E1E2E7'}
          h={'2.625rem'}
          w={'2.625rem'}
          rounded={'.75rem'}
          _focus={{ outline: 'none' }}
          icon={<FaGear />}
        />
      </Flex>
    </Flex>
  )
}
