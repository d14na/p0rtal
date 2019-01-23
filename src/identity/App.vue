<template>
    <div class="identityWin">
        <div class="d-flex justify-content-between">
            <div class="btn-toolbar" role="toolbar" aria-label="Identity Menu">
                <button type="button" class="btn btn-lg btn-outline-info" @click="loadProfile">
                    <font-awesome-icon icon="user" />
                </button>
                <button type="button" class="btn btn-lg btn-outline-info" @click="loadSettings">
                    <font-awesome-icon icon="sliders-h" />
                </button>

                <div class="btn-group" role="group">
                    <button id="btnGroupNetwork" type="button" class="btn btn-lg btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <font-awesome-icon icon="network-wired" />
                    </button>

                    <div class="dropdown-menu" aria-labelledby="btnGroupNetwork">
                        <a class="dropdown-item" href="javascript://" @click="loadMainnet">Mainnet</a>
                        <a class="dropdown-item" href="javascript://" @click="loadRopsten">Testnet Ropsten</a>
                    </div>
                </div>
            </div>

            <div class="btn-toolbar" role="toolbar" aria-label="Identity Menu">
                <button type="button" class="btn btn-lg btn-outline-info" @click="loadHelp">
                    <font-awesome-icon icon="headset" />
                </button>
                <button type="button" class="btn btn-lg btn-outline-info" @click="signout">
                    <font-awesome-icon icon="sign-out-alt" />
                </button>
            </div>
        </div>

        <!-- <div class="identityNav">
            <div class="row">
                <div class="col">
                    <button class="btn btn-sm btn-block"><font-awesome-icon icon="user" /> My Profile</button>
                </div>
                <div class="col">
                    <button class="btn btn-sm btn-block" @click="loadProfile"><font-awesome-icon icon="sliders-h" /> p0rtal Settings</button>
                </div>
                <div class="col">
                    <button class="btn btn-sm btn-block" @click="loadProfile"><font-awesome-icon icon="headset" /> Help &amp; Support</button>
                </div>
                <div class="col">
                    <button class="btn btn-sm btn-block" @click="loadProfile"><font-awesome-icon icon="sign-out-alt" /> Sign Out</button>
                </div>
            </div>
        </div> -->

        <h1>0NET IDENTITY</h1>

        <Welcome />

        <button class="btn btn-block btn-warning" @click="close">Close</button>
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
        loadSettings() {
            console.log('load settings')
        },
        loadHelp() {
            console.log('load help')
        },
        signout() {
            console.log('signout')
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

<style>
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
