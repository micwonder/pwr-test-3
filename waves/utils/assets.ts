import { CONFIG } from '@/config'

export const WAVES = {
  id: 'WAVES',
  name: 'Waves',
  ticker: 'WAVES',
  decimals: 8,
  toDecimals: (amount: number) => ZeroIfNaN(amount * 10 ** WAVES.decimals),
  fromDecimals: (amount: number) => ZeroIfNaN(amount / 10 ** WAVES.decimals),
}

export const POWER = {
  id: CONFIG.POWER_TOKEN_ID,
  name: 'POWER',
  ticker: 'PWR',
  decimals: 8,
  toDecimals: (amount: number) => ZeroIfNaN(amount * 10 ** POWER.decimals),
  fromDecimals: (amount: number) => ZeroIfNaN(amount / 10 ** POWER.decimals),
}

export const ZeroIfNaN = (value: number) => (isNaN(value) ? 0 : value)
