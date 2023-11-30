import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  theme,
  useMediaQuery,
} from '@chakra-ui/react'
import { FunctionComponent, useMemo } from 'react'
import { FavoriteItem } from '../../stores/favorites/types'

interface SectionProps {
  name: string
  entries?: FavoriteItem[]
}

export const Section: FunctionComponent<SectionProps> = ({
  entries,
  name,
}: SectionProps) => {
  const [isMediumScreen, isLargeScreen, isXLScreen, is2XLScreen] =
    useMediaQuery([
      `(min-width: ${theme.breakpoints.md})`,
      `(min-width: ${theme.breakpoints.lg})`,
      `(min-width: ${theme.breakpoints.xl})`,
      `(min-width: ${theme.breakpoints['2xl']})`,
    ])

  const columnSize = useMemo(() => {
    if (isXLScreen && !is2XLScreen) return 'minmax(340px, 1fr)'
    if (is2XLScreen) return 'minmax(400px, 1fr)'
    return 'minmax(240px, 1fr)'
  }, [is2XLScreen, isXLScreen])

  return (
    <Flex gap="1rem" flexDirection={'column'}>
      <Breadcrumb
        pos={'sticky'}
        top={0}
        bg={'#232528'}
        pb={'1rem'}
        pl={'1.125rem'}
      >
        <BreadcrumbItem>
          <BreadcrumbLink fontSize={'large'} fontWeight={'normal'} href="#">
            favorites
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Text fontSize={'large'} fontWeight={'normal'}>
            {name}
          </Text>
        </BreadcrumbItem>
      </Breadcrumb>

      <Grid templateColumns={`repeat(auto-fit, ${columnSize})`} gap="1.5rem">
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
                  aspectRatio={16 / 10}
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
                <Heading
                  as="h3"
                  size="md"
                  fontWeight={'semibold'}
                  fontSize={'clamp(1rem, 1.3vw, 1.25rem)'}
                  noOfLines={3}
                  color={'#E0E0E0'}
                >
                  {item.title}
                </Heading>

                <Text
                  as="p"
                  color={'#BDBDBD'}
                  fontSize={'sm'}
                  fontWeight={'normal'}
                >
                  {item.artist}
                </Text>
              </Flex>
            </Flex>
          )
        })}
      </Grid>
    </Flex>
  )
}
