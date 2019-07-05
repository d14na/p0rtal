<template>
    <div>
        <!-- This is a permanent header bar. -->
        <Header />

        <!-- This is the MAIN (dynamic) view area. -->
        <router-view />
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

import request from 'superagent'

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
        ...mapActions([
            'updateAnameZeroCache'
        ]),
        async init () {
            /* Set data id. */
            // NOTE: keccak256(`aname.zerodelta`)
            const dataId = '0xbd7239f4aaac15ef5b656f04994d54293ff22d4aac85bedfcb4b68e502db0497'

            /* Initialize endpoint. */
            let endpoint = null

            /* Select (http) provider. */
            if (process.env.NODE_ENV === 'production') {
                endpoint = `https://db.0net.io/v1/getAddress/${dataId}`
            } else {
                endpoint = `https://db-ropsten.0net.io/v1/getAddress/${dataId}`
            }

            // console.log('ENDPOINT', endpoint)

            /* Make API request. */
            const response = await request
                .get(endpoint)
                .set('accept', 'json')
                .catch(_error => {
                    console.error('REQUEST ERROR:', _error)
                })

            // console.log('ZeroDelta ANAME RESPONSE:', response)

            /* Validate response. */
            if (response && response.body)  {
                console.log('ZeroDelta ANAME:', response.body)

                /* Update ANAME ZeroCache address. */
                this.updateAnameZeroCache(response.body)
            }
        }
    },
    mounted: function () {
        console.log('App.vue is mounted.')

        /* Run initialization. */
        this.init()
    }
}

/* JQuery is ready! Let's go! */
$(async function () {
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
    width: 324px;
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

/* click items */
.click-item {
    cursor: pointer;
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

/* balance display card */
.balance-card {
    background-color: rgba(255, 255, 255, 1.0);
    font-size: 3.6em;
    text-align: center;
}

/* drop-shadow for standard card */
.card-drop-shadow {
    -moz-box-shadow: 0.5px 0.5px 3px 0px rgba(90, 90, 90, 0.5);
    -webkit-box-shadow: 0.5px 0.5px 3px 0px rgba(90, 90, 90, 0.5);
    box-shadow: 0.5px 0.5px 3px 0px rgba(90, 90, 90, 0.5);
}
</style>
