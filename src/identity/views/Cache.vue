<template>
    <div class="win-screen">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item"><a href="">₵a¢he</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Summary</li>
                </ol>

                <h6 class="slim-pagetitle">₵a¢he</h6>
            </div>

            <div class="row price-boxes">
                <div class="col pr-0">
                    <div class="cache-boxes ether-box card-drop-shadow">
                        <strong>Ethereum</strong>
                        <br />{{ethDisplay}}
                    </div>
                    <div class="small">HODLing</div>
                </div>
                <div class="col">
                    <div class="cache-boxes dai-box card-drop-shadow">
                        <strong>Dai</strong>
                        <br />{{daiDisplay}}
                    </div>
                    <div class="small">SPEDNing</div>
                </div>
                <div class="col pl-0">
                    <div class="cache-boxes zerogold-box card-drop-shadow">
                        <strong>ZeroGold</strong>
                        <br />{{zerogoldDisplay}}
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

            <button class="btn btn-lg btn-block btn-outline-success mt-3">Go to Marketplace</button>
            <button class="btn btn-lg btn-block btn-outline-warning mt-3">Go to Exchange</button>

            <div class="row mt-3">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                        </div>
                        <input type="text" class="form-control">
                        <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

/* Initialize components. */
const components = {
    //
}

/* Export. */
export default {
    components,
    data: () => ({
        ethSpotPrice: 123.45,
        daiSpotPrice: 1.00,
        zerogoldSpotPrice: 0.023809523809524
    }),
    computed: {
        ...mapGetters([
            'account'
        ]),
        accountAbbr() {
            /* Initialize full account (address). */
            const account = this.account

            /* Validate account. */
            if (account === 0) {
                return ''
            }

            /* Set abbreviation. */
            const abbr = `${account.slice(0, 10)} ... ${account.slice(-8)}`

            /* Return abbreviation. */
            return abbr
        },
        ethDisplay() {
            /* Require moment. */
            const numeral = require('numeral')

            return numeral(this.ethSpotPrice).format('$0,0.00')
        },
        daiDisplay() {
            /* Require moment. */
            const numeral = require('numeral')

            return numeral(this.daiSpotPrice).format('$0.00')
        },
        zerogoldDisplay() {
            /* Require moment. */
            const numeral = require('numeral')

            return numeral(this.zerogoldSpotPrice).format('$0.0000')
        }
    },
    methods: {
        //
    },
    mounted: () => {
        //
    }
}
</script>

<style scoped>
.cache-boxes {
    background-color: rgba(255, 255, 255, 1.0);
    text-align: center;
    padding: 10px;
}

.ether-box {
    background-color: rgba(31, 104, 239, 0.7);
    border: 1pt solid rgba(9, 13, 239, 1.0);
    color: rgba(255, 255, 255, 1.0);
}
.dai-box {
    background-color: rgba(9, 239, 67, 0.7);
    border: 1pt solid rgba(54, 150, 78, 1.0);
    color: rgba(255, 255, 255, 1.0);
}
.zerogold-box {
    background-color: rgba(239, 239, 31, 0.7);
    border: 1pt solid rgba(255, 255, 0, 1.0);
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

.balance-card {
    background-color: rgba(255, 255, 255, 1.0);
    font-size: 3.6em;
    text-align: center;
}
</style>
