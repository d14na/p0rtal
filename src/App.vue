<template>
    <div>
        <!-- This is a permanent header bar. -->
        <Header />

        <!-- This is the MAIN (dynamic) view area. -->
        <router-view/>
    </div>
</template>

<script>
/* Import JQuery. */
import $ from 'jquery'

/* Import HEADER. */
import Header from './components/Header.vue'

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
        // loadCache() {
        //     console.log('Start loading cache...')
        // }
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
/* add support for slashed zero */
.slashed-zero {
    font-family: Monaco, Consolas, "Lucida Console", monospace;
}

/* right and left sliding drawers */
.btn-win-close {
    font-size: 2.8em;
    color: rgba(150, 90, 90, 0.4);
    margin: 5px 15px 0 15px;
    padding: 0;
}

/* vertical divider */
.v-divider:after {
    content: ' | ';
    color: rgba(90, 90, 90, 0.5);
}

/* vertical divider (dark) */
.v-divider-dark:after {
    content: ' | ';
    color: rgba(90, 210, 210, 0.9);
}
</style>
