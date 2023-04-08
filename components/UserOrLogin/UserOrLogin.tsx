import { ConnectWalletButton } from '@/components/ConnectWalletButton/ConnectWalletButton'
import { User } from '@/components/User/User'
import { useAuth } from '@/hooks/useAuth'

export function UserOrLogin() {
  const { address } = useAuth()
  return address ? <User /> : <ConnectWalletButton />
}
