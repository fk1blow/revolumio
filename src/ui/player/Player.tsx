import { Grid } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { PlaybackMeta } from './PlaybackMeta'
import { PlayerControls } from './PlayerControls'

interface PlayerProps {}

export const Player: FunctionComponent<PlayerProps> = (_props) => {
  return (
    <Grid gridTemplateColumns={'3fr 5fr 3fr'} w={'full'} h={'full'}>
      <PlaybackMeta />
      <PlayerControls />
    </Grid>
  )
}
