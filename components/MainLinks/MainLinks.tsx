import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import {
  IconAd2,
  IconAppWindow,
  IconHandRock,
  IconHome,
  IconMessageCircle,
  IconUser,
} from '@tabler/icons-react'
import { useRouter } from 'next/router'
import React from 'react'

interface MainLinkProps {
  icon: React.ReactNode
  color: string
  label: string
  url: string
}

function MainLink({ icon, color, label, url }: MainLinkProps) {
  const router = useRouter()
  const handleClick = () => {
    router.push(url)
  }

  return (
    <UnstyledButton
      onClick={handleClick}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon size="md" color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  )
}

// Home
// Profile
// Child DAOs
// Proposals
// Power
// Forum

const data = [
  { icon: <IconHome size="1rem" />, color: 'power', label: 'Home', url: '/' },
  { icon: <IconUser size="1rem" />, color: 'power', label: 'Profile', url: '/profile' },
  { icon: <IconAppWindow size="1rem" />, color: 'power', label: 'Child DAOs', url: '/child-daos' },
  { icon: <IconAd2 size="1rem" />, color: 'power', label: 'Proposals', url: '/proposals' },
  { icon: <IconHandRock size="1rem" />, color: 'power', label: 'Power', url: '/power' },
  {
    icon: <IconMessageCircle size="1rem" />,
    color: 'cyan',
    label: 'Forum',
    url: 'https://forum.power.tech',
  },

  // { icon: <IconDatabase size="1rem" />, color: 'grape', label: 'Databases' },
]

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />)
  return <div>{links}</div>
}
