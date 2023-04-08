import { Burger, Container, createStyles, Group, Header, MediaQuery } from '@mantine/core'

import { Brand } from '@/components/Brand/Brand'
import { UserOrLogin } from '@/components/UserOrLogin/UserOrLogin'

type AppHeaderProps = {
  opened: boolean
  onBurgerClick: () => void
}

const useStyles = createStyles((theme) => ({
  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenNotFit: {
    [theme.fn.smallerThan(450)]: {
      display: 'none',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px',
  },
}))

export function AppHeader({ opened, onBurgerClick }: AppHeaderProps) {
  const { classes, theme } = useStyles()

  return (
    <Header height={80} p="md">
      <Container className={classes.inner} fluid>
        <Group className={classes.inner}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={onBurgerClick}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
          <Brand className={classes.hiddenNotFit} />
        </Group>
        <Group>
          <UserOrLogin />
        </Group>
      </Container>
      {/* <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={onBurgerClick}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Brand />
        <Group className={classes.hiddenMobile}>
          <Button variant="default">Log in</Button>
          <Button>Sign up</Button>
        </Group>
      </div> */}
    </Header>
  )
}
