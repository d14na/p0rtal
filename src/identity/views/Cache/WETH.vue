<template>
    <div class="win-screen">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="javascript://" @click="gotoCache">back to ₵a¢he</a>
                    </li>
                </ol>

                <h6 class="slim-pagetitle">Wrapped Ether</h6>
            </div>

            <button class="btn btn-lg btn-block btn-outline-info mt-3" @click="buy">Buy Crypto</button>

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

            <button class="btn btn-lg btn-block btn-warning mt-3" @click="send">Send WETH</button>

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
        txAmount: 0
    }),
    computed: mapGetters([
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
        buy() {
            console.log('buy some crypto')
        }
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>

</style>
