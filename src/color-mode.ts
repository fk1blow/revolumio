import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import '@fontsource/noto-sans/300.css'
import '@fontsource/noto-sans/400.css'
import '@fontsource/noto-sans/500.css'
import '@fontsource/noto-sans/600.css'
import '@fontsource/noto-sans/700.css'

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
    heading: `'Noto Sans', sans-serif`,
    body: `'Noto Sans', sans-serif`,
  },
}

export const themeConfig = extendTheme({
  config,
  ...theme,
})
