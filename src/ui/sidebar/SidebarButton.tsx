import { Button, IconButton, Text } from '@chakra-ui/react'
import { FunctionComponent, useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'
import { breakpoints } from '../../theme-customization'

interface SidebarButtonProps {
  icon: JSX.Element
  label: string
  active?: boolean
}

export const SidebarButton: FunctionComponent<SidebarButtonProps> = ({
  icon,
  label,
  active = false,
}) => {
  const isLarge = useMediaQuery({ minWidth: breakpoints['2xl'] })

  const activeProps = useMemo(() => {
    if (active) {
      return {
        _active: {
          bg: '#6A4477',
        },
      }
    }
    return {}
  }, [active])

  return isLarge ? (
    <Button
      aria-label={label}
      alignItems={'center'}
      isActive={active}
      variant="ghost"
      border="none"
      fontSize={'1.125rem'}
      color={'#E1E2E7'}
      h={'2.75rem'}
      rounded={'.75rem'}
      leftIcon={icon}
      _focus={{ outline: 'none' }}
      pl={'1.125rem'}
      pr={'.9375rem'}
      w={'full'}
      gap={'.55rem'}
      justifyContent={'flex-start'}
      {...activeProps}
    >
      {isLarge && (
        <Text as="span" fontWeight={500} fontSize={'1rem'}>
          {label}
        </Text>
      )}
    </Button>
  ) : (
    <IconButton
      aria-label={label}
      alignItems={'center'}
      isActive={active}
      variant="ghost"
      border="none"
      fontSize={'1.125rem'}
      color={'#E1E2E7'}
      h={'2.625rem'}
      rounded={'.8125rem'}
      icon={icon}
      _focus={{ outline: 'none' }}
      px={'.75rem'}
      {...activeProps}
    />
  )
}
