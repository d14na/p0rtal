<template>
    <div>
        <div class="slim-header">
            <div class="container">
                <a href="javascript://" class="header-notification" @click="open0vueStage">
                    <font-awesome-icon icon="users" />
                    <!-- <font-awesome-icon icon="server" /> -->
                    <!-- <font-awesome-icon icon="desktop" /> -->
                    <span class="indicator"></span>
                </a>

                <div class="slim-header-left">
                    <h2 class="slim-logo">
                        <router-link to="/">
                            p<span class="slashed-zero">0</span>rtal
                        </router-link>
                    </h2>

                    <div class="search-box">
                        <input type="text" class="form-control" placeholder="Your p2p request?">
                        <button class="btn btn-primary" @click="search">
                            <font-awesome-icon icon="search" />
                        </button>
                    </div>
                </div>

                <div class="slim-header-right">
                    <ActivityMonitor />

                    <a href="javascript://" class="logged-user" @click="open0vueIdentity">
                        <img src="@/assets/img/dark-hood-icon.jpg" alt="">
                        <span>Guest Peer</span>
                        <!-- <span class="indicator"></span> -->
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* Import ACTIVITY MONITOR. */
import ActivityMonitor from './header/ActivityMonitor.vue'

/* Initialize components. */
const components = {
    ActivityMonitor
}

export default {
    components,
    data: () => ({
        //
    }),
    methods: {
        open0vueIdentity() {
            _0vueIdentity.activate()
        },
        open0vueStage() {
            _0vueStage.activate()
        },
        search() {
            this.$router.push({ path: 'search', query: { q: 'trustless' } })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subMenu {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 0.7em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: right;
    background: rgba(30, 30, 30, 0.9);
    padding: 2px 7px 2px 0;
    border-bottom: 1px solid #9993;
}
.subMenu a {
    color: rgba(210, 210, 255, 0.9);
}
.subMenu a:hover {
    color: rgba(255, 150, 150, 0.9);
}
</style>
