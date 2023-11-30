import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/600.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = {
  styles: {
    global: {
      body: {
        bg: 'transparent',
      },
    },
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Lato', sans-serif`,
  },
}

export const themeConfig = extendTheme({
  config,
  ...theme,
})
