import {
  Button,
  Center,
  Checkbox,
  createStyles,
  Loader,
  Modal,
  Overlay,
  Stack,
  Text,
} from '@mantine/core'
import React from 'react'

import { useAuth } from '@/hooks/useAuth'
import { useDelayedEffect } from '@/hooks/useDelayedEffect'

type ConnectWalletModalProps = {
  opened: boolean
  onClose: () => void
  onTermsAndConditionsClick: React.MouseEventHandler<HTMLSpanElement>
}

const useStyles = createStyles((theme) => ({
  termsAndConditions: {
    color: theme.colors.power,
    cursor: 'pointer',
  },
}))

export function ConnectWalletModal({
  opened,
  onClose,
  onTermsAndConditionsClick,
}: ConnectWalletModalProps) {
  const { classes } = useStyles()
  const { SignInWithKeeper, SignInWithEmailPassword, SignInWithWxSeed, address } = useAuth()
  const acceptTerms =
    typeof window !== 'undefined' && localStorage.getItem('acceptTerms') === 'true'
  const [termsAndConditionsAccepted, setTermsAndConditionsAccepted] = React.useState(acceptTerms)

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(false)
  }, [opened])

  useDelayedEffect(() => address && onClose(), 100, [loading])

  const handleLogin = (login: () => Promise<void>) => async () => {
    setLoading(true)
    try {
      await login()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
    if (address) {
      onClose()
    }
  }

  return (
    <Modal centered opened={opened} onClose={onClose} title="Connect wallet" size="xs">
      <Stack>
        <Button onClick={handleLogin(SignInWithKeeper)} disabled={!termsAndConditionsAccepted}>
          Keeper Wallet
        </Button>
        <Button
          onClick={handleLogin(SignInWithEmailPassword)}
          disabled={!termsAndConditionsAccepted}
        >
          Waves.Exchange email
        </Button>
        <Button onClick={handleLogin(SignInWithWxSeed)} disabled={!termsAndConditionsAccepted}>
          Waves.Exchange seed
        </Button>
        <Checkbox
          checked={termsAndConditionsAccepted}
          onChange={(e) => setTermsAndConditionsAccepted(e.currentTarget.checked)}
          label={
            <Text>
              I accept the{' '}
              <Text
                component="span"
                className={classes.termsAndConditions}
                onClick={onTermsAndConditionsClick}
              >
                terms and conditions
              </Text>
            </Text>
          }
        />
      </Stack>
      {loading && (
        <Overlay opacity={0.9}>
          <Center sx={{ height: '100%' }}>
            <Loader />
          </Center>
        </Overlay>
      )}
    </Modal>
  )
}
