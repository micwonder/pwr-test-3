import { POWER, WAVES } from './assets'

const addressMaxLength = 6

export const addressElipsis = (address: string, maxLength = addressMaxLength) =>
  address
    ? address.length <= maxLength
      ? address
      : `${address.slice(0, maxLength)}...${address.slice(-maxLength)}`
    : ''

export const toDecimalsAmount = (amount: number | string, decimals: number) => {
  return parseFloat(amount.toString()) * 10 ** decimals
}

export const fromDecimalsAmount = (amount: number | string, decimals: number) => {
  return parseFloat(amount.toString()) / 10 ** decimals
}

export const toDecimalsPower = (amount: number) => toDecimalsAmount(amount, POWER.decimals)
export const fromDecimalsPower = (amount: number) => fromDecimalsAmount(amount, POWER.decimals)
export const toDecimalsWaves = (amount: number) => toDecimalsAmount(amount, WAVES.decimals)
export const fromDecimalsWaves = (amount: number) => fromDecimalsAmount(amount, WAVES.decimals)
