<template>
    <div id="stage">
        <h1>zer0net</h1>
        <h3>stage</h3>

        <button class="btn btn-block btn-outline-warning" @click="close">Close</button>
    </div>
</template>

<script>
export default {
    data: () => ({
        //
    }),
    methods: {
        close() {
            _0vueStage.deactivate()
        }
    },
    mounted: () => {
        console.log('Stage is mounted.')
    }
}
</script>

<style>
#stage {
    padding: 20px;
}
</style>
