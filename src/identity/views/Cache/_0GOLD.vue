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

            <div class="balance-card card-drop-shadow mt-3">
                {{balance}}
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

            <p class="text-right mt-1">
                <button class="btn btn-sm btn-outline-secondary" @click="whatIsBoost">
                    <font-awesome-icon icon="info-circle" class="mr-1" />
                    What is <strong>BOOST</strong>?
                </button>
            </p>

            <button class="btn btn-lg btn-block btn-info mt-3" @click="relay">
                Cache Transfer
            </button>

            <button class="btn btn-lg btn-block btn-outline-warning mt-3" @click="buy">
                Need Gold for STAEKing?
            </button>

            <div class="mt-3 p-3 bg-black-1">
                <h3>Advanced Users ONLY</h3>

                <p>
                    Nice! Your account is loaded with GAS.
                    You can power your own transactions.
                </p>

                <p class="text-center">
                    <button class="btn btn-sm btn-outline-secondary" @click="cacheIsBetter">
                        <font-awesome-icon icon="info-circle" class="mr-1" />
                        How is Cache <strong>BETTER</strong> than ETH?
                    </button>
                </p>

            </div>

            <button class="btn btn-lg btn-block btn-outline-secondary" @click="send">Metamask Transfer</button>

            <div>
                <div class="mt-3 p-3 bg-teal text-white">
                    <h3 class="text-center">Grow My Cache</h3>

                    <p>
                        Great news! We found some tokens to deposit into your Cache.
                    </p>

                    <p class="text-center">
                        <button class="btn btn-sm btn-secondary" @click="cacheIsBetter">
                            <font-awesome-icon icon="info-circle" class="mr-1" />
                            How is Cache <strong>BETTER</strong> than ETH?
                        </button>
                    </p>
                </div>

                <button class="btn btn-lg btn-block btn-outline-secondary" @click="deposit">
                    Add New Tokens
                </button>
            </div>
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
        'account',
        'anameZeroCache'
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
        async relay() {
            /* Initilize address. */
            // NOTE: ZeroCache (latest) should be pulled dynamically from db.
            const anameZeroCache = this.anameZeroCache

            console.log('ANAME ZeroCache', anameZeroCache)

            /* Retrieve current block number. */
            const blockNumber = await web3.eth.getBlockNumber()
                .catch(_error => {
                    console.error('ERROR:', _error)
                })

            // console.log('Current block number', blockNumber)

            /* Calculate time-to-live. */
            const ttl = blockNumber + 250 // approx 60 minutes

            // console.log('Time-to-live', ttl)

            /**
             * Initialize all transaction parameters for signing.
             *
             * NOTE: We manually set the `t` of each parameter
             *       for accurate type casting.
             */
            const contract = { t: 'address', v: anameZeroCache }
            const token = { t: 'address', v: '0x079F89645eD85b85a475BF2bdc82c82f327f2932' }
            const from = { t: 'address', v: '0xe5Fe2e0Ec02bB85d0655CA6Cf4E23824fAD285DC' }
            const to = { t: 'address', v: '0xb07d84f2c5d8be1f4a440173bc536e0b2ee3b05e' }
            const tokens = { t: 'uint256', v: this.txAmount }
            const staekholder = { t: 'bytes', v: '0x1936712F2Ff24469b41F1E665AB6483e6CaE2035' }
            // const staekholder = { t: 'bytes', v: '0x0000000000000000000000000000000000000000' }
            const staek = { t: 'uint256', v: '1337' }
            const expires = { t: 'uint256', v: ttl }
            const nonce = { t: 'uint256', v: moment().unix() } // seconds

            /* Sign the parameters to generate a hash signature. */
            const sigHash = web3.utils.soliditySha3(
                contract, // ZeroCache's contract address
                token, // token's contract address
                from, // sender's address
                to, // receiver's address
                tokens, // quantity of tokens
                staekholder, // staekholder (NOTE: bytes is the same as address, but w/out checksum)
                staek, // staek amount
                expires, // expiration time
                nonce // nonce (unique integer)
            )

            // console.log('SIGNATURE HASH', sigHash)

            /* Sign signature hash. */
            const signaturePkg = web3.eth.accounts.sign(
                sigHash, this.account.privateKey)

            // console.log('SIGNATURE PACKAGE', signaturePkg)

            /* Set signature. */
            const signature = signaturePkg.signature

            console.log('SIGNATURE', signature)

            /* Build relay package. */
            const relayPkg = {
                token: token.v,
                from: from.v,
                to: to.v,
                tokens: tokens.v,
                staekholder: staekholder.v,
                staek: staek.v,
                expires: expires.v,
                nonce: nonce.v,
                signature
            }

            console.log('Relay Package', relayPkg)

            /* Set method. */
            const method = 'POST'

            /* Set headers. */
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

            /* Set body. */
            const body = JSON.stringify(relayPkg)

            /* Set options. */
            const options = { method, headers, body }

            /* Initialize (Cache) endpoint. */
            let endpoint = null

            /* Initialize (Cache) endpoint. */
            // FIXME We need to detect the network and connect appropriately.
            if (false) { // MAINNET
                endpoint = 'http://localhost:3000/v1'
                // endpoint = 'https://cache.0net.io/v1'
            } else { // ROPSTEN
                endpoint = 'http://localhost:4000/v1'
                // endpoint = 'https://cache-ropsten.0net.io/v1'
            }

            /* Make RPC. */
            const rawResponse = await fetch(endpoint + '/transfer', options)

            /* Retrieve response. */
            const content = await rawResponse.json()

            console.log(content)
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
