import {Contract, isAddress, JsonRpcProvider, parseEther, Wallet} from 'ethers'
import {bigintToPrettyStr, c, defaultSleep, RandomHelpers, retry} from '../utils/helpers'
import {chains, timezones} from '../utils/constants'
import {getBalance, sendTx} from '../utils/web3Client'
import {getRandomProxyProvider} from '../utils/utils'

function generateEncryptedField(urlToVerify: string, address: string): string {
    const combined = address.toLowerCase() + '_' + urlToVerify
    const key = '37yt4ihugnth48932pqbfywm573bf8ikrs324gu'
    const encrypted = CryptoJS.AES.encrypt(combined, key).toString()
    return encrypted
}

class Torch {
    id: number | string
    signer: Wallet
    constructor(id: number | string, signer: Wallet) {
        this.id = id
        this.signer = signer
    }
    async mintTorch() {
        const torchAddress = '0x26d85a13212433fe6a8381969c2b0db390a0b0ae'
        const torchContract = new Contract(
            torchAddress,
            ['function balanceOf(address) external view returns(uint256)', 'function mint() external'],
            this.signer
        )

        let alreadyClaimedAmount = await torchContract.balanceOf(this.signer.address)
        if (alreadyClaimedAmount >= 1n) {
            this.log(c.blue(`Ethereum Torch already minted`))
            return
        }
        let hash = await sendTx(this.signer, {to: torchAddress, data: torchContract.interface.encodeFunctionData('mint', [])})
        this.log(c.green(`Torched successfully ${chains['Base'].explorer + hash}`))
    }
    log(message?: any, ...optionalParams: any[]) {
        console.log(c.hex(this.signer.address)(`#${this.id} ${this.signer.address}:`), message, ...optionalParams)
    }
}
async function mintTorch(id: number | string, signer: Wallet, proxies: string[] | undefined) {
    try {
        let art = new Torch(id, signer.connect(getRandomProxyProvider(RandomHelpers.shuffleArray(proxies ?? [])[0], 'Ethereum')))
        await retry(
            async () => {
                await art.mintTorch()
            },
            {maxRetryCount: 3}
        )
        return true
    } catch (e: any) {
        console.log(e)
        return false
    }
}

export {mintTorch}
