/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Signer } from '@waves/signer'
import { create } from 'zustand'

type UserStore = {
  address?: string
  publicKey?: string
  authMethod?: 'keeper' | 'email' | 'ledger' | 'metamask' | 'seed'
  signer?: Signer
} & Actions

type Actions = {
  SignInWithKeeper: () => Promise<void>
  SignInWithEmailPassword: () => Promise<void>
  SignInWithWxSeed: () => Promise<void>
  logout: () => Promise<void>
}

export const useAuth = create<UserStore>(
  //logStore(
  (set, get, api) => ({
    address: undefined,
    SignInWithKeeper: async () => {
      const { onKeeperUserChanged } = await import('@/waves/keeper')
      const { SignInViaKeeper } = await import('@/waves/signer')

      const { userData, signer, keeper } = await SignInViaKeeper()
      const { address, publicKey } = userData
      //const { address, publicKey } = await SignInWithKeeper({ chainId: 'W' })

      onKeeperUserChanged((data) => {
        set({ address: data.newUser?.address, publicKey: data.newUser?.publicKey })
      })
      set({ address, publicKey, signer, authMethod: 'keeper' })
    },
    SignInWithEmailPassword: async () => {
      const { SignInViaEmailPassword } = await import('@/waves/signer')
      const { userData, signer } = await SignInViaEmailPassword()
      const { address, publicKey } = userData
      set({ address, publicKey, signer, authMethod: 'email' })
    },
    SignInWithWxSeed: async () => {
      const { SignInViaWxSeed } = await import('@/waves/signer')
      const { userData, signer } = await SignInViaWxSeed()
      const { address, publicKey } = userData
      set({ address, publicKey, signer, authMethod: 'seed' })
    },
    SignInWithLedger: async () => {},
    SignInWithMetamask: async () => {},

    logout: async () => {
      set({ address: undefined, publicKey: undefined, authMethod: undefined })
    },
  })
  //)
)
