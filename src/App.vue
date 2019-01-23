<template>
    <div id="appStyle">
        <h3>{{ $t('helloWithNickname', { nickname: this.nickname }) }}</h3>
        <div id="nav">
            <router-link to="/">Vue</router-link> |
            <router-link to="/home">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <div id="nav2">
            <a @click="open0vueStage">Stage</a> |
            <a @click="open0vueIdentity">Identity</a> |
            <a @click="open0vueMediaPlayer">Media</a> |
            <a @click="open0vueSnackbar">Snackbar</a>
        </div>
        <router-view/>
    </div>
</template>

<script>
import $ from 'jquery'
// import sliiide from '@/lib/sliiide'

export default {
    data: () => ({
        nickname: 'Satoshi'
    }),
    methods: {
        open0vueIdentity() {
            _0vueIdentity.activate()
        },
        open0vueStage() {
            _0vueStage.activate()
        },
        open0vueMediaPlayer() {
            _0vueMediaPlayer.activate()
        },
        open0vueSnackbar() {
            _0vueSnackbar.activate()
        }
    },
    mounted: () => {
        console.log('we are mounted!')

        console.log('THIS', this)
    }
}

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
#appStyle {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
