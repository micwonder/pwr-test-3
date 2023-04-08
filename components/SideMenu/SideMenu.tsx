import { Navbar } from '@mantine/core'

import { MainLinks } from '@/components/MainLinks/MainLinks'

type SideMenuProps = {
  opened: boolean
}

export function SideMenu({ opened }: SideMenuProps) {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300 }}>
      {/* <Navbar.Section mt="xs"></Navbar.Section> */}
      <Navbar.Section grow mt="md">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>{/* <SideMenuBottom /> */}</Navbar.Section>
    </Navbar>
  )
}
