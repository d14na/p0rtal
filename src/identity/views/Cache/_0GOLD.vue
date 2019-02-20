<template>
    <div class="win-screen">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="javascript://" @click="gotoCache">back to ₵a¢he</a>
                    </li>
                </ol>

                <h6 class="slim-pagetitle">ZeroGold</h6>
            </div>

            <button class="btn btn-lg btn-block btn-outline-info mt-3" @click="buy">Buy Gold</button>

            <div>
                <h1>Balance is: {{balance}}</h1>
            </div>

            <div class="row mt-3">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                        </div>
                        <input type="text" class="form-control" v-model:value="txAmount">
                        <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">ADD</span>
                        </div>
                        <input type="text" class="form-control" v-model:value="txBoost">
                        <div class="input-group-append">
                            <span class="input-group-text">BOOST</span>
                        </div>
                    </div>
                </div>
            </div>

            <p class="text-center">
                <button class="btn btn-sm btn-outline-secondary" @click="whatIsBoost">What is <strong>BOOST</strong>?</button>
            </p>

            <button class="btn btn-lg btn-block btn-info mt-3" @click="relay">Cache Transfer</button>

            <div class="mt-3 p-3 bg-black-1">
                <h3>Advanced Users ONLY</h3>

                <p>
                    Nice! Your account is loaded with GAS.
                    You can power your own transactions.
                </p>

                <p class="text-center">
                    <button class="btn btn-sm btn-outline-secondary" @click="cacheIsBetter">How is Cache <strong>BETTER</strong> than ETH?</button>
                </p>

            </div>

            <button class="btn btn-lg btn-block btn-outline-secondary" @click="send">Metamask Transfer</button>

            <div class="mt-3 p-3 bg-teal text-white">
                <h3 class="text-center">Grow My Cache</h3>

                <p>
                    Great news! We found some tokens to deposit into your Cache.
                </p>

                <p class="text-center">
                    <button class="btn btn-sm btn-secondary" @click="cacheIsBetter">How is Cache <strong>BETTER</strong> than ETH?</button>
                </p>

            </div>

            <button class="btn btn-lg btn-block btn-outline-secondary" @click="deposit">Add New Tokens</button>

        </div>
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

/* Import COMPONENT. */
// import Component from '@/components/Component.vue'

/* Initialize components. */
const components = {
    //
}

/* Export. */
export default {
    components,
    data: () => ({
        txAmount: 10**8,
        txBoost: 0,
        balance: 0
    }),
    computed: mapGetters([
        'address',
        'account'
    ]),
    methods: {
        ...mapActions([
            'updateIdentityScreenId'
        ]),
        gotoCache() {
            this.updateIdentityScreenId('cache')
        },
        cacheIsBetter() {
            _0vueIdentity.deactivate()

            const name = 'faq'
            const params = { topic: 'cache-is-better' }

            /* Load FAQ. */
            p0rtal.$router.push({ name, params })
        },
        whatIsBoost() {
            _0vueIdentity.deactivate()

            const name = 'faq'
            const params = { topic: 'what-is-boost' }

            /* Load FAQ. */
            p0rtal.$router.push({ name, params })
        },
        deposit() {
            console.log('Deposit remaining tokens to my Cache.');
        },
        relay() {
            /* Initilize address. */
            // NOTE: ZeroCache (latest) should be pulled dynamically from db.
            const contractAddress = '0xA6CB833eA8127Aa628152720b622F6B4d002fCD8'

            console.log('Contract Address', contractAddress)

            const sigHash = web3.utils.soliditySha3(
                { t: 'address', v: contractAddress },
                { t: 'address', v: '0x079F89645eD85b85a475BF2bdc82c82f327f2932' },
                { t: 'address', v: '0xe5Fe2e0Ec02bB85d0655CA6Cf4E23824fAD285DC' },
                { t: 'address', v: '0xb07d84f2c5d8be1f4a440173bc536e0b2ee3b05e' },
                { t: 'uint256', v: '1337' },
                { t: 'bytes'  , v: '0x0000000000000000000000000000000000000000' }, // same as address, but w/out checksum
                { t: 'uint256', v: '0' },
                { t: 'uint256', v: '5050000' },
                { t: 'uint256', v: '0' }
            )

            console.log('SIGNATURE HASH', sigHash)

            const sig = web3.eth.accounts.sign(
                sigHash, this.account.privateKey)

            console.log('SIGNATURE PACKAGE', sig)

            console.log('SIGNATURE', sig.signature)
        },
        async send() {
            const to = '0xb07d84F2c5D8bE1f4a440173BC536E0B2ee3b05E'

            console.log(`Sending ${this.txAmount} ether to ${to}`)

            // Connect to the network
            const provider = new ethers.providers.JsonRpcProvider(
                'https://ropsten.infura.io/v3/773850fb37e546dca04e04faf7ba2c58')

            // The address from the above deployment example
            let contractAddress = '0xfe50c8e86dd7f7f4fb3d9f634662e753445f8b4c'

            const abi = require('./abi/zeroCache')

            let privateKey = this.account.privateKey
            let wallet = new ethers.Wallet(privateKey, provider)

            let contract = new ethers.Contract(contractAddress, abi, wallet)

            let contractWithSigner = contract.connect(wallet)

            let tx = await contractWithSigner.transfer(
                to,
                '0x079F89645eD85b85a475BF2bdc82c82f327f2932', // ZeroCache
                this.txAmount
            )

            console.log('TX', tx, moment().format('lll'))

            // wait for mining
            await tx.wait()

            console.log('ALL done!', moment().format('lll'))
        },
        buy() {
            console.log('buy some crypto')

            this.getBalance2()
        },
        async getBalance2() {
            // Connect to the network
            const provider = new ethers.providers.JsonRpcProvider(
                'https://ropsten.infura.io/v3/773850fb37e546dca04e04faf7ba2c58')

            // The address from the above deployment example
            let contractAddress = '0xfe50c8e86dd7f7f4fb3d9f634662e753445f8b4c'

            const abi = require('./abi/zeroCache')

            // We connect to the Contract using a Provider, so we will only
            // have read-only access to the Contract
            let contract = new ethers.Contract(contractAddress, abi, provider)

            let currentValue = await contract.balanceOf(
                '0x079F89645eD85b85a475BF2bdc82c82f327f2932',
                '0xe5Fe2e0Ec02bB85d0655CA6Cf4E23824fAD285DC'
            )

            console.log('CURRENT_VALUE', currentValue, currentValue.toString())

            let balance = currentValue.div(100000000).toString()
            this.balance = numeral(balance).format('0,0')
            // this.balance = balance
        },
        getBalance() {
            /* Initilize address. */
            const from = this.address

            /* Initilize private key. */
            // const pk = this.account.privateKey

            /* Initialize new account from private key. */
            const acct = this.account
            // const acct = web3.eth.accounts.privateKeyToAccount(pk)

            /* Initilize address. */
            const contractAddress = '0x079F89645eD85b85a475BF2bdc82c82f327f2932' // ZeroGold
            // const contractAddress = '0xfe50c8e86dd7f7f4fb3d9f634662e753445f8b4c' // ZeroCache

            /* Initilize abi. */
            const abi = require('./abi/zeroGold')
            // const abi = require('./abi/zeroCache')

            /* Initialize gas price. */
            const gasPrice = '20000000000' // default gas price in wei, 20 gwei in this case

            /* Initialize options. */
            const options = { from, gasPrice }

            const myContract = new web3.eth.Contract(
                abi, contractAddress, options)

            console.log('MY CONTRACT', myContract)

            myContract.methods
                .balanceOf(
                    // '0x079F89645eD85b85a475BF2bdc82c82f327f2932', // token
                    // '0xe5Fe2e0Ec02bB85d0655CA6Cf4E23824fAD285DC' // account address
                    '0x399c0fA056E3cF7aeC4A9E0BDa47Ee014DE3a5F0' // account address
                ).call({ from },
                    function (_error, _result) {
                        if (_error) return console.error(_error)

                        console.log('RESULT', _result)

                        // let pkg = {
                        //     balance: _result,
                        //     bricks: parseInt(_result / 100000000)
                        // }
                        //
                        // res.json(pkg)
                    })
        }
    },
    mounted: function () {
        // console.log('FOUND WEB3', web3)
    }
}
</script>

<style scoped>

</style>
