import { Box, Group, Menu, rem, Text, UnstyledButton, useMantineTheme } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { IconChevronDown, IconCopy, IconLogout } from '@tabler/icons-react'
import React from 'react'

import { UserAvatar } from '@/components/UserAvatar/UserAvatar'
import { useAuth } from '@/hooks/useAuth'

export function User() {
  const theme = useMantineTheme()
  // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const { address, authMethod, logout } = useAuth()
  const clipboard = useClipboard({ timeout: 500 })

  return (
    <Menu
      transitionProps={{ transition: 'pop-top-right' }}
      position="bottom-end"
      width={220}
      withinPortal
    >
      <Menu.Target>
        <Box sx={{}}>
          <UnstyledButton
            sx={{
              display: 'block',
              width: '100%',
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

              '&:hover': {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              },
            }}
          >
            <Group>
              {address && <UserAvatar address={address} />}
              <Box sx={{ flex: 1 }}>
                <Text size="sm" weight={500}>
                  {authMethod}
                </Text>
                <Text color="dimmed" size="xs">
                  {address}
                </Text>
              </Box>
              <IconChevronDown size={rem(18)} />
            </Group>
          </UnstyledButton>
        </Box>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          icon={<IconCopy size="1rem" stroke={1.5} />}
          onClick={() => {
            clipboard.copy(address)
            notifications.show({
              title: 'Address copied',
              message: address,
            })
          }}
        >
          Copy Address
        </Menu.Item>
        <Menu.Item
          onClick={logout}
          icon={<IconLogout size="1rem" color={theme.colors.red[6]} stroke={1.5} />}
          // onClick={signOut}
          // rightSection={
          //   <Text size="xs" transform="uppercase" weight={700} color="dimmed">
          //     Ctrl + T
          //   </Text>
          // }
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
