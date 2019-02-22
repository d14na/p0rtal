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
                <h5 class="text-center">Basic Settings</h5>

                <p class="contact-item">
                    <span><font-awesome-icon icon="bell" class="text-info mr-1" /> Notifications</span>
                    <font-awesome-icon icon="chevron-right" />
                </p>

                <h5 class="text-center mg-t-20">Advanced Settings</h5>

                <p class="contact-item">
                    <span><font-awesome-icon icon="network-wired" class="text-info mr-1" /> Blockchain Network</span>

                    <toggle-button
                        :labels="{ checked: 'Mainnet', unchecked: 'Ropsten' }"
                        width="75"
                        v-model="isProduction"
                        @change="onProductionHandler"
                    />
                </p>

                <h5 class="text-center mg-t-20">Additional Resources</h5>

                <p class="contact-item">
                    <span><font-awesome-icon icon="info-circle" class="text-info mr-1" /> FAQ</span>
                    <font-awesome-icon icon="chevron-right" />
                </p>

                <p class="contact-item">
                    <span><font-awesome-icon icon="comment-alt" class="text-info mr-1" /> Send Feedback</span>
                    <font-awesome-icon icon="chevron-right" />
                </p>

                <p class="contact-item">
                    <span><font-awesome-icon icon="user-secret" class="text-info mr-1" /> Privacy</span>
                    <font-awesome-icon icon="chevron-right" />
                </p>

                <p class="contact-item">
                    <span><font-awesome-icon icon="file-signature" class="text-info mr-1" /> Terms</span>
                    <font-awesome-icon icon="chevron-right" />
                </p>

                <p class="contact-item">
                    <span><font-awesome-icon icon="file-contract" class="text-info mr-1" /> Licenses</span>
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
        onProductionHandler(_val) {
            console.log('toggle clicked', _val)
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
