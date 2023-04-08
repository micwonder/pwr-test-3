import SEO from '@/components/_SEO/SEO'
import { AppHeader } from '@/components/AppHeader/AppHeader'
import { AppShell, useMantineTheme } from '@mantine/core'
import { PropsWithChildren, useState } from 'react'
import { SideMenu } from '@/components/SideMenu/SideMenu'

type BasicLayoutProps = {} & PropsWithChildren

export default function BasicLayout({ children }: BasicLayoutProps) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  const handleBurgerClick = () => {
    setOpened(!opened)
  }

  return (
    <>
      <SEO title="test" />
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={<SideMenu opened={opened} />}
        // aside={
        //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        //       <Text>Application sidebar</Text>
        //     </Aside>
        //   </MediaQuery>
        // }
        // footer={
        //   <Footer height={60} p="md">
        //     Application footer
        //   </Footer>
        // }
        header={<AppHeader onBurgerClick={handleBurgerClick} opened={opened} />}
      >
        {children}
      </AppShell>
    </>
  )
}
