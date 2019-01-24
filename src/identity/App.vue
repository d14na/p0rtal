<template>
    <div class="win-identity" role="toolbar" aria-label="Identity Menu">
        <!-- identity navigation bar -->
        <NavBar />

        <div class="win-scrollable">
            <Welcome v-if="identityScreenId === ''" />
            <Profile v-if="identityScreenId === 'profile'" />
            <Cache v-if="identityScreenId === 'cache'" />
            <Settings v-if="identityScreenId === 'settings'" />
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

/* Import PROFILE. */
import Profile from './views/Profile.vue'

/* Import CACHE. */
import Cache from './views/Cache.vue'

/* Import SETTINGS. */
import Settings from './views/Settings.vue'

/* Initialize components. */
const components = {
    NavBar,
    Welcome,
    Profile,
    Cache,
    Settings
}

/* Export. */
export default {
    components,
    data: () => ({
        //
    }),
    computed: mapGetters([
        'identityScreenId'
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

.win-identity {
    height: 100%;
    border-left: 1px solid #9993;
}
.win-toolbar {
    padding-right: 15px;
}
.win-scrollable {
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: 75px;
    overflow: auto;
}
</style>
