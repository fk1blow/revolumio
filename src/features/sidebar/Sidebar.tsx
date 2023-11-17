import { Box, IconButton } from "@chakra-ui/react"
import { FunctionComponent } from "react"
import { FaHouse } from "react-icons/fa6"
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
        gap={"1rem"}
        listStyleType={"none"}
        mb={"3rem"}
      >
        <li>
          <IconButton
            aria-label="Home"
            variant="ghost"
            border="none"
            fontSize={"1.2rem"}
            size="lg"
            icon={<FaHouse />}
          />
        </li>
      </Box>

      <MediaSources />
    </>
  )
}
