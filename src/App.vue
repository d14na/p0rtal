<template>
    <div id="appStyle">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <div id="nav2">
            <a @click="open0vueStage">Stage</a> |
            <a @click="open0vueIdentity">Identity</a> |
            <a @click="openMediaPlayer">Media</a> |
            <a @click="openSnackbar">Snackbar</a>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    data: () => ({
        test: "this is just a test!!!!!!!!!"
    }),
    methods: {
        open0vueIdentity() {
            _0vueIdentity.activate()
        },
        open0vueStage() {
            _0vueStage.activate()
        },
        openMediaPlayer() {
            topMenu.activate()
        },
        openSnackbar() {
            bottomMenu.activate()
        }
    },
    mounted: () => {
        console.log('we are mounted!')

        console.log('THIS', this)
    }
}
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
