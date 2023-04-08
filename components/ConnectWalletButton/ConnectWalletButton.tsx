import { Button } from '@mantine/core'
import { useState } from 'react'

import { ConnectWalletModal } from '@/components/ConnectWalletModal/ConnectWalletModal'
import { TermsAndConditionsModal } from '@/components/TermsAndConditionsModal/TermsAndConditionsModal'

export function ConnectWalletButton() {
  const [termsAndConditionsOpened, setTermsAndConditionsOpened] = useState(false)
  const [connectWalletOpened, setConnectWalletOpened] = useState(false)

  const onClick = () => {
    setConnectWalletOpened(true)
  }
  const onConnectWalletClose = () => {
    setConnectWalletOpened(false)
  }
  const onTermsAndConditionsClick: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setTermsAndConditionsOpened(true)
  }

  return (
    <>
      <ConnectWalletModal
        opened={connectWalletOpened}
        onClose={onConnectWalletClose}
        onTermsAndConditionsClick={onTermsAndConditionsClick}
      />
      <TermsAndConditionsModal
        opened={termsAndConditionsOpened}
        onClose={() => setTermsAndConditionsOpened(false)}
      />
      <Button onClick={onClick}>ConnectWallet</Button>
    </>
  )
}
