<template>
    <div class="">
        <h4>Activity Summary</h4>

        <table class="table table-sm table-striped tx-11">
            <thead>
                <tr class="tx-14">
                    <th class="pd-y-5">Description</th>
                    <th class="pd-y-5">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-warning">
                    <td>
                        <div class="list-title ellipsis">Starbucks payment via BitPay</div>
                        <div class="list-txid ellipsis">TxId: <span>0x150dc910e2fcc014580d1a3264c0231158afcc29f97406285345cba1aa667690</span></div>
                        <div class="square-8 bg-success mg-r-5 rounded-circle"></div>
                        <span class="text-muted">Succeeded on <strong>2018.1.20</strong> at <strong>4:52pm</strong></span>
                    </td>
                    <td><div class="list-price">$1.34</div></td>
                </tr>
                <tr class="table-danger">
                    <td>
                        <div class="list-title ellipsis">Doctor's bill payment to Dr. Karmen F. Brown</div>
                        <div class="list-txid ellipsis">TxId: <span>0x150dc910e2fcc014580d1a3264c0231158afcc29f97406285345cba1aa667690</span></div>
                        <span class="square-8 bg-danger mg-r-5 rounded-circle"></span>
                        Failed on <strong>2018.1.18</strong> at <strong>11:28am</strong>
                    </td>
                    <td><div class="list-price">$52.23</div></td>
                </tr>
                <tr>
                    <td>
                        <div class="list-title ellipsis">Received paycheck via Bitwage</div>
                        <div class="list-txid ellipsis">TxId: <span>0x150dc910e2fcc014580d1a3264c0231158afcc29f97406285345cba1aa667690</span></div>
                        <div class="square-8 bg-success mg-r-5 rounded-circle"></div>
                        <span class="text-muted">Succeeded on <strong>2018.1.18</strong> at <strong>2:38am</strong></span>
                    </td>
                    <td><div class="list-price">$1,198.34</div></td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript://" class="tx-inverse tx-14 tx-medium d-block">Gorgonio Magalpok</a>
                        <span class="tx-11 d-block">TRANSID: 1234567890</span>
                        <span class="square-8 bg-success mg-r-5 rounded-circle"></span> Purchased success
                    </td>
                    <td>$4.40</td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript://" class="tx-inverse tx-14 tx-medium d-block">Ariel T. Hall</a>
                        <span class="tx-11 d-block">TRANSID: 1234567890</span>
                        <span class="square-8 bg-warning mg-r-5 rounded-circle"></span> Payment on hold
                    </td>
                    <td>$6.45</td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript://" class="tx-inverse tx-14 tx-medium d-block">John L. Goulette</a>
                        <span class="tx-11 d-block">TRANSID: 1234567890</span>
                        <span class="square-8 bg-pink mg-r-5 rounded-circle"></span> Account deactivated
                    </td>
                    <td>$10.30</td>
                </tr>
            </tbody>
        </table>
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
        //
    }),
    computed: mapGetters([
        'account'
    ]),
    methods: {
        ...mapActions([
            //
        ])
    },
    mounted: () => {
        //
    }
}
</script>

<style scoped>
.list-title {
    width: 200px;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1.2em;
    font-weight: bold;
}

.list-txid {
    width: 200px;
}
.list-txid span {
    color: rgba(90, 90, 210, 1.0);
    cursor: pointer;
    font-weight: bold;
}

.list-price {
    font-size: 1.4em;
    font-weight: bold;
}
</style>
