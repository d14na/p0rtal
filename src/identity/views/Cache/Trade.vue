<template>
    <div class="win-screen">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="javascript://" @click="gotoCache">back to ₵a¢he</a>
                    </li>
                </ol>

                <h6 class="slim-pagetitle">Buy / Trade</h6>
            </div>

            <h2 class="text-center text-secondary">Trading Post</h2>

            <div class="dropdown dropdown-demo show mt-3">
                <a href="javascript://" class="btn btn-outline-primary btn-block" @click="toggleSourceSelect">
                    <span>{{exchangeSourceDisplay}}</span>
                    <i class="fa fa-angle-down mg-l-5"></i>
                </a>

                <div class="dropdown-menu dropdown-media-list wd-auto" :class="{ show: showSourceSelect }">
                    <div class="dropdown-menu-header">
                        <label>Available Trade Sources</label>
                    </div>

                    <div class="media-list">
                        <a href="javascript://" class="media" @click="updateSource('0xBTC')">
                            <img src="@/assets/img/tokens/0xBTC.png" alt="0xBitcoin Token">
                            <div class="media-body">
                                <div>
                                    <p>0xBitcoin Token</p>
                                    <strong><strong class="slashed-zero">0</strong>xBTC</strong>
                                </div>
                                <p>
                                    Premier mineable ERC-20, closely based on the mining model / parameters of Bitcoin.
                                </p>
                            </div>
                        </a>

                        <a href="javascript://" class="media" @click="updateSource('CASH')">
                            <img src="@/assets/img/tokens/USD.png" alt="Cash">
                            <div class="media-body">
                                <div>
                                    <p>Cash Money</p>
                                    <strong>CASH</strong>
                                </div>
                                <p>
                                    Trade with good-ol-fashioned "legacy" bills.
                                </p>
                            </div>
                        </a>

                        <a href="javascript://" class="media" @click="updateSource('CREDIT')">
                            <img src="@/assets/img/credit-card.png" alt="Credit">
                            <div class="media-body">
                                <div>
                                    <p>Credit Card</p>
                                    <strong>CREDIT</strong>
                                </div>
                                <p>
                                    Buy using Certified Visa / Mastercard.
                                </p>
                            </div>
                        </a>

                        <a href="javascript://" class="media" @click="updateSource('DAI')">
                            <img src="@/assets/img/tokens/DAI.png" alt="DAI Stablecoin">
                            <div class="media-body">
                                <div>
                                    <p>MakerDAO Dai</p>
                                    <strong>DAI</strong>
                                </div>
                                <p>
                                    Decentralized and trustless, the Maker platform stabilizes the value of Dai to one USD using external market mechanisms and economic incentives.
                                </p>
                            </div>
                        </a>

                        <a href="javascript://" class="media" @click="updateSource('BTC')">
                            <img src="@/assets/img/tokens/BTC.png" alt="Bitcoin">
                            <div class="media-body">
                                <div>
                                    <p>Bitcoin</p>
                                    <strong>BTC</strong>
                                </div>
                                <p>
                                    The one that started it all.
                                </p>
                            </div>
                        </a>

                        <a href="javascript://" class="media" @click="updateSource('ETH')">
                            <img src="@/assets/img/tokens/ETH.png" alt="ETH">
                            <div class="media-body">
                                <div>
                                    <p>Ethereum</p>
                                    <strong>ETH</strong>
                                </div>
                                <p>
                                    Everyone's favorite crypto.
                                </p>
                            </div>
                        </a>

                        <a href="javascript://" class="media" @click="updateSource('WBTC')">
                            <img src="@/assets/img/tokens/WBTC.png" alt="WBTC">
                            <div class="media-body">
                                <div>
                                    <p>Wrapped Bitcoin</p>
                                    <strong>WBTC</strong>
                                </div>
                                <p>
                                    An ERC-compatible wrapper for Bitcoin (BTC).
                                </p>
                            </div>
                        </a>

                        <a href="javascript://" class="media" @click="updateSource('WETH')">
                            <img src="@/assets/img/tokens/WETH.png" alt="WETH">
                            <div class="media-body">
                                <div>
                                    <p>Wrapped Ethereum</p>
                                    <strong>WETH</strong>
                                </div>
                                <p>
                                    An ERC-compatible wrapper for Ethereum (ETH).
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="dropdown dropdown-demo show mt-3">
                <a href="javascript://" class="btn btn-outline-secondary btn-block" @click="toggleTargetSelect">
                    <span>{{exchangeTargetDisplay}}</span>
                    <i class="fa fa-angle-down mg-l-5"></i>
                </a>

                <div class="dropdown-menu dropdown-media-list wd-auto" :class="{ show: showTargetSelect }">
                    <div class="dropdown-menu-header">
                        <label>Available Trade Targets</label>
                    </div>

                    <div class="media-list">
                        <a href="javascript://" class="media">
                            <img src="@/assets/img/tokens/0GOLD.png" alt="ZeroGold">
                            <div class="media-body">
                                <div>
                                    <p>ZeroGold</p>
                                    <strong><strong class="slashed-zero">0</strong>GOLD</strong>
                                </div>
                                <p>
                                    Empowering a fresh generation of entreprenuers with the means to BUIDL their own DApps and HODL their own Wealth.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="mt-3 text-center text-secondary">
                <h5>Enter a Trade Value</h5>
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

            <div class="mt-3 text-center">
                {{txAmountDisplay}} Wrapped Ether
                <font-awesome-icon icon="exchange-alt" class="mx-1" />
                {{tradeEstimateDisplay}}* ZeroGold

                <br /><small><em>* this is an only an <u>estimate</u>, updated in real-time</em></small>
            </div>

            <button class="btn btn-lg btn-block btn-success mt-3" @click="trade">
                <font-awesome-icon icon="hand-holding-usd" class="mx-1" />
                Start Your Trade
            </button>

            <hr />

            <small>
                <div>
                    <strong class="text-danger">** PLEASE NOTE:</strong><br />
                    Due to regulatory uncertainty in the US,
                    p0rtal <strong class="text-danger">HAS NOT</strong> yet
                    enabled "off-chain" <strong>order book</strong>
                    -OR- transaction <strong>relaying</strong> services
                    for all markets.
                </div>

                <div class="mt-2">
                    <strong>ZeroGold (<span class="slashed-zero">0</span>GOLD)</strong>
                    is currently the <strong>ONLY</strong> base pair fully supported.
                    No worries though! ZeroCache users will <strong class="text-info">ALWAYS</strong>
                    be able to trade <strong class="text-info">UNLIMITED</strong> markets using the
                    <strong>FULL ZeroDelta DApp</strong> available
                    via IPFS and/or the Zeronet.
                </div>
            </small>

            <button class="btn btn-lg btn-block btn-outline-secondary mt-3" @click="zeroDelta">
                ZeroDelta on IPFS
                <font-awesome-icon icon="external-link-alt" class="mx-1" />
            </button>

            <button class="btn btn-lg btn-block btn-outline-secondary mt-3" @click="zeroDelta">
                ZeroDelta on Zeronet
                <font-awesome-icon icon="external-link-alt" class="mx-1" />
            </button>
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
        showSourceSelect: false,
        showTargetSelect: false
    }),
    computed: {
        ...mapGetters([
            'account',
            'address',
            'exchangeSource',
            'exchangeTarget'
        ]),
        exchangeSourceDisplay() {
            switch(this.exchangeSource) {
                case '0xBTC':
                    return 'I HAVE 0xBITCOIN TO OFFER'
                case 'CASH':
                    return 'I HAVE CASH MONEY TO OFFER'
                case 'CREDIT':
                    return 'I HAVE A CREDIT CARD TO USE'
                case 'DAI':
                    return 'I HAVE MAKERDAO DAI TO OFFER'
                case 'BTC':
                    return 'I HAVE BITCOIN TO OFFER'
                case 'ETH':
                    return 'I HAVE ETHER TO OFFER'
                case 'WBTC':
                    return 'I HAVE WRAPPED BITCOIN TO OFFER'
                case 'WETH':
                    return 'I HAVE WRAPPED ETHER TO OFFER'
                default:
                    return 'SELECT AN ASSET TO OFFER'
            }
        },
        exchangeTargetDisplay() {
            return 'I WANT TO RECEIVE ZEROGOLD**'
        },
        txAmountDisplay() {
            return numeral(this.txAmount).format('0,0.00')
        },
        tradeEstimate() {
            return this.txAmount * 5250
        },
        tradeEstimateDisplay() {
            return numeral(this.tradeEstimate).format('0,0.00')
        }
    },
    methods: {
        ...mapActions([
            'updateIdentityScreenId',
            'updateExchangeSource',
            'updateExchangeTarget'
        ]),
        gotoCache() {
            this.updateIdentityScreenId('cache')
        },
        buy() {
            console.log('buy some crypto')
        },
        toggleSourceSelect() {
            this.showSourceSelect = !this.showSourceSelect
        },
        toggleTargetSelect() {
            this.showTargetSelect = !this.showTargetSelect
        },
        updateSource(_source) {
            this.updateExchangeSource(_source)
        },
        updateTarget(_target) {
            this.updateExchangeTarget(_target)
        },
        zeroDelta() {
            _0vueIdentity.deactivate()

            // FIXME Proxy the ZeroDelta app through P0rtal.

            const name = 'faq'
            const params = { topic: 'zerodelta' }

            /* Load FAQ. */
            p0rtal.$router.push({ name, params })
        },
        trade() {
            console.log(`Starting trade for ${this.tradeEstimateDisplay} ZeroGold.`)
        },
    },
    mounted: function () {
        /* Initilize address. */
        // FIXME Pull this value dynamically from `aname.zerodelta`
        const contractAddress = '0xD8D3BE44848f5B096282396BFde74c49bbE8546D' // ZeroDelta

        /* Set from. */
        const from = this.address

        /* Initialize gas price. */
        // const gasPrice = '20000000000' // default gas price in wei, 20 gwei in this case
        const gasPrice = '5.5' * 1e9 // or get with web3.eth.gasPrice

        /* Initilize abi. */
        const abi = require('./abi/zeroDelta')

        /* Initialize (transaction) options. */
        const options = { from, gasPrice }

        /* Initialize contract. */
        const contract = new web3.eth.Contract(
            abi, contractAddress, options)

        /**
         * Supported Markets
         * -----------------
         *
         * 1. 0GOLD / WETH      Wrapped Ethereum
         *                      0x00a021b22099e4cd759b5f5b73556ef143c9df7cac23530968e0f9130c47fb1f ROPSTEN
         * 2. 0GOLD / DAI       MakerDAO DAI
         * 3. 0GOLD / 0xBTC     0xBitcoin Token
         * 4. 0GOLD / WBTC      Wrapped Bitcoin
         */

        contract.getPastEvents('OrderRequest', {
            fromBlock: 5138400,
            toBlock: 'latest'
        })
        .then(_events => {
            console.log('EVENTS', _events)

            _events.forEach(_event => {
                /* Retrieve return values. */
                const returnValues = _event.returnValues

                // console.log('RETURN VALUES', returnValues)

                /* Retrieve market id. */
                const marketId = returnValues.marketId

                console.log(`Market Id\n[ ${marketId} ]`)

                /* Retrieve order id. */
                const orderId = returnValues.orderId

                console.log(`Order Id\n[ ${orderId} ]`)
            })
        })
        .catch(_error => {
            console.error('ERROR', _error)
        })

        contract.events.OrderRequest({
            fromBlock: 5138400
        })
        .on('data', _event => {
            console.log('EVENT', _event)
        })
        .on('error', _error => {
            console.error('ERROR', _error)
        })
    }
}
</script>

<style scoped>

</style>
