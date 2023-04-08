import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppProps } from 'next/app'

import { RouterTransition } from '@/components/RouterTransition/RouterTransition'

const queryClient = new QueryClient()

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props
  const colorScheme = 'dark'

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
          <MantineProvider
            theme={{
              colorScheme,
              colors: {
                power: [
                  '#EBFE70',
                  '#E8FD5A',
                  '#E6FC44',
                  '#E4FB2E',
                  '#E2FA18',
                  '#E0F900',
                  '#C8E000',
                  '#B0C800',
                  '#EBFE70',
                  '#EBFE70',
                ],
              },
              primaryColor: 'power',
              defaultGradient: { deg: 145, from: 'power', to: '#81A000' },
              components: {
                Checkbox: {
                  styles: (theme) => ({
                    input: {
                      '&:checked': {
                        backgroundColor: theme.black,
                      },
                    },
                  }),
                },
                Title: {
                  styles: (theme) => ({
                    root: {
                      color: theme.white,
                    },
                  }),
                },
                Button: {
                  styles: (theme) => ({
                    root: {
                      color: theme.black,
                      borderRadius: theme.radius.xs,
                    },
                  }),
                  variants: {
                    power: (theme) => ({
                      root: {
                        color: theme.black,
                      },
                    }),
                  },
                },
              },
            }}
            withGlobalStyles
            withNormalizeCSS
          >
            <RouterTransition />
            <Component {...pageProps} />
            <Notifications />
          </MantineProvider>
        </ColorSchemeProvider>
      </QueryClientProvider>
    </>
  )
}
