<template>
    <div>
        <!-- This is a permanent header bar. -->
        <Header />

        <div id="tempNav">
            FOR DEVELOPMENT PURPOSES ONLY
            <div id="nav">
                <router-link to="/home">Home</router-link> |
                <a href="javascript://" @click="loadCache">Ca¢he</a> |
                <router-link to="/about">About</router-link>
            </div>
        </div>

        <!-- This is the MAIN (dynamic) view area. -->
        <router-view/>
    </div>
</template>

<script>
/* Import JQuery. */
import $ from 'jquery'

/* Import HEADER. */
import Header from '@/components/Header.vue'

// import sliiide from '@/lib/sliiide'

/* Initialize components. */
const components = {
    Header
}

/* Export. */
export default {
    components,
    data: () => ({
        //
    }),
    methods: {
        loadCache() {
            console.log('Start loading cache...')
        }
    },
    mounted: () => {
        console.log('App.vue is mounted.')
    }
}

/* JQuery is ready! Let's go! */
$(function () {
    // return
    // console.log('load sliiide!');

    /* Initialize ZeroVue STAGE window. */
    // const _0vueStage = $('#_0vueStage').sliiide({ place: 'left' })

    /* Initialize ZeroVue IDENTITY window. */
    // const _0vueIdentity = $('#_0vueIdentity').sliiide({ place: 'right' })

    /* Initialize ZeroVue SNACKBAR view. */
    // const _0vueSnackbar = $('#_0vueSnackbar').sliiide({ place: 'bottom' })

    /* Initialize ZeroVue MEDIA PLAYER view. */
    // const _0vueMediaPlayer = $('#_0vueMediaPlayer').sliiide({ place: 'top' })
})
</script>

<style>
#tempNav {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 0.7em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 2px 0 5px;
    border-bottom: 1px solid #f333;
}
</style>
