<template>
    <div class="win-screen">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="javascript://" @click="gotoCache">back to ₵a¢he</a>
                    </li>
                </ol>

                <h6 class="slim-pagetitle">Tokens</h6>
            </div>

            <h5>coming soon...</h5>
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
        //
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
        }
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>

</style>
