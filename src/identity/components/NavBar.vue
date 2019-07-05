<template>
    <div class="win-toolbar d-flex justify-content-between">
        <!-- close window -->
        <button type="button" class="btn btn-win-close btn-link" @click="close">
            <font-awesome-icon icon="arrow-left" class="btn-win-close" />
        </button>

        <!-- identity navigation bar -->
        <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-toolbar btn-link" @click="gotoProfile">
                <font-awesome-icon :icon="['far', 'id-card']" />
            </button>

            <button type="button" class="btn btn-toolbar btn-link" @click="gotoCache">
                <!-- <font-awesome-icon icon="wallet" /> -->
                <font-awesome-icon icon="money-check-alt" />
            </button>

            <button type="button" class="btn btn-toolbar btn-link" @click="gotoSettings">
                <font-awesome-icon icon="sliders-h" />
            </button>
        </div>
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
        'account',
        'identityScreenId'
    ]),
    methods: {
        ...mapActions([
            'updateIdentityScreenId'
        ]),
        close() {
            _0vueIdentity.deactivate()
        },
        gotoProfile() {
            /* Validate authorization. */
            if (this.account === {}) {
                /* Set screen id. */
                this.updateIdentityScreenId('auth')
            } else {
                /* Set screen id. */
                this.updateIdentityScreenId('profile')
            }
        },
        gotoCache() {
            /* Validate authorization. */
            if (this.account === {}) {
                /* Set screen id. */
                this.updateIdentityScreenId('auth')
            } else {
                /* Set screen id. */
                this.updateIdentityScreenId('cache')
            }
        },
        gotoSettings() {
            /* Set screen id. */
            this.updateIdentityScreenId('settings')
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
