import { Box, IconButton } from "@chakra-ui/react"
import { FunctionComponent } from "react"
import {
  FaPlus,
  FaRadio,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa6"

interface MediaSourcesProps {}

export const MediaSources: FunctionComponent<MediaSourcesProps> = (_props) => {
  return (
    <Box
      as="ul"
      w="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      gap={".75rem"}
      listStyleType={"none"}
    >
      <li>
        <IconButton
          aria-label="Spotify"
          variant="ghost"
          border="none"
          fontSize={"1.5rem"}
          size="lg"
          icon={<FaSpotify />}
        />
      </li>

      <li>
        <IconButton
          aria-label="Youtube"
          variant="ghost"
          border="none"
          fontSize={"1.5rem"}
          size="lg"
          icon={<FaYoutube />}
        />
      </li>

      <li>
        <IconButton
          aria-label="Radio"
          variant="ghost"
          border="none"
          fontSize={"1.5rem"}
          size="lg"
          icon={<FaRadio />}
        />
      </li>

      <li>
        <IconButton
          aria-label="Soundcloud"
          variant="ghost"
          border="none"
          fontSize={"1.5rem"}
          size="lg"
          icon={<FaSoundcloud />}
        />
      </li>

      <li>
        <IconButton
          aria-label="Home"
          variant="ghost"
          border="none"
          fontSize={"1rem"}
          mt={"2rem"}
          size="lg"
          icon={<FaPlus />}
        />
      </li>
    </Box>
  )
}
