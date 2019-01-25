<template>
    <div>
        <!-- This is a permanent header bar. -->
        <Header />

        <!-- This is the MAIN (dynamic) view area. -->
        <router-view />
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
/* disable all scrollbars */
::-webkit-scrollbar {
    display: none;
}

/* add support for slashed zero */
.slashed-zero {
    font-family: Monaco, Consolas, "Lucida Console", monospace;
}

/* right and left sliding drawers */
.btn-win-close {
    font-size: 2.4em;
    color: rgba(120, 90, 90, 0.4);
    margin: 5px 5px 0 5px;
    padding: 0;
}
.btn-win-close {
    margin: 0 7px;
    padding: 0;
}

/* window toolbar */
.win-toolbar {
    height: 75px;
    background-color: rgba(255, 255, 255, 1.0);
    border-bottom: 1px solid #9993;
}
.win-toolbar .btn-toolbar {
    font-size: 2.0em;
}

/* window screen */
.win-screen {
    /* FIXME Remove hard-coded value. */
    width: 300px;
}
.win-scrollable-outer {
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: 75px;
    padding: 1px 0 2px;
}
.win-scrollable-inner {
    height: 100%;
    overflow: auto;
}
/* disable this window's scrollbar */
/* .win-scrollable-inner::-webkit-scrollbar {
    display: none;
} */

/* ellipsis */
.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

/* padding for shadow on lists */
.shadow-list-right {
    padding-right: 2px;
}
.shadow-list-left {
    padding-left: 2px;
}

</style>
