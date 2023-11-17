import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { FunctionComponent, useEffect } from "react"
import { getFavorites } from "../../lib/volumio/api"

interface DashboardProps {}

export const Dashboard: FunctionComponent<DashboardProps> = (_props) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["sourceFavourites"],
    queryFn: getFavorites,
  })

  useEffect(() => {
    console.log("data: ", data)
  }, [data])

  return (
    <Flex gap="3rem" flexDirection={"column"}>
      <Heading size="lg">Favorites</Heading>

      <Flex flexDirection={"column"} gap="1.5rem">
        {data?.map((item) => {
          return (
            <Flex key={item.uri} gap="1rem">
              <Box bg="gray.700" rounded={".4rem"} overflow={"hidden"}>
                <Image
                  boxSize="150px"
                  src={item.albumart}
                  fit={"contain"}
                  fallbackSrc="https://via.placeholder.com/150"
                />
              </Box>

              <Flex flexDirection={"column"} gap=".25rem" pt=".5rem">
                <Heading as="h3" size="md" fontWeight={"semibold"}>
                  {item.artist}
                </Heading>

                <Text as="p" color={"gray.400"} fontSize={"sm"}>
                  {item.title}
                </Text>
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}
