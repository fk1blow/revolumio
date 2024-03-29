import { Box, Flex } from '@chakra-ui/react'
import { FunctionComponent, useMemo } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useMediaQuery } from 'react-responsive'
import { useFavoriteItemsStore } from '../../stores/favorites/favorites.store'
import { FavoriteItem } from '../../stores/favorites/types'
import { breakpoints } from '../../theme-customization'
import { Section } from './Section'

interface DashboardProps {}

export const Dashboard: FunctionComponent<DashboardProps> = (_props) => {
  // TODO should... have another way of getting the sources(available)
  const serviceSources = ['youtube2', 'soundcloud']
  const favoritesLists = useFavoriteItemsStore((state) => state.lists)
  // console.log('favoritesLists: ', favoritesLists)

  const is2xlScreen = useMediaQuery({ minWidth: breakpoints['2xl'] })
  const is4xlScreen = useMediaQuery({ minWidth: breakpoints['4xl'] })

  const containerXGap = useMemo(() => {
    if (is2xlScreen && !is4xlScreen) {
      return '3rem'
    }
    if (is4xlScreen) {
      return '5.125rem'
    }
    return '2rem'
  }, [is2xlScreen, is4xlScreen])

  const sectionsList = useMemo(() => {
    if (!favoritesLists?.[0]) {
      return { youtube: [], soundcloud: [] }
    }

    return favoritesLists[0].items.reduce(
      (acc, item) => {
        return {
          youtube:
            item.service === 'youtube2' ? [...acc.youtube, item] : acc.youtube,
          soundcloud:
            item.service === 'soundcloud'
              ? [...acc.soundcloud, item]
              : acc.soundcloud,
        }
      },
      { youtube: [], soundcloud: [] } as {
        youtube: FavoriteItem[]
        soundcloud: FavoriteItem[]
      }
    )
  }, [favoritesLists])

  useHotkeys(
    'arrow up',
    (evt: KeyboardEvent) => {
      evt.preventDefault()
    },
    []
  )

  useHotkeys(
    'arrow down',
    (evt: KeyboardEvent) => {
      evt.preventDefault()
    },
    []
  )

  return (
    <Flex
      minH={0}
      overflow={'auto'}
      px={containerXGap}
      pt={is4xlScreen ? '1rem' : '0'}
      pb={'calc(100% / 4)'}
      w={'full'}
      flexDirection={'column'}
      gap={'3rem'}
    >
      <Section name="youtube" entries={sectionsList.youtube} />
      <Box bg={'gray.700'} minH="1px"></Box>
      <Section name="soundcloud" entries={sectionsList.soundcloud} />
    </Flex>
  )
}
