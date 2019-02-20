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

            <h1>Trading Post</h1>

            <h3>Source: {{exchangeSource}}</h3>

            <h3>Target: {{exchangeTarget}}</h3>

            <div class="dropdown dropdown-demo show">
                <a href="javascript://" class="btn btn-primary" @click="toggleSourceSelect">
                    <span>Select A Trading Source</span>
                    <i class="fa fa-angle-down mg-l-5"></i>
                </a>

                <div class="dropdown-menu dropdown-media-list wd-auto" :class="{ show: showSourceSelect }">
                    <div class="dropdown-menu-header">
                        <label>Supported Sources</label>
                    </div>

                    <div class="media-list">
                        <a href="javascript://" class="media" @click="updateSource('0GOLD')">
                            <img src="@/assets/img/tokens/0GOLD.png" alt="ZeroGold">
                            <div class="media-body">
                                <div>
                                    <p>ZeroGold</p>
                                    <strong>0GOLD</strong>
                                </div>
                                <p>
                                    Empowering a fresh generation of entreprenuers with the means to BUIDL their own DApps and HODL their own Wealth.
                                </p>
                            </div>
                        </a>

                        <a href="javascript://" class="media">
                            <img src="@/assets/img/tokens/0xBTC.png" alt="0xBitcoin Token">
                            <div class="media-body">
                                <div>
                                    <p>0xBitcoin Token</p>
                                    <strong>0xBTC</strong>
                                </div>
                                <p>
                                    Premier mineable ERC-20, closely based on the mining model / parameters of Bitcoin.
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

                        <a href="javascript://" class="media" @click="updateSource('USD_Cash')">
                            <img src="@/assets/img/tokens/USD.png" alt="USD Cash">
                            <div class="media-body">
                                <div>
                                    <p>Cash Money</p>
                                    <strong>USD</strong>
                                </div>
                                <p>
                                    Trade with good-ol-fashioned greenbacks.
                                </p>
                            </div>
                        </a>

                        <a href="javascript://" class="media" @click="updateSource('USD_Credit')">
                            <img src="@/assets/img/credit-card.png" alt="USD Credit">
                            <div class="media-body">
                                <div>
                                    <p>Credit Card</p>
                                    <strong>USD</strong>
                                </div>
                                <p>
                                    Buy using Certified Visa / Mastercard.
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

                        <div class="dropdown-list-footer bd-t">
                            <a href="javascript://" class="tx-12 tx-info">
                                <i class="fa fa-angle-down mg-r-5"></i>
                                + Add New Trade Source
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <button class="btn btn-lg btn-block btn-warning mt-3" @click="send">Start Exchange</button>

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
        showSourceSelect: false
    }),
    computed: mapGetters([
        'account',
        'exchangeSource',
        'exchangeTarget'
    ]),
    methods: {
        ...mapActions([
            'updateIdentityScreenId',
            'updateExchangeSource'
        ]),
        gotoCache() {
            this.updateIdentityScreenId('cache')
        },
        send() {
            console.log(`Sending ${this.txAmount} ether`)
        },
        buy() {
            console.log('buy some crypto')
        },
        toggleSourceSelect() {
            this.showSourceSelect = !this.showSourceSelect
        },
        updateSource(_source) {
            this.updateExchangeSource(_source)
        }
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>

</style>
