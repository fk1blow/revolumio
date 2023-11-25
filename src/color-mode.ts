import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = {
  styles: {
    global: {
      body: {
        bg: '#131324',
      },
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Lato', sans-serif`,
  },
}

export const themeConfig = extendTheme({
  config,
  ...theme,
})
