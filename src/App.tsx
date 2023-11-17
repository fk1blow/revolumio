import { ColorModeScript, Grid, GridItem } from "@chakra-ui/react"
import "./App.css"
import { Player } from "./features/player/Player"
import { Sidebar } from "./features/sidebar/Sidebar"

function App() {
  return (
    <>
      <ColorModeScript />
      <Grid
        h="100vh"
        w="100vw"
        templateRows="3rem 1fr 6.25rem"
        templateColumns="6.25rem 1fr"
      >
        <GridItem rowSpan={1} colSpan={5} maxH="3rem" />

        <GridItem as="section" rowSpan={1} colSpan={1}>
          <Sidebar />
        </GridItem>

        <GridItem as="main" colSpan={4}>
          main content
        </GridItem>

        <GridItem as="footer" colSpan={5}>
          <Player />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
