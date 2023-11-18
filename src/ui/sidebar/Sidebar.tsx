import { Box, IconButton } from "@chakra-ui/react"
import { FunctionComponent } from "react"
import { FaStar } from "react-icons/fa6"
import { MediaSources } from "./MediaSources"

interface SidebarProps {}

export const Sidebar: FunctionComponent<SidebarProps> = (_props) => {
  return (
    <>
      <Box
        as="ul"
        w="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        listStyleType={"none"}
        mt="-.25rem"
        mb=".75rem"
      >
        <li>
          <IconButton
            aria-label="Home"
            variant="ghost"
            border="none"
            fontSize={"1.5rem"}
            color={"gray.300"}
            size="lg"
            icon={<FaStar />}
          />
        </li>
      </Box>

      <MediaSources />
    </>
  )
}
