<template>
    <div class="win-identity" role="toolbar" aria-label="Identity Menu">
        <!-- identity navigation bar -->
        <NavBar />

        <div class="win-scrollable-outer">
            <div class="win-scrollable-inner">
                <Welcome v-show="identityScreenId === ''" />
                <Auth v-show="identityScreenId === 'auth'" />

                <!-- Cache screens -->
                <Cache v-show="identityScreenId === 'cache'" />
                <CacheWETH v-show="identityScreenId === 'cache-WETH'" />
                <CacheDAI v-show="identityScreenId === 'cache-DAI'" />
                <Cache0GOLD v-show="identityScreenId === 'cache-0GOLD'" />
                <Cache0xBTC v-show="identityScreenId === 'cache-0xBTC'" />

                <Profile v-show="identityScreenId === 'profile'" />
                <Settings v-show="identityScreenId === 'settings'" />
            </div>
        </div>
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

/* Import components. */
import NavBar from './components/NavBar.vue'

/* Import views. */
import Auth from './views/Auth.vue'
import Profile from './views/Profile.vue'
import Settings from './views/Settings.vue'
import Welcome from './views/Welcome.vue'

import Cache from './views/Cache.vue'
import CacheWETH from './views/Cache/WETH.vue'
import CacheDAI from './views/Cache/DAI.vue'
import Cache0GOLD from './views/Cache/_0GOLD.vue'
import Cache0xBTC from './views/Cache/_0xBTC.vue'

/* Initialize components. */
const components = {
    NavBar,
    Auth,
    Cache,
    CacheWETH,
    CacheDAI,
    Cache0GOLD,
    Cache0xBTC,
    Profile,
    Settings,
    Welcome
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
.win-toolbar {
    padding-right: 15px;
}

/* (right-hand inset) drop shadow */
.win-scrollable-outer {
    -moz-box-shadow:inset -0.5px 0.5px 3px 0 rgba(30,30,30,0.8);
    -webkit-box-shadow:inset -0.5px 0.5px 3px 0 rgba(30,30,30,0.8);
    box-shadow:inset -0.5px 0.5px 3px 0 rgba(30,30,30,0.8);
}
.win-scrollable-inner {
    /* content spacer */
    padding-bottom: 10px;
}
</style>
