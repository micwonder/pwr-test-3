import { CONFIG } from '@/config'
import { Signer } from '@waves/signer'

export const SignInViaKeeper = async () => {
  const { ProviderKeeper } = await import('@waves/provider-keeper')

  const signer = new Signer({
    NODE_URL: CONFIG.NODE_URL,
  })
  const keeper = new ProviderKeeper()

  await keeper.connect({
    NETWORK_BYTE: CONFIG.CHAIN_ID.charCodeAt(0),
    NODE_URL: CONFIG.NODE_URL,
  })

  signer.setProvider(keeper)
  const userData = await signer.login()
  return {
    userData,
    keeper,
    signer,
  }
}

export const SignInViaMetamask = async () => {
  const { ProviderMetamask } = await import('@waves/provider-metamask')
  const signer = new Signer({
    NODE_URL: CONFIG.NODE_URL,
  })
  const metamask = new ProviderMetamask({
    wavesConfig: {
      nodeUrl: CONFIG.NODE_URL,
      chainId: 'R'.charCodeAt(0),
    },
  })
  signer.setProvider(metamask)
  const userData = await signer.login()
  return {
    userData,
    metamask,
    signer,
  }
}

export const SignInViaLedger = async () => {
  const { ProviderLedger } = await import('@waves/provider-ledger')
  const signer = new Signer({
    NODE_URL: CONFIG.NODE_URL,
  })
  const ledger = new ProviderLedger()
  signer.setProvider(ledger)
  const userData = await signer.login()
  return {
    userData,
    ledger,
    signer,
  }
}

export const SignInViaEmailPassword = async () => {
  //import { ProviderLedger } from '@waves/provider-ledger'
  //import { ProviderCloud } from '@waves.exchange/provider-cloud'
  // const { ProviderWeb } = await import('@waves.exchange/provider-web')
  const { ProviderCloud } = await import('@waves.exchange/provider-cloud')
  const signer = new Signer({
    NODE_URL: CONFIG.NODE_URL,
  })
  const web = new ProviderCloud()
  signer.setProvider(web)
  const userData = await signer.login()
  return {
    userData,
    web,
    signer,
  }
}

export const SignInViaWxSeed = async () => {
  const { ProviderWeb } = await import('@waves.exchange/provider-web')
  const signer = new Signer({
    NODE_URL: CONFIG.NODE_URL,
  })
  const web = new ProviderWeb()
  signer.setProvider(web)
  const userData = await signer.login()
  return {
    userData,
    web,
    signer,
  }
}
