<template>
    <div class="win-screen">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <!--  -->
                </ol>

                <h6 class="slim-pagetitle">My ₵a¢he</h6>
            </div>

            <div class="row price-boxes">
                <div class="col pr-0">
                    <div class="cache-boxes ether-box card-drop-shadow" @click="loadScreen('cache-WETH')">
                        <strong>Ethereum</strong>
                        <br />{{ethDisplay}}
                        <small>
                            <br />{{ethDisplayChange}}
                            <font-awesome-icon icon="arrow-up" v-if="ethUsdChange > 0" />
                            <font-awesome-icon icon="arrow-down" v-if="ethUsdChange < 0" />
                        </small>
                    </div>
                    <div class="small">HODLing</div>
                </div>
                <div class="col">
                    <div class="cache-boxes dai-box card-drop-shadow" @click="loadScreen('cache-DAI')">
                        <strong>Dai <small><small>STABLE</small></small></strong>
                        <br />{{daiDisplay}}
                        <small>
                            <br />{{daiDisplayChange}}
                            <font-awesome-icon icon="arrow-up" v-if="daiUsdChange > 0" />
                            <font-awesome-icon icon="arrow-down" v-if="daiUsdChange < 0" />
                        </small>
                    </div>
                    <div class="small">SPEDNing</div>
                </div>
                <div class="col pl-0">
                    <div class="cache-boxes zerogold-box card-drop-shadow" @click="loadScreen('cache-0GOLD')">
                        <strong>ZeroGold</strong>
                        <br />{{zerogoldDisplay}}
                        <small>
                            <br />{{zerogoldDisplayChange}}
                            <font-awesome-icon icon="arrow-up" v-if="zerogoldUsdChange > 0" />
                            <font-awesome-icon icon="arrow-down" v-if="zerogoldUsdChange < 0" />
                        </small>
                    </div>
                    <div class="small">STAEKing</div>
                </div>
            </div>

            <!-- abbreviated account address -->
            <h2 class="text-info text-center mt-3">
                <span class="badge badge-info">
                    {{accountAbbr}}
                </span>
            </h2>

            <div class="balance-card card-drop-shadow mt-3">
                $0.00
            </div>

            <div class="row">
                <div class="col-5 pr-1">
                    <button class="btn btn-lg btn-block btn-outline-primary mt-3" @click="loadScreen('cache-tokens')">
                        <font-awesome-icon icon="coins" class="mx-1" />
                        Tokens
                    </button>
                </div>
                <div class="col-7 pl-1">
                    <button class="btn btn-lg btn-block btn-outline-secondary mt-3 text-light" @click="loadScreen('cache-collectibles')">
                        <font-awesome-icon icon="gifts" class="mx-1" />
                        Collectibles
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-7 pr-1">
                    <button class="btn btn-lg btn-block btn-outline-success mt-3" @click="loadScreen('cache-trade')">
                        <font-awesome-icon icon="exchange-alt" class="mx-1" />
                        Buy / Trade
                    </button>
                </div>
                <div class="col-5 pl-1">
                    <button class="btn btn-lg btn-block btn-outline-secondary mt-3 text-light" @click="loadScreen('cache-invest')">
                        <font-awesome-icon icon="piggy-bank" class="mx-1" />
                        Invest
                    </button>
                </div>
            </div>

            <hr />

            <ActivitySummary class="mt-3" />
        </div>
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

/* Import COMPONENT. */
import ActivitySummary from '@/identity/components/ActivitySummary.vue'

/* Initialize components. */
const components = {
    ActivitySummary
}

/* Export. */
export default {
    components,
    data: () => ({
        ethUsd: 0.0,
        ethUsdChange: 0.0,
        daiUsd: 0.0,
        daiUsdChange: 0.0,
        zerogoldUsd: 0.0,
        zerogoldUsdChange: 0.0
    }),
    computed: {
        ...mapGetters([
            'account',
            'address'
        ]),
        accountAbbr() {
            /* Initialize full account (address). */
            const address = this.address

            /* Validate address. */
            if (address === 0) {
                return ''
            }

            /* Set abbreviation. */
            const abbr = `${address.slice(0, 10)} ... ${address.slice(-8)}`

            /* Return abbreviation. */
            return abbr
        },
        ethDisplay() {
            /* Require moment. */
            const numeral = require('numeral')

            return numeral(this.ethUsd).format('$0,0.00')
        },
        ethDisplayChange() {
            /* Require moment. */
            const numeral = require('numeral')

            /* Set percent change. */
            const pctChange = parseFloat(this.ethUsdChange / 100)

            /* Return formatted. */
            return numeral(pctChange).format('0.00%')
        },
        daiDisplay() {
            /* Require moment. */
            const numeral = require('numeral')

            return numeral(this.daiUsd).format('$0.00')
        },
        daiDisplayChange() {
            /* Require moment. */
            const numeral = require('numeral')

            /* Set percent change. */
            const pctChange = parseFloat(this.daiUsdChange / 100)

            /* Return formatted. */
            return numeral(pctChange).format('0.00%')
        },
        zerogoldDisplay() {
            /* Require moment. */
            const numeral = require('numeral')

            return numeral(this.zerogoldUsd).format('$0.0000')
        },
        zerogoldDisplayChange() {
            /* Require moment. */
            const numeral = require('numeral')

            /* Set percent change. */
            const pctChange = parseFloat(this.zerogoldUsdChange / 100)

            /* Return formatted. */
            return numeral(pctChange).format('0.00%')
        }
    },
    methods: {
        ...mapActions([
            'updateIdentityScreenId'
        ]),
        async _initPrices() {
            /* Initialize CCXT library. */
            const ccxt = require ('ccxt')
            // console.log (ccxt.exchanges)

            /* Initialize coinmarketcap. */
            const exchange = new ccxt.coinmarketcap ()

            // console.log('EXCHANGE', exchange)

            const ethUsd = await exchange.fetch_ticker('ETH/USD')
            // console.log (exchange.id, ethUsd)

            /* Update ETH spot price data. */
            this.ethUsd = ethUsd.last
            this.ethUsdChange = ethUsd.change

            const daiUsd = await exchange.fetch_ticker('DAI/USD')
            // console.log (exchange.id, daiUsd)

            /* Update DAI spot price data. */
            this.daiUsd = daiUsd.last
            this.daiUsdChange = daiUsd.change

            /* Update DAI spot price data. */
            this.zerogoldUsd = 0.023809523809524
            this.zerogoldUsdChange = 0.0
        },
        loadScreen(_screenId) {
            this.updateIdentityScreenId(_screenId)
        }
    },
    mounted: function () {
        /* Initialize (spot) prices. */
        this._initPrices()
    }
}
</script>

<style scoped>
.cache-boxes {
    background-color: rgba(255, 255, 255, 1.0);
    text-align: center;
    padding: 10px;
    cursor: pointer;
}

.ether-box {
    background-image: radial-gradient(
        circle at top right,
        rgba(100, 132, 167, 1.0),
        rgba(75, 66, 112, 1.0)
        /* #f06d06 */
    );
    border: 1pt solid rgba(11, 183, 255, 1.0);
    color: rgba(255, 255, 255, 1.0);
}
.dai-box {
    background-image: radial-gradient(
        circle at top right,
        rgba(26, 171, 154, 1.0),
        rgba(86, 105, 120, 1.0)
        /* #f06d06 */
    );
    border: 1pt solid rgba(28, 244, 221, 1.0);
    color: rgba(255, 255, 255, 1.0);
}
.zerogold-box {
    background-image: radial-gradient(
        circle at top right,
        rgba(239, 239, 31, 1.0),
        rgba(225, 173, 14, 1.0)
        /* #f06d06 */
    );
    border: 1pt solid rgba(255, 255, 0, 1.0);
    /* color: rgba(255, 255, 255, 1.0); */
    color: rgba(90, 90, 90, 1.0);
}

.price-boxes {
    text-align: center;

    /* background: rgba(30, 30, 30, 0.9); */
    /* padding: 2px 7px 2px 0; */
    /* border-bottom: 1px solid #9993; */
}
.price-boxes .small {
    margin-top: 2px;
    font-size: 0.6em;
    font-weight: bold;
    color: rgba(90, 90, 90, 0.5);
}
</style>
