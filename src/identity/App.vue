<template>
    <div class="identityWin">
        <div class="d-flex justify-content-between">
            <!-- close window -->
            <font-awesome-icon icon="times" class="btnWinClose" @click="close" />

            <div class="btn-toolbar" role="toolbar" aria-label="Identity Menu">
                <button type="button" class="btn btn-lg btn-outline-info" @click="loadProfile">
                    <font-awesome-icon icon="user" />
                </button>

                <button type="button" class="btn btn-lg btn-outline-info" @click="loadCache">
                    <font-awesome-icon icon="money-check-alt" />
                </button>

                <div class="btn-group" role="group">
                    <button id="btnGroupNetwork" type="button" class="btn btn-lg btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <font-awesome-icon icon="sliders-h" />
                    </button>

                    <div class="dropdown-menu" aria-labelledby="btnGroupNetwork">
                        <a class="dropdown-item" href="javascript://" @click="loadSettings">
                            <font-awesome-icon icon="sliders-h" /> Settings
                        </a>
                        <a class="dropdown-item" href="javascript://" @click="loadMainnet">
                            <font-awesome-icon icon="network-wired" /> Mainnet
                        </a>
                        <a class="dropdown-item" href="javascript://" @click="loadRopsten">
                            <font-awesome-icon icon="network-wired" /> Testnet Ropsten
                        </a>
                    </div>
                </div>

                <button type="button" class="btn btn-lg btn-outline-info" @click="loadHelp">
                    <font-awesome-icon icon="headset" />
                </button>
            </div>
        </div>

        <div class="container">
            <div class="row header">
                <div class="col text-center">
                    <h1>zer0net</h1>
                    <h3>My Identity</h3>
                </div>
            </div>

            <div class="row">
                <div class="col notice text-center">
                    coming soon
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* Import HEADER. */
import Welcome from './views/Welcome.vue'

// import sliiide from '@/lib/sliiide'

/* Initialize components. */
const components = {
    Welcome
}

export default {
    components,
    data: () => ({
        screenId: ''
    }),
    methods: {
        close() {
            _0vueIdentity.deactivate()
        },
        loadProfile() {
            console.log('load profile')
        },
        loadCache() {
            console.log('load cache')
        },
        loadSettings() {
            console.log('load settings')
        },
        loadHelp() {
            console.log('load help')
        },
        loadMainnet() {
            console.log('load Mainenet')
        },
        loadRopsten() {
            console.log('load Ropsten')
        }
    },
    mounted: () => {
        console.log('Identity is mounted!')
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

.identityWin {
    height: 100%;
    border-left: 1px solid #9993;
    /* border: 1pt solid #f33; */
    /* padding-top: 20px; */
}

/* .identityNav {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 0.7em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    border-bottom: 1px solid #9993;
} */
</style>
