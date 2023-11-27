import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import { FunctionComponent, useState } from 'react'
import { FaYoutube } from 'react-icons/fa6'
import { PlaybackControls } from './controls/PlaybackControls'
import { PlaybackMeta } from './player-small/PlaybackMeta'

interface PlayerSmallProps {}

export const PlayerSmall: FunctionComponent<PlayerSmallProps> = (_props) => {
  const [isExpanded, setIsExpanded] = useState(true)
  // if is expanded, then show the track details and the playback controls(small),
  // the seekbar and the sound(!!) controls
  // otherwise, show the play button, track and artist name, and the sound(!!) controls

  return (
    <Grid
      templateRows={'3fr minmax(2rem, auto)'}
      templateColumns={'40% 60%'}
      position={'absolute'}
      left={0}
      top={0}
      w={'100vw'}
      h={'100vh'}
    >
      <GridItem
        as="section"
        rowSpan={1}
        colSpan={1}
        pl={'1.5rem'}
        pt={'1.5rem'}
        pr=".75rem"
      >
        <Flex direction={'column'} h={'full'} align={'end'}>
          {/* <Image src="https://i1.sndcdn.com/artworks-29G5YQfUmfdklNlR-iiDRYw-t500x500.jpg" /> */}
          <Image
            rounded=".5rem"
            objectFit={'contain'}
            src="https://i.ytimg.com/vi/P5fzCZFPQ6c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_dAFEM7XPRmI4mraqQrZ4COoXNg"
          />

          <Box mt=".5rem">
            <FaYoutube color="#d9d9d9" />
          </Box>
        </Flex>
      </GridItem>

      <GridItem
        as="section"
        rowSpan={1}
        colSpan={1}
        flexGrow={'1'}
        pr={'1.5rem'}
        pt={'1.5rem'}
        pl={'.75rem'}
        h={'full'}
        display={'flex'}
        flexDirection={'column'}
      >
        <Flex as="header" direction={'column'} gap=".5rem">
          <Heading fontSize={'1.375rem'} fontWeight={'medium'} noOfLines={3}>
            Beautiful Chef Collection! Ramen & Fried Rice - Japanese Street Food
            美人店長のラーメン・デカ盛り炒飯 ・たこ焼き・たこせんべい
          </Heading>

          <Text as="p" fontSize={'1.125rem'} color="#D9D9D9" noOfLines={1}>
            MOGUMOGU - Food Entertainment - モグモグ
          </Text>
        </Flex>

        <Flex
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
          minH={'0'}
          flexGrow={'1'}
          h="full"
        >
          <PlaybackControls size="sm" />
        </Flex>
      </GridItem>

      <GridItem as="section" rowSpan={1} rowStart={2} colSpan={2}>
        <PlaybackMeta />
      </GridItem>
    </Grid>
  )
}
