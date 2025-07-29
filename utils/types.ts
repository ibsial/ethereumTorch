export declare type FeeType = {maxFeePerGas: bigint; maxPriorityFeePerGas: bigint} | {gasPrice: bigint}

export declare type Chain = {
    id: number
    lzId: string
    rpc: string[]
    explorer: string
    currency: {name: string; price?: number}
    tokens: {
        [key: string]: {
            name: string
            decimals: bigint
            address: string
        }
    }
    multicall?: string
}

export declare type ChainName =
    | 'Ethereum'
    | 'Arbitrum'
    | 'Optimism'
    | 'Base'
    | 'Linea'
    | 'Zksync'
    | 'Bsc'
    | 'Opbnb'
    | 'Polygon'
    | 'Avalanche'
    | 'Scroll'
    | 'Blast'
    | 'Mantle'
    | 'Gnosis'
    | 'Fantom'
    | 'Celo'
    | 'Core'
    | 'Manta'
    | 'Taiko'
    // | 'Zora'
    | 'Nova'
    | 'Monad'
    | 'Sepolia'
    | 'Bepolia'
    | 'ArbitrumSepolia'

export declare type NotChainName =
    | '!Ethereum'
    | '!Arbitrum'
    | '!Optimism'
    | '!Base'
    | '!Linea'
    | '!Zksync'
    | '!Bsc'
    | '!Opbnb'
    | '!Polygon'
    | '!Avalanche'
    | '!Scroll'
    | '!Blast'
    | '!Mantle'
    | '!Gnosis'
    | '!Fantom'
    | '!Celo'
    | '!Core'
    | '!Manta'
    | '!Taiko'
    // | '!Zora'
    | '!Nova'
