<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button class="btn btn-warning btn-block" @click="_openSoclii">Soclii</button>
    <button class="btn btn-info btn-block" @click="_openIdentity">Identity</button>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
    data: () => ({
        test: "this is just a test!!!!!!!!!"
    }),
    methods: {
        testThis() {
            // console.log('THIS', this);
            // console.log('VIDEO', this.$refs.video);
        },
        _openIdentity() {
            rightMenu.activate()
        },
        _openSoclii() {
            leftMenu.activate()
        }
    },
    mounted: () => {
        console.log('we are mounted!')

        console.log('THIS', this)



        // var video = document.getElementById('video');
        // console.log('VIDEO', this.$refs.video);
    }
}

$(function () {
    // return
    console.log('hi!');

})
</script>
