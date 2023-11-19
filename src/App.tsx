import { ColorModeScript, Grid, GridItem } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import { Dashboard } from "./pages/dashboard/Dashboard"
import { useVolumioInitialization } from "./stores/volumio/hooks"
import { Player } from "./ui/player/Player"
import { Sidebar } from "./ui/sidebar/Sidebar"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
])

const queryClient = new QueryClient()

function App() {
  useVolumioInitialization()

  return (
    <>
      <ColorModeScript />

      <QueryClientProvider client={queryClient}>
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

          <GridItem as="main" colSpan={4} pl="4rem" display={"flex"} minH={0}>
            <RouterProvider router={router} />
          </GridItem>

          <GridItem as="footer" colSpan={5} bg="#272741">
            <Player />
          </GridItem>
        </Grid>
      </QueryClientProvider>
    </>
  )
}

export default App
