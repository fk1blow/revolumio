import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = {
  styles: {
    global: {
      body: {
        bg: "#131324",
      },
    },
  },
}

export const themeConfig = extendTheme({
  config,
  ...theme,
})
