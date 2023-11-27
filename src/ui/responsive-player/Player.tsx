import { theme, useMediaQuery } from '@chakra-ui/react'
import { FunctionComponent, useMemo } from 'react'
import { PlayerLarge } from './PlayerLarge'
import { PlayerSmall } from './PlayerSmall'
import { PlayerWide } from './PlayerWide'

const _breakpoints = {
  base: '0em', // 0px
  sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
}

interface PlayerProps {}

export const Player: FunctionComponent<PlayerProps> = (_props) => {
  const [isOnMediumScreen, isOn2xLargeScreen] = useMediaQuery([
    `(min-width: ${theme.breakpoints.lg})`,
    `(min-width: ${theme.breakpoints['2xl']})`,
  ])

  const renderLayout = useMemo(() => {
    if (!isOnMediumScreen) {
      return <PlayerSmall />
    } else if (isOnMediumScreen && !isOn2xLargeScreen) {
      return <PlayerLarge />
    }
    return <PlayerWide />
  }, [isOn2xLargeScreen, isOnMediumScreen])

  return renderLayout
}
