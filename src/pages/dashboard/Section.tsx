import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { FavoriteItem } from '../../stores/favorites/types'

interface SectionProps {
  name: string
  entries?: FavoriteItem[]
}

export const Section: FunctionComponent<SectionProps> = ({
  entries,
  name,
}: SectionProps) => {
  return (
    <Flex gap="3rem" flexDirection={'column'}>
      <Flex alignItems={'end'} gap="1rem">
        <Heading size="lg" fontWeight={'semibold'}>
          Favorites
        </Heading>
        <Text as="p" color={'gray.300'} fontSize={'md'} fontWeight={'normal'}>
          /
        </Text>

        <Text as="p" color={'gray.300'} fontSize={'md'} fontWeight={'normal'}>
          {name}
        </Text>
      </Flex>

      <SimpleGrid minChildWidth={'360px'} gap="1.5rem">
        {entries?.map((item) => {
          return (
            <Flex
              key={item.uri}
              gap="1rem"
              flexDirection={'column'}
              flexGrow={1}
              h="full"
              justifyContent={'space-between'}
              overflow={'hidden'}
            >
              <Box
                flexGrow={0}
                flexShrink={0}
                bg="black"
                rounded={'.5rem'}
                overflow={'hidden'}
              >
                <Image
                  src={item.albumart}
                  fit={'cover'}
                  aspectRatio={16 / 9}
                  h="full"
                  w="full"
                  display={'block'}
                  fallbackSrc="https://via.placeholder.com/150"
                />
              </Box>

              <Flex
                flexDirection={'column'}
                gap=".25rem"
                maxH="200px"
                px={'.25rem'}
                flexGrow={3}
              >
                <Heading as="h3" size="md" fontWeight={'semibold'}>
                  {item.title}
                </Heading>

                <Text
                  as="p"
                  color={'gray.300'}
                  fontSize={'sm'}
                  fontWeight={'normal'}
                >
                  {item.artist}
                </Text>
              </Flex>
            </Flex>
          )
        })}
      </SimpleGrid>
    </Flex>
  )
}
