<template>
    <div class="win-screen">
        <div class="container">
            <div class="row header">
                <div class="col text-center">
                    <h3 class="text-danger">Authorization Required</h3>
                    <hr />
                </div>
            </div>

            <p class="lead text-center">
                We DON'T judge anyone here.
                <br /><strong class="text-warning">Do Crypto</strong> however you like.
                <hr />
            </p>

            <p class="text-info text-center">
                Please choose ANY option below<br />to access your crypto account(s):
            </p>

            <div class="card mt-3">
                <div class="card-body">
                    <h4 class="text-center text-info">1. Email Address</h4>

                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><font-awesome-icon icon="at" fixed-width /></span>
                        </div>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="preferred email address"
                            v-model:value="email">
                    </div>

                    <div class="row mt-3">
                        <div class="col">
                            <label class="rdiobox">
                                <input name="accountType" type="radio" value="email" v-model="accountType" checked>
                                <span>Email Id</span>
                            </label>
                        </div>
                        <div class="col">
                            <label class="rdiobox">
                                <input name="accountType" type="radio" value="photo" v-model="accountType">
                                <span>Photo Id</span>
                            </label>
                        </div>
                    </div>

                    <p class="small mt-3">
                        <strong>1. NEVER</strong> use an insecure email address when securing a crypto account.
                    </p>

                    <p class="small mt-1">
                        <strong>2. NEVER</strong> signin to an insecure computer with your crypto account.
                    </p>
                </div>

                <button class="btn btn-block btn-primary mt-3" @click="authByEmail">Signin with Email ONLY</button>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    <h4 class="text-center text-info">2. Password</h4>

                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><font-awesome-icon icon="user-secret" fixed-width /></span>
                        </div>
                        <input type="password" id="password" class="form-control" placeholder="Enter your password">
                    </div>

                    <div class="row mt-3">
                        <div class="col">
                            <label class="rdiobox">
                                <input name="passwordType" type="radio" checked>
                                <span>Password</span>
                            </label>
                        </div>
                        <div class="col">
                            <label class="rdiobox">
                                <input name="passwordType" type="radio">
                                <span>Mnemonic</span>
                            </label>
                        </div>
                    </div>

                    <p class="small mt-3">
                        <strong>1. NEVER</strong> give your password to ANYONE you DON'T want to control ALL your crypto.
                    </p>

                    <p class="small mt-1">
                        <strong>2. NEVER</strong> sign to an insecure computer with your crypto account.
                    </p>
                </div>

                <button class="btn btn-block btn-primary mt-3" @click="authWithPassword">Signin with Email + Password</button>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    <h4 class="text-center text-info">3. Private Key / Hash</h4>

                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><font-awesome-icon icon="key" fixed-width /></span>
                        </div>
                        <input type="password" id="privateKey" class="form-control" placeholder="32-byte private key/hash">
                    </div>

                    <p class="small mt-3">
                        This is for <a href="javascript://"><strong>more advanced users,</strong></a> and if you're not sure what it's for, then you probably don't need it, you can safely use one of the options above.
                    </p>
                </div>

                <button class="btn btn-block btn-primary mt-3">Signin with Private Key / Hash</button>
            </div>

            <div class="card mt-3">
                <div class="card-body">
                    <h4 class="text-center text-info">4. Hardware Wallet</h4>

                    <button class="btn btn-lg btn-block btn-outline-info mt-3">Trezor</button>
                    <button class="btn btn-lg btn-block btn-outline-info mt-3">Ledger S</button>

                    <p class="small mt-3">
                        This is by all accounts the <strong>MOST SECURE</strong> way to Do Crypto, so we highly recommend you consider this for any high value accounts.
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

/* Initialize Shamir Secret Sharing. */
import Shamir from '@/lib/shamir.js'

/* Initialize components. */
const components = {
    //
}

/* Export. */
export default {
    components,
    data: () => ({
        /* Initialize email address. */
        email: '',
        accountType: 'email'
    }),
    computed: mapGetters([
        'account'
    ]),
    methods: {
        ...mapActions([
            'updateIdentityScreenId',
            'updateAccount',
            'updateAddress',
            'updateEmail'
        ]),
        authByEmail() {
            console.log('authorize by email', this.email, this.accountType)

            /* Validate authorization. */
            if (this.email === '') {
                alert('enter a value')
            } else {
                /* Set screen id. */
                this.updateEmail(this.email)

                const web3 = require('web3')

                /* Initilize private key. */
                const pk = web3.utils.soliditySha3(this.email)
                console.log('EMAIL -> PK', this.email, pk)

                let messageBytes = ethers.utils.toUtf8Bytes(this.email);
                console.log('EMAIL (messageBytes)', messageBytes)
                const pk2 = ethers.utils.keccak256(messageBytes)
                console.log('EMAIL (ethers) -> PK', this.email, pk2)

                /* Initialize Shamir's secret. */
                const shamirSecret = pk.slice(2)

                /* Generate 3 Shamir secret hashes from private key. */
                const shamirShares = Shamir.generateShares(shamirSecret, 3, 2)
                console.log(shamirShares)

                /* Initialize new account from private key. */
                const acct = web3.eth.accounts.privateKeyToAccount(pk)
                console.log('ACCOUNT', acct.address)

                /* Update address. */
                this.updateAddress(acct.address)

                /* Update account. */
                this.updateAccount(acct)

                /* Update screen id. */
                this.updateIdentityScreenId('profile')
            }
        },
        authWithPassword() {
            console.log('TODO Implement auth with password')
        }
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>
.header {
    margin-top: 20px;
}

.small {
    margin: 0;
    padding: 0;
}
</style>
