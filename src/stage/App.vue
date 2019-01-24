<template>
    <div class="win-stage" role="toolbar" aria-label="Stage Menu">
        <!-- identity navigation bar -->
        <NavBar />

        <div class="win-scrollable-outer">
            <div class="win-scrollable-inner">
                <Welcome v-if="stageScreenId === ''" />
                <Chans v-if="stageScreenId === 'chans'" />
                <Help v-if="stageScreenId === 'help'" />
            </div>
        </div>
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

/* Import NAVBAR. */
import NavBar from './components/NavBar.vue'

/* Import WELCOME. */
import Welcome from './views/Welcome.vue'

/* Import CHANS. */
import Chans from './views/Chans.vue'

/* Import HELP. */
import Help from './views/Help.vue'

/* Initialize components. */
const components = {
    NavBar,
    Welcome,
    Chans,
    Help
}

/* Export. */
export default {
    components,
    data: () => ({
        //
    }),
    computed: mapGetters([
        'stageScreenId'
    ]),
    methods: {
        //
    },
    mounted: () => {
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

.win-stage {
    height: 100%;
    border-right: 1px solid #9993;
}
.win-toolbar {
    padding-left: 15px;
}

/* (left-hand inset) drop shadow */
.win-scrollable-outer {
    -moz-box-shadow:inset 0.5px 0.5px 3px 0 rgba(30,30,30,0.8);
    -webkit-box-shadow:inset 0.5px 0.5px 3px 0 rgba(30,30,30,0.8);
    box-shadow:inset 0.5px 0.5px 3px 0 rgba(30,30,30,0.8);
}
</style>
