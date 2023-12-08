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

const revolumioTheme = {
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
  ...revolumioTheme,
})

/**
 * Breakpoints
 * @see https://chakra-ui.com/docs/features/responsive-styles#using-the-breakpoint-utility
 *
 * base: 0em(0px), sm: 30em(480px), md: 48em(768px), lg: 62em(992px), xl: 80em(1280px), 2xl: 96em(1536px), 3xl: 112rem(1792px), 4xl: 128rem(2048px
 */
export const breakpoints = {
  base: '0em', // 0px
  sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
  '3xl': '112rem', // 1792px
  '4xl': '128rem', // 2048px
}
