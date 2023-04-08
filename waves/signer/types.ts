import { InvokeScriptTransaction } from '@waves/waves-rest/types'
import { WithId, WithProofs } from '@waves/waves-transactions'

export type InvokeTx = (Omit<InvokeScriptTransaction, 'timestamp'> & WithProofs & WithId) &
  WithId & {
    sender: string
    height: number
    timestamp: number
  }
