import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { FunctionComponent } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import { getFavorites } from "../../lib/volumio/api"

interface DashboardProps {}

export const Dashboard: FunctionComponent<DashboardProps> = (_props) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["sourceFavourites"],
    queryFn: getFavorites,
  })

  useHotkeys(
    "arrow up",
    (evt: KeyboardEvent) => {
      evt.preventDefault()
    },
    []
  )

  useHotkeys(
    "arrow down",
    (evt: KeyboardEvent) => {
      evt.preventDefault()
    },
    []
  )

  return (
    <Flex
      gap="3rem"
      flexDirection={"column"}
      overflowY={"scroll"}
      minH={"0"}
      pr={"2rem"}
      pb={"calc(100% / 4)"}
      w={"full"}
    >
      <Flex alignItems={"end"} gap="1rem" position={"sticky"} top={0}>
        <Heading size="lg" fontWeight={"semibold"}>
          Favorites
        </Heading>
        <Text as="p" color={"gray.300"} fontSize={"md"} fontWeight={"normal"}>
          /
        </Text>

        <Text as="p" color={"gray.300"} fontSize={"md"} fontWeight={"normal"}>
          Youtube
        </Text>
      </Flex>

      <SimpleGrid minChildWidth={"360px"} gap="1.5rem">
        {data?.map((item) => {
          return (
            <Flex
              key={item.uri}
              gap="1rem"
              flexDirection={"column"}
              flexGrow={1}
              h="full"
              justifyContent={"space-between"}
              overflow={"hidden"}
            >
              <Box
                flexGrow={0}
                flexShrink={0}
                bg="black"
                rounded={".5rem"}
                overflow={"hidden"}
              >
                <Image
                  src={item.albumart}
                  fit={"cover"}
                  aspectRatio={16 / 9}
                  h="full"
                  w="full"
                  display={"block"}
                  fallbackSrc="https://via.placeholder.com/150"
                />
              </Box>

              <Flex
                flexDirection={"column"}
                gap=".25rem"
                maxH="200px"
                px={".25rem"}
                flexGrow={3}
              >
                <Heading as="h3" size="md" fontWeight={"semibold"}>
                  {item.title}
                </Heading>

                <Text
                  as="p"
                  color={"gray.300"}
                  fontSize={"sm"}
                  fontWeight={"normal"}
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
