import { Flex } from '@chakra-ui/react'
import { FunctionComponent, useMemo } from 'react'
import {
  FaGear,
  FaListUl,
  FaMagnifyingGlass,
  FaPlus,
  FaPodcast,
  FaRadio,
  FaSoundcloud,
  FaSpotify,
  FaStar,
  FaYoutube,
} from 'react-icons/fa6'
import { useMediaQuery } from 'react-responsive'
import { breakpoints } from '../../theme-customization'
import { SidebarButton } from './SidebarButton'

export const Sidebar: FunctionComponent<unknown> = () => {
  const isSidebarLarge = useMediaQuery({ minWidth: breakpoints['2xl'] })

  const sidebarWidth = useMemo(
    () => (isSidebarLarge ? '16rem' : 'auto'),
    [isSidebarLarge]
  )

  return (
    <Flex
      as="nav"
      direction={'column'}
      align={'center'}
      px={isSidebarLarge ? '1.125rem' : '1.125rem'}
      pt={'2rem'}
      h={'full'}
      minW={sidebarWidth}
      gap={'.5rem'}
      justify={'space-between'}
      alignItems={'center'}
      bg={'#1F1F23'}
    >
      <Flex direction={'column'} gap={'.25rem'} flexGrow={1} w={'full'}>
        <SidebarButton label="Search" icon={<FaMagnifyingGlass />} />
        <SidebarButton active label="Favorites" icon={<FaStar />} />
        <SidebarButton label="Queue" icon={<FaListUl />} />
      </Flex>

      {/* <MediaSources /> */}
      <Flex
        w="full"
        flexDirection="column"
        gap={'.25rem'}
        listStyleType={'none'}
      >
        <SidebarButton label="Youtube" icon={<FaYoutube />} />
        <SidebarButton label="Spotify" icon={<FaSpotify />} />
        <SidebarButton label="Soundcloud" icon={<FaSoundcloud />} />
        <SidebarButton label="Radio" icon={<FaRadio />} />
        <SidebarButton label="Podcasts" icon={<FaPodcast />} />
        <SidebarButton label="Add Media" icon={<FaPlus />} />
      </Flex>

      <Flex
        direction={'column'}
        flexGrow={1}
        justifyContent={'end'}
        pb={'2rem'}
        w={'full'}
      >
        <SidebarButton label="Settings" icon={<FaGear />} />
      </Flex>
    </Flex>
  )
}
