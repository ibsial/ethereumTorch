import {Chain, ChainName} from './types'

export const timeout = 5

export const scenarios = [
    {
        name: `Torch`,
        value: 'Torch'
    }
]

export const chains: {[key: string]: Chain} = {
    Ethereum: {
        id: 1,
        lzId: '101',

        rpc: [
            'https://ethereum.publicnode.com',
            'https://ethereum-rpc.publicnode.com',
            'https://eth-mainnet.public.blastapi.io',
            'https://eth.drpc.org',
            'https://0xrpc.io/eth'
        ],
        explorer: 'https://etherscan.io/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'Ethereum',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Arbitrum: {
        id: 42161,
        lzId: '110',
        rpc: ['https://arbitrum-one.publicnode.com'],
        explorer: 'https://arbiscan.io/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'Ethereum',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Optimism: {
        id: 10,
        lzId: '111',
        rpc: ['https://optimism-rpc.publicnode.com'],
        explorer: 'https://optimistic.etherscan.io/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'Ethereum',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0x4200000000000000000000000000000000000006'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Base: {
        id: 8453,
        lzId: '184',
        rpc: ['https://mainnet.base.org'],
        explorer: 'https://basescan.org/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'Ethereum',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0x4200000000000000000000000000000000000006'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Linea: {
        id: 59144,
        lzId: '183',
        rpc: ['https://rpc.linea.build'],
        explorer: 'https://lineascan.build/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'Ethereum',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Zksync: {
        id: 324,
        lzId: '165',
        rpc: ['https://mainnet.era.zksync.io'],
        explorer: 'https://era.zksync.network/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'Ethereum',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91'
            }
        },
        multicall: '0xb1F9b5FCD56122CdfD7086e017ec63E50dC075e7'
    },
    Bsc: {
        id: 56,
        lzId: '102',
        rpc: ['https://bsc-dataseed.bnbchain.org'],
        explorer: 'https://bscscan.com/tx/',
        currency: {name: 'BNB'},
        tokens: {
            BNB: {
                name: 'Binance coin',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WBNB',
                decimals: 18n,
                address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Opbnb: {
        id: 204,
        lzId: '202',
        rpc: ['https://opbnb-mainnet-rpc.bnbchain.org'],
        explorer: 'https://opbnbscan.com/tx/',
        currency: {name: 'BNB'},
        tokens: {
            BNB: {
                name: 'Binance coin',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WBNB',
                decimals: 18n,
                address: '0x4200000000000000000000000000000000000006'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Polygon: {
        id: 137,
        lzId: '109',
        rpc: ['https://polygon-rpc.com'],
        explorer: 'https://polygonscan.com/tx/',
        currency: {name: 'MATIC'},
        tokens: {
            MATIC: {
                name: 'MATIC',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WMATIC',
                decimals: 18n,
                address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Avalanche: {
        id: 43114,
        lzId: '106',

        rpc: ['https://avalanche-c-chain-rpc.publicnode.com', 'https://avalanche.drpc.org'],
        explorer: 'https://snowtrace.io/tx/',
        currency: {name: 'AVAX'},
        tokens: {
            AVAX: {
                name: 'AVAX',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WAVAX',
                decimals: 18n,
                address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Scroll: {
        id: 534352,
        lzId: '214',
        rpc: ['https://rpc.scroll.io'],
        explorer: 'https://scrollscan.com/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'Ethereum',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0x5300000000000000000000000000000000000004'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Blast: {
        id: 81457,
        lzId: '243',

        rpc: ['https://rpc.blast.io'],
        explorer: 'https://blastscan.io/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'ETH',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0x4300000000000000000000000000000000000004'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Mantle: {
        id: 5000,
        lzId: '181',
        rpc: ['https://rpc.mantle.xyz'],
        explorer: 'https://mantlescan.info/tx/',
        currency: {name: 'MNT'},
        tokens: {
            MNT: {
                name: 'Mantle',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WMNT',
                decimals: 18n,
                address: '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Gnosis: {
        id: 100,
        lzId: '145',
        rpc: ['https://rpc.gnosischain.com'],
        explorer: 'https://gnosisscan.io/tx/',
        currency: {name: 'xDAI'},
        tokens: {
            xDAI: {
                name: 'xDAI',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WxDAI',
                decimals: 18n,
                address: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Fantom: {
        id: 250,
        lzId: '112',
        rpc: ['https://rpc.fantom.network'],
        explorer: 'https://ftmscan.com/tx/',
        currency: {name: 'FTM'},
        tokens: {
            FTM: {
                name: 'FTM',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WFTM',
                decimals: 18n,
                address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Celo: {
        id: 42220,
        lzId: '125',
        rpc: ['https://forno.celo.org'],
        explorer: 'https://celoscan.io/tx/',
        currency: {name: 'CELO'},
        tokens: {
            CELO: {
                name: 'Celo',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'Celo',
                decimals: 18n,
                address: '0x471ece3750da237f93b8e339c536989b8978a438' // Celo actually doesn't have wCELO lol
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Core: {
        id: 1116,
        lzId: '153',
        rpc: ['https://rpc.coredao.org'],
        explorer: 'https://scan.coredao.org/tx/',
        currency: {name: 'CORE'},
        tokens: {
            CORE: {
                name: 'Core',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WCORE',
                decimals: 18n,
                address: '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Manta: {
        id: 169,
        lzId: '217',
        rpc: ['https://manta-pacific.drpc.org'],
        explorer: 'https://manta.socialscan.io/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'ETH',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0x0dc808adce2099a9f62aa87d9670745aba741746'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Taiko: {
        id: 167000,
        lzId: '290',
        rpc: ['https://rpc.taiko.xyz'],
        explorer: 'https://taikoscan.io/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'ETH',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0xA51894664A773981C6C112C43ce576f315d5b1B6'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    // Zora: { // not supported by coingecko xdd
    //     id: 7777777,
    //     lzId: '290',
    //     rpc: ['https://rpc.zora.energy'],
    //     explorer: 'https://zora.superscan.network/tx/',
    //     currency: {name: 'ETH'},
    //     tokens: {
    //         ETH: {
    //             name: 'ETH',
    //             decimals: 18n,
    //             address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
    //         }
    //     },
    //     multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    // },
    Nova: {
        id: 42170,
        lzId: '175',
        rpc: ['https://arbitrum-nova-rpc.publicnode.com'],
        explorer: 'https://nova.arbiscan.io/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'ETH',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0xA51894664A773981C6C112C43ce576f315d5b1B6'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Monad: {
        id: 10143,
        lzId: '???',
        rpc: ['https://testnet-rpc.monad.xyz'],
        explorer: 'https://testnet.monvision.io/tx/',
        currency: {name: 'MON'},
        tokens: {
            MON: {
                name: 'MON',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'wMON',
                decimals: 18n,
                address: '0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Sepolia: {
        id: 11155111,
        lzId: '???',
        rpc: ['https://ethereum-sepolia-rpc.publicnode.com'],
        explorer: 'https://sepolia.etherscan.io/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'ETH',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0xA51894664A773981C6C112C43ce576f315d5b1B6'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    Bepolia: {
        id: 80069,
        lzId: '???',
        rpc: ['https://bepolia.rpc.berachain.com'],
        explorer: 'https://80069.testnet.routescan.io/tx/',
        currency: {name: 'BERA'},
        tokens: {
            ETH: {
                name: 'BERA',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WBERA',
                decimals: 18n,
                address: '0xA51894664A773981C6C112C43ce576f315d5b1B6'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    },
    ArbitrumSepolia: {
        id: 421614,
        lzId: '???',
        rpc: ['https://arbitrum-sepolia-rpc.publicnode.com'],
        explorer: 'https://sepolia.arbiscan.io/tx/',
        currency: {name: 'ETH'},
        tokens: {
            ETH: {
                name: 'ETH',
                decimals: 18n,
                address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            },
            WNATIVE: {
                name: 'WETH',
                decimals: 18n,
                address: '0xA51894664A773981C6C112C43ce576f315d5b1B6'
            }
        },
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11'
    }
}

export const timezones = [
    'Europe/Vienna',
    'Europe/Brussels',
    'Europe/Sofia',
    'Europe/Minsk',
    'Europe/Zurich',
    'Europe/Prague',
    'Europe/Berlin',
    'Europe/Copenhagen',
    'Europe/Tallinn',
    'Europe/Helsinki',
    'Europe/Paris',
    'Europe/London',
    'Europe/Athens',
    'Europe/Budapest',
    'Europe/Dublin',
    'Europe/Rome',
    'Europe/Vilnius',
    'Europe/Luxembourg',
    'Europe/Riga',
    'Europe/Monaco',
    'Europe/Chisinau',
    'Europe/Malta',
    'Europe/Amsterdam',
    'Europe/Oslo',
    'Europe/Warsaw',
    'Europe/Lisbon',
    'Europe/Bucharest',
    'Europe/Belgrade',
    'Europe/Kaliningrad',
    'Europe/Moscow',
    'Europe/Stockholm',
    'Europe/Istanbul'
]
