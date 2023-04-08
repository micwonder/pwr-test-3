import { Container, createStyles, Group, Image, List, rem, Text, ThemeIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

import { ConnectWalletButton } from '@/components/ConnectWalletButton/ConnectWalletButton'
import pwrdaoHeroImage from '@/public/pwrdao-token.png'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(38),
    lineHeight: 1,
    fontWeight: 600,
    gap: 0,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    color: 'black',
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}))

export function WelcomeHero() {
  const { classes } = useStyles()
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Group noWrap className={classes.title}>
              Welcome&nbsp;to&nbsp;
              <Text inherit variant="gradient" component="span">
                PWR
              </Text>
              DAO
            </Group>
            <Text color="dimmed" mt="md">
              Power Protocol is a new open-source governance platform for communities. Built to
              disintermediate the greatest intermediary on the planet, government. With rewards for
              good decisions and penalties for bad, Power Protocol creates the first goal based
              governance system.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={25} radius="xl">
                  <IconCheck size={rem(12)} stroke={4} color="black" />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Collaborative Infrastructure</b> – Any community can use the Power Protocol
                infrastructure to work towards a goal.
              </List.Item>
              <List.Item>
                <b>Special Purpose DAO</b> – Spawn your own Special Purpose DAO and access goal
                based decision making features.
              </List.Item>
              <List.Item>
                <b>Applicable to Various Sectors</b> – Workers, companies, sports teams, charities,
                or citizens can benefit from a system that rewards good leadership and punishes bad.
              </List.Item>
            </List>

            <Group mt={30}>
              <ConnectWalletButton />
            </Group>
          </div>
          {/* Button with github icon */}

          <Image src={pwrdaoHeroImage.src} className={classes.image} />
        </div>
      </Container>
    </div>
  )
}
