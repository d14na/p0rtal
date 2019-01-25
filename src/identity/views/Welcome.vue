<template>
    <div class="win-screen">
        <div class="container">
            <div class="row header">
                <div class="col text-center">
                    <h1>zer<span class="slashed-zero">0</span>net</h1>
                    <h3>Welcome</h3>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <p>
                        Let's get started by introducing you to your new DIGITAL identity.
                        If you don't already have a private key, then let's take a moment to get you setup.
                        If you already have a private key, then click SKIP to continue to Client Authentication.
                    </p>
                </div>
            </div>

            <button class="btn btn-block btn-lg btn-outline-info" @click="learnMore">Learn More</button>
            <button class="btn btn-block btn-lg btn-info" @click="signin">Sign In</button>
        </div>
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

/* Initialize components. */
const components = {
    //
}

/* Export. */
export default {
    components,
    data: () => ({
        //
    }),
    methods: {
        ...mapActions([
            'updateIdentityScreenId'
        ]),
        signin() {
            this.updateIdentityScreenId('auth')
        },
        learnMore() {
            console.log('learn more')
        }
    },
    mounted: () => {
        //
    }
}
</script>

<style scoped>

</style>
