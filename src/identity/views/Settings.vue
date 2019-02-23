<template>
    <div class="win-screen">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <!--  -->
                </ol>

                <h6 class="slim-pagetitle">Settings</h6>
            </div>

            <div class="card-contact mg-b-20">
                <h5 class="text-center text-info">Basic Settings</h5>

                <p class="contact-item click-item">
                    <span><font-awesome-icon icon="bell" class="text-info mr-1" fixed-width />Notifications</span>
                    <font-awesome-icon icon="chevron-right" />
                </p>

                <p class="contact-item">
                    <span><font-awesome-icon icon="moon" class="text-info mr-1" fixed-width />Dark Mode</span>
                    <toggle-button
                        :labels="true"
                        v-model="isDark"
                        @change="onDarkHandler"
                    />
                </p>

                <h5 class="text-center mg-t-20 text-info">Advanced Settings</h5>

                <p class="contact-item">
                    <span><font-awesome-icon icon="network-wired" class="text-info mr-1" fixed-width />Blockchain Network</span>
                    <toggle-button
                        :labels="{ checked: 'Mainnet', unchecked: 'Ropsten' }"
                        width="75"
                        v-model="isProduction"
                        @change="onProductionHandler"
                    />
                </p>

                <h5 class="text-center mg-t-20 text-info">Additional Resources</h5>

                <p class="contact-item click-item" @click="faq">
                    <span><font-awesome-icon icon="info-circle" class="text-info mr-1" fixed-width />FAQ</span>
                    <font-awesome-icon icon="external-link-alt" />
                </p>

                <p class="contact-item click-item">
                    <span><font-awesome-icon icon="user-edit" class="text-info mr-1" fixed-width />Send Feedback</span>
                    <font-awesome-icon icon="chevron-right" />
                </p>

                <p class="contact-item click-item">
                    <span><font-awesome-icon icon="user-secret" class="text-info mr-1" fixed-width />Privacy</span>
                    <font-awesome-icon icon="chevron-right" />
                </p>

                <p class="contact-item click-item">
                    <span><font-awesome-icon icon="file-signature" class="text-info mr-1" fixed-width />Terms</span>
                    <font-awesome-icon icon="chevron-right" />
                </p>

                <p class="contact-item click-item">
                    <span><font-awesome-icon icon="file-contract" class="text-info mr-1" fixed-width />Licenses</span>
                    <font-awesome-icon icon="chevron-right" />
                </p>
            </div>
        </div>
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

export default {
    data: () => ({
        isDark: false,
        isProduction: false
    }),
    computed: mapGetters([
        'identityScreenId'
    ]),
    methods: {
        ...mapActions([
            'updateIdentityScreenId'
        ]),
        gotoSettings() {
            this.updateIdentityScreenId('')
        },
        onDarkHandler(_val) {
            console.log('toggle dark mode', _val)
        },
        onProductionHandler(_val) {
            console.log('toggle clicked', _val)
        },
        faq() {
            _0vueIdentity.deactivate()

            const name = 'faq'
            const params = { topic: 'welcome' }

            /* Load FAQ. */
            p0rtal.$router.push({ name, params })
        }
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>
.vue-js-switch {
    margin: 0;
}
</style>
