declare const window: globalThis.Window & {
  WavesKeeper?: WavesKeeper.API
  KeeperWallet?: WavesKeeper.API
}

export type KeeperAPI = WavesKeeper.API

declare namespace WavesKeeper {
  type API = {
    auth(data: IAuthData): Promise<IAuthResponse>
    publicState(): Promise<IPublicStateResponse>
    resourceIsApproved(): Promise<boolean | null>
    resourceIsBlocked(): Promise<boolean | null>
    signAndPublishCancelOrder(data: TSignCancelOrderData): Promise<string>
    signAndPublishOrder(data: TSignOrderData): Promise<string>
    signAndPublishTransaction(data: TSignTransactionData): Promise<string>
    signCancelOrder(data: TSignCancelOrderData): Promise<string>
    signOrder(data: TSignOrderData): Promise<string>
    signTransaction(data: TSignTransactionData): Promise<string>
    signRequest(data: TSignRequestData): Promise<string>
    signTransactionPackage(tx: TSignTransactionPackageData, name?: string): Promise<Array<string>>
    signCustomData(data: TSignCustomDataParamsV1): Promise<TSignCustomDataResponseV1>
    signCustomData(data: TSignCustomDataParamsV2): Promise<TSignCustomDataResponseV2>
    notification(data: INotificationData): Promise<unknown>
    encryptMessage(stringToEncrypt: string, publicKey: string, prefix: string): Promise<string>
    decryptMessage(stringToDecrypt: string, publicKey: string, prefix: string): Promise<string>
    on(event: 'update', cb: (state: IPublicStateResponse) => unknown): object
    initialPromise: Promise<unknown>
  }

  type TTypedData = TBinaryData | TBooleanData | TIntegerData | TStringData
  type TBinaryData = { type: 'binary'; key: string; value: string }
  type TBooleanData = { type: 'boolean'; key: string; value: boolean }
  type TIntegerData = { type: 'integer'; key: string; value: number }
  type TStringData = { type: 'string'; key: string; value: string }
  type TSignCustomDataParamsV1 = {
    version: 1

    binary: string
  }
  type TSignCustomDataResponseV1 = TSignCustomDataParamsV1 & {
    signature: string
    publicKey: string
  }
  type TSignCustomDataParamsV2 = {
    version: 2
    data: TTypedData[]
  }
  type TSignCustomDataResponseV2 = TSignCustomDataParamsV2 & {
    signature: string
    publicKey: string
  }

  type IAuthData = {
    data: string
    name?: string
    referrer?: string
    icon?: string
    successPath?: string
  }

  type IAuthResponse = {
    address: string
    host: string
    prefix: string
    publicKey: string
    signature: string
    version: number
    name: string
  }

  type IPublicStateResponse = {
    initialized: boolean
    locked: boolean
    account: TPublicStateAccount | null
    network: TPublicStateNetwork
    messages: Array<TPublicStateMessage>
    txVersion: Record<number, Array<number>>
  }

  type TPublicStateNetwork = {
    code: string
    server: string
    matcher: string
  }

  type TPublicStateAccount = {
    name: string
    publicKey: string
    address: string
    networkCode: string
    network: string
    balance: TAccountBalance
    type: string
  }

  type TAccountBalance = {
    available: string
    leasedOut: string
    network: string
  }

  type TPublicStateMessage = {
    id: string
    status: string
  }

  type ICancelOrderData = {
    id: string

    senderPublicKey?: string
  }

  type TSignCancelOrderData = ISignData<1003, ICancelOrderData>

  type ISignOrderDataBody = {
    amount: TMoney
    price: TMoney
    orderType: 'sell' | 'buy'
    matcherFee: TMoney
    matcherPublicKey: string
    expiration: string | number
    timestamp?: string | number
    senderPublicKey?: string
  }

  type TSignOrderData = ISignData<1002, ISignOrderDataBody>

  type ISignRequestBody = {
    timestamp: number | string

    senderPublicKey?: string
  }

  type TSignRequestData = ISignData<1001 | 1004, ISignRequestBody>

  type TSignTransactionData =
    | TIssueTxData
    | TTransferTxData
    | TReissueTxData
    | TBurnTxData
    | TLeaseTxData
    | TLeaseCancelTxData
    | TCreateAliasTxData
    | TMassTransferTxData
    | TDataTxData
    | TSetScriptTxData
    | TSponsoredFeeTxData
    | TSetAssetScriptTxData
    | TScriptInvocationTxData

  type ISignData<TYPE extends number, BODY> = {
    type: TYPE
    data: BODY
  }

  type ITransactionBase = {
    fee: TMoney

    senderPublicKey?: string

    timestamp?: number | string
  }

  type IIssueTx = {
    name: string
    description: string
    quantity: number | string
    precision: number
    reissuable: boolean
    script?: string
  } & ITransactionBase

  type TIssueTxData = ISignData<3, IIssueTx>

  type ITransferTx = {
    amount: TMoney
    recipient: string
    attachment?: string | Uint8Array | Array<number>
  } & ITransactionBase

  type TTransferTxData = ISignData<4, ITransferTx>

  type IReissueTx = {
    assetId: string
    quantity: number | string | TMoney

    reissuable: boolean
  } & ITransactionBase

  type TReissueTxData = ISignData<5, IReissueTx>

  type IBurnTx = {
    assetId: string
    amount: number | string | TMoney
  } & ITransactionBase

  type TBurnTxData = ISignData<6, IBurnTx>

  type ILeaseTx = {
    recipient: string
    amount: number | string | TMoney
  } & ITransactionBase

  type TLeaseTxData = ISignData<8, ILeaseTx>

  type ILeaseCancelTx = {
    leaseId: string
  } & ITransactionBase

  type TLeaseCancelTxData = ISignData<9, ILeaseCancelTx>

  type ICreateAliasTx = {
    alias: string
  } & ITransactionBase

  type TCreateAliasTxData = ISignData<10, ICreateAliasTx>

  type IMassTransferTx = {
    totalAmount: TMoney

    transfers: Array<ITransfer>
    attachment?: string
  } & ITransactionBase

  type ITransfer = {
    recipient: string
    amount: number | string | TMoney
  }

  type TMassTransferTxData = ISignData<11, IMassTransferTx>

  type IDataTx = {
    data: Array<TData>
  } & ITransactionBase

  type TData = TCallArgs & { key: string }

  type TDataTxData = ISignData<12, IDataTx>

  type ISetScriptTx = {
    script: string
  } & ITransactionBase

  type TSetScriptTxData = ISignData<13, ISetScriptTx>

  type ISponsoredFeeTx = {
    minSponsoredAssetFee: TMoney
  } & ITransactionBase

  type TSponsoredFeeTxData = ISignData<14, ISponsoredFeeTx>

  type ISetAssetScriptTx = {
    assetId: string
    script: string
  } & ITransactionBase

  type TSetAssetScriptTxData = ISignData<15, ISetAssetScriptTx>

  type IScriptInvocationTx = {
    dApp: string
    payment?: Array<TMoney>
    call?: ICall
  } & ITransactionBase

  type ICall = {
    function: string

    args: Array<TCallArgs>
  }

  type TCallArgs = TCallArgsInteger | TCallArgsBoolean | TCallArgsBinary | TCallArgsString

  type TCallArgsInteger = {
    type: 'integer'
    value: number | string
  }

  type TCallArgsBoolean = {
    type: 'boolean'
    value: boolean
  }

  type TCallArgsBinary = {
    type: 'binary'
    value: string
  }

  type TCallArgsString = {
    type: 'string'
    value: string
  }

  type TScriptInvocationTxData = ISignData<16, IScriptInvocationTx>

  type TSignTransactionPackageData = Array<
    | TIssueTxData
    | TTransferTxData
    | TReissueTxData
    | TBurnTxData
    | TCreateAliasTxData
    | TMassTransferTxData
    | TDataTxData
    | TScriptInvocationTxData
  >

  type INotificationData = {
    title: string
    message?: string
  }

  type IMoneyTokens = {
    assetId: string
    tokens: number | string
  }

  type IMoneyCoins = {
    assetId: string
    coins: number | string
  }

  type IMoneyAmount = {
    assetId: string

    amount: number | string
  }

  type TMoney = IMoneyTokens | IMoneyCoins | IMoneyAmount
}

export const keeperPromise = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 300)
  }).then(() => (typeof window !== 'undefined' ? window?.KeeperWallet : undefined))

const getPublicState = async () =>
  keeperPromise().then((keeper) =>
    keeper
      ?.resourceIsApproved()
      .then((isApproved) => (isApproved ? keeper?.publicState() : undefined))
  )

export const keeperErrors = {
  noKeeper: 'noKeeper',
  rejectedByUser: 'rejectedByUser',
  wrongNetwork: 'wrongNetwork',
}

export type SignInWithKeeperParams = {
  chainId: string
}

type MaybeUser = WavesKeeper.TPublicStateAccount | undefined | null

export const onKeeperUserChanged = async (
  callback: (data: { oldUser: MaybeUser; newUser: MaybeUser }) => unknown
) => {
  const keeper = await keeperPromise()
  if (keeper) {
    let oldUser: MaybeUser = (await getPublicState())?.account

    keeper.on('update', (state) => {
      if (oldUser?.address !== state.account?.address) {
        callback({
          oldUser,
          newUser: state.account,
        })
        oldUser = state.account
      }
    })
  }
}

export const onKeeperLockedChanged = async (
  callback: (data: { locked: boolean | undefined }) => unknown
) => {
  const keeper = await keeperPromise()
  if (keeper) {
    let locked: boolean | undefined = (await getPublicState())?.locked ?? undefined
    keeper.on('update', (state) => {
      if (locked !== state.locked) {
        locked = state.locked
        callback({ locked })
      }
    })
  }
}

export const onKeeperNetworkChanged = async (
  callback: (data: { network: string | undefined }) => unknown
) => {
  const keeper = await keeperPromise()
  if (keeper) {
    let network: string | undefined = (await getPublicState())?.network?.code ?? undefined
    keeper.on('update', (state) => {
      if (network !== state.network.code) {
        network = state.network.code
        callback({ network })
      }
    })
  }
}

export const SignInWithKeeper = async ({ chainId }: SignInWithKeeperParams) => {
  const keeper = await keeperPromise()
  if (!keeper) throw new Error(keeperErrors.noKeeper)

  const acc = await keeper
    ?.publicState()
    .then((x) => {
      if (chainId !== x.network.code) return Promise.reject(keeperErrors.wrongNetwork)

      return x.account
    })
    .catch((e) => {
      if (e?.code === '10' || e?.code === '12') {
        return Promise.reject(keeperErrors.rejectedByUser)
      }
      if (typeof e === 'string') return Promise.reject(e)

      return undefined
    })

  return acc
    ? Promise.resolve({ address: acc.address, publicKey: acc.publicKey, keeper })
    : keeper?.auth({ data: 'fdc4f2afe48545df89fe7078b579691b' }).then((authResult) => ({
        address: authResult.address,
        publicKey: authResult.publicKey,
        keeper,
      }))
}
