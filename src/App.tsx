import { Box, ColorModeScript, Grid, GridItem } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/dashboard/Dashboard'
import { usePlayerStore } from './stores/player/player.store'
import { useVolumioInitialization } from './stores/volumio/hooks'
import { DockedPlayer } from './ui/docked-player/DockedPlayer'
import { FocusedPlayer } from './ui/focus-player/FocusedPlayer'
import { Sidebar } from './ui/sidebar/Sidebar'

function App() {
  useVolumioInitialization()

  const showingDockedPlayer = usePlayerStore((state) => state.isDocked)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
    },
  ])

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Box
        position={'relative'}
        h="100vh"
        w="100vw"
        bg={showingDockedPlayer ? '#232528' : 'transparent'}
      >
        <ColorModeScript />

        <Grid
          display={showingDockedPlayer ? 'grid' : 'none'}
          h={'100vh'}
          w={'100vw'}
          templateRows="2rem 1fr auto"
          templateColumns="minmax(3rem, auto) 1fr"
          rowGap={'0'}
        >
          <GridItem as="section" rowSpan={1} colSpan={5} maxH="3rem" h={0} />

          <GridItem
            as="section"
            rowStart={1}
            rowEnd={3}
            rowSpan={3}
            colSpan={1}
          >
            <Sidebar />
          </GridItem>

          <GridItem
            rowStart={2}
            rowEnd={3}
            as="main"
            colSpan={4}
            display={'flex'}
            minH={0}
          >
            {true && <RouterProvider router={router} />}
          </GridItem>

          <GridItem as="footer" colSpan={5}>
            <DockedPlayer />
          </GridItem>
        </Grid>

        {!showingDockedPlayer && <FocusedPlayer />}
      </Box>
    </QueryClientProvider>
  )
}

export default App
