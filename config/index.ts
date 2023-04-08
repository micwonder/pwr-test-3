import { prodConfig } from './prod.config'
import { testConfig } from './test.config'

export const CONFIG = process.env.NEXT_PUBLIC_BUILD_FLAVOR === 'prod' ? prodConfig : testConfig
