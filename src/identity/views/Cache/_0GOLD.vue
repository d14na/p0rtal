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

            <button class="btn btn-lg btn-block btn-warning mt-3" @click="send">Send ETH</button>

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
        txAmount: 0,
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
        send() {
            console.log(`Sending ${this.txAmount} ether`)
        },
        async buy() {
            console.log('buy some crypto')

            // console.log('', this.account.privateKey)
            // console.log('this.address', this.address)

            // this.getBalance()

            // The Contract interface
            let abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]

            console.log('ETHERS', ethers)

            // Connect to the network
            let provider = ethers.getDefaultProvider('ropsten')

            // The address from the above deployment example
            let contractAddress = "0x079F89645eD85b85a475BF2bdc82c82f327f2932"

            // We connect to the Contract using a Provider, so we will only
            // have read-only access to the Contract
            let contract = new ethers.Contract(contractAddress, abi, provider)

            let currentValue = await contract.balanceOf('0x399c0fA056E3cF7aeC4A9E0BDa47Ee014DE3a5F0')

            console.log('CURRENT VALUE', currentValue)
            console.log('CURRENT VALUE 2', currentValue.toString())
            console.log('CURRENT VALUE 3', currentValue.div(100000000))
            console.log('CURRENT VALUE 4', currentValue.div(100000000).toString())

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
