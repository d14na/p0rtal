<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button class="btn btn-warning btn-block" @click="_openStage">Stage</button>
    <button class="btn btn-info btn-block" @click="_openIdentity">Identity</button>

    <p>
        Cillum o consequat an veniam, fugiat doctrina singulis, cupidatat est esse ut
        officia ipsum excepteur singulis. Ad eiusmod exquisitaque et iis quae cillum
        tempor litteris. De voluptate domesticarum sed nescius arbitrantur hic officia
        an senserit eu legam, ubi ipsum deserunt arbitrantur.Summis laboris aut
        relinqueret, eiusmod export si mandaremus fidelissimae, tempor admodum eu export
        sunt eu nulla aliquip qui exercitation qui est illum veniam id ingeniis et ut
        summis doctrina imitarentur, incurreret tractavissent a admodum a te culpa
        arbitror. Cernantur velit tempor consequat duis qui multos hic probant.
        Expetendis aut eiusmod. Eu eram efflorescere.Amet ita nam summis eiusmod ex
        multos proident do arbitror, summis officia constias ab cernantur quorum export
        hic fore. Do duis magna duis laboris ea a cillum ingeniis concursionibus.
        Probant ita malis, o ad minim admodum.Do te tamen ipsum tempor, esse se senserit
        iis elit eu si magna nescius, ex esse illum quo senserit. Summis sed non anim
        appellat non constias fore quamquam probant. Nisi probant coniunctione non nam
        culpa mentitum tractavissent ut aliquip irure vidisse cernantur id in hic
        cohaerescant. Malis do pariatur ab quae.
    </p>
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
            _0vueIdentity.activate()
        },
        _openStage() {
            _0vueStage.activate()
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
