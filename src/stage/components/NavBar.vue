<template>
    <div class="win-toolbar d-flex justify-content-between">
        <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-toolbar btn-link" @click="gotoHelp">
                <font-awesome-icon icon="headset" />
            </button>

            <button type="button" class="btn btn-toolbar btn-link" @click="gotoChans">
                <font-awesome-icon icon="satellite-dish" />
            </button>
        </div>

        <!-- close window -->
        <button type="button" class="btn btn-win-close btn-link" @click="close">
            <font-awesome-icon icon="arrow-right" class="btn-win-close" />
        </button>
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

/* Import WELCOME. */
// import Welcome from './views/Welcome.vue'

/* Import SETTINGS. */
// import Settings from './views/Settings.vue'

/* Initialize components. */
const components = {
    // Welcome,
    // Settings
}

export default {
    components,
    data: () => ({
        // screenId: ''
    }),
    computed: mapGetters([
        'stageScreenId'
    ]),
    methods: {
        ...mapActions([
            'updateStageScreenId'
        ]),
        close() {
            _0vueStage.deactivate()
        },
        gotoHelp() {
            /* Set screen id. */
            this.updateStageScreenId('help')
        },
        gotoChans() {
            /* Set screen id. */
            this.updateStageScreenId('chans')
        }
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>
.header h1 {
    font-size: 4.8em;
}
.header h3 {
    font-size: 2.6em;
}
.notice {
    font-size: 2.6em;
    color: rgb(180, 60, 60);
}

.win-identity {
    height: 100%;
    border-left: 1px solid #9993;
}
</style>
