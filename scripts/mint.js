const { ethers, network } = require("hardhat")
const { moveBlocks } = require("../utils/move-blocks")

const mint = async () => {
    const basicNft = await ethers.getContract("BasicNft")

    console.log("Minting...")
    const mintNftTx = await basicNft.mintNft()
    const mintNftTxReceipt = await mintNftTx.wait(1)
    tokenId = mintNftTxReceipt.events[0].args.tokenId
    console.log(`Got TokenId ${tokenId}`)
    console.log(`Nft Address: ${basicNft.address}`)

    if (network.config.chainId === 31337) {
        await moveBlocks(1, (sleepAmount = 1000))
    }
}

mint()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
