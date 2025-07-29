import {getAddress, Wallet} from 'ethers'
import {
    appendToFile,
    c,
    defaultSleep,
    importAndValidatePrivateData,
    importEmails,
    importProxies,
    RandomHelpers,
    sleep,
    writeToFile
} from './utils/helpers'
import {executionSetup, shuffleWallets, skipFirst} from './config'
import {menu} from './utils/menu'
import {mintTorch} from './modules/Torch'

async function main() {
    console.log(
        c.cyan(
            "\n\n\nI'm not torch, i'm just an ethereum fan...\nI'm not torch, i'm just an ethereum fan...\nI'm not torch, i'm just an ethereum fan...\n\n\n"
        )
    )
    let keysAndAddresses = await importAndValidatePrivateData('./credentials/privates.txt', false)
    // let proxies = await importProxies('./credentials/proxies.txt')

    // let walletToProxy: {[key: string]: string} = {}
    // keysAndAddresses.forEach(function (k, i) {
    //     walletToProxy[new Wallet(k.key).privateKey] = proxies[i % proxies.length]
    // })
    if (skipFirst > 0) {
        keysAndAddresses = keysAndAddresses.slice(skipFirst)
    }
    if (shuffleWallets) {
        keysAndAddresses = RandomHelpers.shuffleArray(keysAndAddresses)
        console.log('shuffled wallets')
    }
    let scenario = await menu.chooseTask()
    switch (scenario) {
        case 'Torch':
            if (executionSetup.executionMode == 'one-by-one') {
                for (let i = 0; i < keysAndAddresses.length; i++) {
                    let signer = new Wallet(keysAndAddresses[i].key)
                    console.log(c.cyan(`#${i + 1}/${keysAndAddresses.length} ${signer.address}`))
                    try {
                        await mintTorch(i + 1, signer, [])
                    } catch (e: any) {
                        console.log(`error in sync mode: ${e?.message != undefined ? e?.message.slice(0, 40) + '...' : 'unknown'}`)
                    }
                    await sleep(RandomHelpers.getRandomNumber(executionSetup.sleepBetweenAccs))
                }
            }
            if (executionSetup.executionMode == 'async') {
                let batches: {index: number; wallet: Wallet}[][] = []
                let batchArr: {index: number; wallet: Wallet}[] = []
                for (let i = 0; i < keysAndAddresses.length; i++) {
                    let signer = new Wallet(keysAndAddresses[i].key)
                    batchArr.push({index: i, wallet: signer})
                    if (((i + 1) % executionSetup.batchSize == 0 && i != 0) || i == keysAndAddresses.length - 1) {
                        batches.push(batchArr)
                        batchArr = []
                    }
                }
                console.log(c.bgMagenta(`Got ${batches.length} batches with ${keysAndAddresses.length} accs`))
                let batchNumber = 0
                for (let batch of batches) {
                    console.log(c.bgBlueBright(`Starting new batch of accounts`))
                    for (let i = 0; i < batch.length; i++) {
                        console.log(c.cyan(`starting #${i + 1 + batchNumber * executionSetup.batchSize} ${batch[i].wallet.address}`))
                        mintTorch(i + 1 + batchNumber * executionSetup.batchSize, batch[i].wallet, []).catch((error) =>
                            console.error('Error in async mode', error)
                        )
                        await defaultSleep(RandomHelpers.getRandomNumber(executionSetup.sleepBetweenAccs), false)
                    }
                    await defaultSleep(executionSetup.sleepBetweenBatches, false)
                    batchNumber++
                }
            }
            break
    }
}

main()
