<template>
    <div id="stage">
        <h1>0NET STAGE</h1>
        <button class="btn btn-block btn-warning" @click="close">Close</button>
        <a href="http://yahoo.com" target="_blank">close me too</a>
    </div>
</template>

<script>
export default {
    data: () => ({
        test: "this is just a test!!!!!!!!!"
    }),
    methods: {
        close() {
            _0vueStage.deactivate()
        }
    },
    mounted: () => {
        console.log('Stage is mounted!')
    }
}
</script>

<style>
#stage {
    padding: 50px;
}
</style>
