<template>
    <div class="sponsor-bar" @click="loadSponsor">
        <!-- <font-awesome-icon :icon="['fab', 'bitcoin']" />ecome a Sponsor -->
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

/* Initialize components. */
const components = {
}

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
            'updateStageScreenId'
        ]),
        close() {
            _0vueStage.deactivate()
        },
        loadSponsor() {
            this.updateStageScreenId('sponsor')
        }
    },
    mounted: () => {
        //
    }
}
</script>

<style scoped>
.sponsor-bar {
    position: absolute;
    bottom: 0;
    width: 320px;
    /* width: 296px; */
    height: 50px;
    margin: 0 2px 2px 2px;
    background-color: rgba(90, 90, 190, 1.0);
    border-top: 1px solid rgba(30, 30, 190, 0.7);

    color: rgba(255, 255, 255, 1.0);
    font-size: 1.6em;
    text-align: center;
    vertical-align: middle;
    line-height: 50px;

    cursor: pointer;

    /* show banner image ad */
    background-image: url('https://ipfs.infura.io/ipfs/QmcKHMwYRJzN62Ww9tRGQxAfzaaRnYZU8y6451csDfZ7gu');
    /* background-image: url('https://cloudflare-ipfs.com/ipfs/QmcKHMwYRJzN62Ww9tRGQxAfzaaRnYZU8y6451csDfZ7gu'); */
}
</style>
