import {
  Box,
  ColorModeScript,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  theme,
  useMediaQuery,
} from '@chakra-ui/react'
import { QueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useMediaQuery as useMediaQueryFoo } from 'react-responsive'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Player } from './ui/responsive-player/Player'
import { Sidebar } from './ui/sidebar/Sidebar'

function App() {
  // useVolumioInitialization()
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
    },
  ])

  const queryClient = new QueryClient()

  // const isPortrait = useMediaQueryFoo({ orientation: 'portrait' })
  // const isFoox = useMediaQueryFoo({ aspectRatio: "min-aspect-ratio: ~'4/3'" })
  const exactly11 = useMediaQueryFoo({ aspectRatio: '1/1' })
  const exactly34 = useMediaQueryFoo({ aspectRatio: '3/4' })
  const lessThan34 = useMediaQueryFoo({ maxAspectRatio: '3/4' })
  const between34and11 = useMediaQueryFoo({
    minAspectRatio: '3/4',
    maxAspectRatio: '1/1',
  })
  const between11and43 = useMediaQueryFoo({
    minAspectRatio: '1/1',
    maxAspectRatio: '4/3',
  })
  const exactly43 = useMediaQueryFoo({ aspectRatio: '4/3' })
  const greaterThan43 = useMediaQueryFoo({ minAspectRatio: '4/3' })
  // const [greaterThan43] = useMediaQuery(['(min-aspect-ratio:4/3)'])

  const foox = useMediaQuery(['(max-aspect-ratio:3/4)'])
  // const [exactly34] = useMediaQuery(['(aspect-ratio:3/4)'])
  // const [between34and11] = useMediaQuery([
  //   '(min-aspect-ratio:3/4) and (max-aspect-ratio:1/1)',
  // ])
  // const [exactly11] = useMediaQuery(['aspect-ratio:1/1'])
  // const [between11and43] = useMediaQuery([
  //   '(min-aspect-ratio:1/1) and (max-aspect-ratio:4/3)',
  // ])
  // const [exactly43] = useMediaQuery(['(aspect-ratio:4/3)'])
  // const [greaterThan43] = useMediaQuery(['(min-aspect-ratio:4/3)'])

  const [isMdBreakpoint, isLgBreakpoint] = useMediaQuery([
    `(min-width: ${theme.breakpoints.md})`,
    `(min-width: ${theme.breakpoints.lg})`,
  ])
  // useEffect(() => console.log('exactly11: ', exactly11), [exactly11])

  const gridTemplateColumns = useMemo(() => {
    if (!isMdBreakpoint) {
      return '1fr'
    }
    if (isMdBreakpoint && !isLgBreakpoint) {
      return '5fr 7fr'
    }
    return '1fr'
  }, [isLgBreakpoint, isMdBreakpoint])

  return (
    <Box position={'relative'} h="100vh" w="100vw">
      <ColorModeScript />

      {/* <BackgroundBlur /> */}

      {/* <Player /> */}

      <Flex display={'none'} direction={'column'}>
        <Box w={'55%'} flex={1}>
          <Image
            rounded=".5rem"
            objectFit={'contain'}
            src="https://i.ytimg.com/vi/P5fzCZFPQ6c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_dAFEM7XPRmI4mraqQrZ4COoXNg"
          />
        </Box>

        <Box
          display={'flex'}
          flex={1}
          flexDirection={'column'}
          w={'45%'}
          wordBreak={'break-all'}
        >
          {/* <Box bg="royalblue" minW={0} w={'300px'} h={'200px'}></Box> */}
          <Heading fontSize={'1.375rem'} fontWeight={'medium'} noOfLines={3}>
            Beautiful Chef Collection! Ramen & Fried Rice - Japanese Street Food
            美人店長のラーメン・デカ盛り炒飯 ・たこ焼き・たこせんべい
          </Heading>

          <Text as="p" fontSize={'1.125rem'} color="#D9D9D9" noOfLines={1}>
            MOGUMOGU - Food Entertainment - モグモグ
          </Text>
        </Box>
      </Flex>

      {/* ================================================================== */}

      <Grid
        display={'none'}
        templateRows={'1'}
        templateColumns={gridTemplateColumns}
      >
        <GridItem>
          <Image
            minW={'360px'}
            rounded=".5rem"
            objectFit={'contain'}
            src="https://i.ytimg.com/vi/P5fzCZFPQ6c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_dAFEM7XPRmI4mraqQrZ4COoXNg"
          />
        </GridItem>

        <GridItem bg={'#572741'}>
          {/* <Box bg="royalblue" minW={0} wordBreak={'break-all'}></Box> */}
          <Heading fontSize={'1.375rem'} fontWeight={'medium'} noOfLines={3}>
            Beautiful Chef Collection! Ramen & Fried Rice - Japanese Street Food
            美人店長のラーメン・デカ盛り炒飯 ・たこ焼き・たこせんべい
          </Heading>

          <Text as="p" fontSize={'1.125rem'} color="#D9D9D9" noOfLines={1}>
            MOGUMOGU - Food Entertainment - モグモグ
          </Text>
        </GridItem>
      </Grid>

      {/* <QueryClientProvider client={queryClient}> */}
      <Grid
        h="100vh"
        w="100vw"
        templateRows="3rem 1fr 8rem"
        templateColumns="6.25rem 1fr"
      >
        <GridItem rowSpan={1} colSpan={5} maxH="3rem" />

        <GridItem as="section" rowSpan={1} colSpan={1}>
          <Sidebar />
        </GridItem>

        <GridItem as="main" colSpan={4} pl="4rem" display={'flex'} minH={0}>
          <RouterProvider router={router} />
        </GridItem>

        <GridItem as="footer" colSpan={5} bg="#272741">
          <Player />
        </GridItem>
      </Grid>
      {/* </QueryClientProvider> */}
    </Box>
  )
}

export default App
