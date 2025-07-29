import {ChainName} from './utils/types'

export const DEV = true
export const maxRetries = 3
export const shuffleWallets = true
export const skipFirst = 0 // skips first N wallets

export const executionSetup = {
    executionMode: 'async', // 'async' | 'one-by-one'

    sleepBetweenActions: {from: 15, to: 40}, // sec
    // sleepBetweenAccs: {from: 1 * 60, to: 9 * 60}, // sec
    sleepBetweenAccs: {from: 10*60, to: 45*60}, // sec

    batchSize: 10, // accounts per batch
    sleepBetweenBatches: 5 // only for *async* mode
}
const FUNDER_KEY = ''
const RECEIVER_ADDRESS = ''