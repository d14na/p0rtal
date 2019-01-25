<template>
    <div class="win-screen">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item"><a href="">Cache</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Summary</li>
                </ol>

                <h6 class="slim-pagetitle">Cache</h6>
            </div>

            <!-- abbreviated account address -->
            <h2 class="text-info text-center">
                <span class="badge badge-info">
                    {{accountAbbr}}
                </span>
            </h2>

            <p>
                Balance: 0 <span class="slashed-zero">0</span>GOLD
            </p>

            <div class="row">
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
        //
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

</style>
