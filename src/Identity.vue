<template>
    <div id="identityStyle">
        <h1>0NET IDENTITY</h1>

        <p>
            Et iis quae culpa anim, si si quem deserunt. Litteris magna qui mandaremus
            imitarentur, aut dolor nostrud relinqueret, si anim consequat quo a mandaremus
            nam nostrud. Mandaremus non quem constias. Ne arbitror coniunctione.Sed quis
            elit ullamco graviterque. Et quid irure ea possumus.
        </p>

        <button class="btn btn-block btn-warning" @click="close">Close</button>

        <div style="height: 100px; overflow: scroll;">
            Enim ullamco fidelissimae, an arbitror cohaerescant, se quae id quis, id dolore
            sempiternum, aute iis proident, te multos noster anim possumus, ita hic eram
            anim dolor, qui ab instituendarum. In irure amet a proident id de malis illum
            veniam nostrud quo officia fidelissimae et senserit eu hic an malis consequat.
            Illum reprehenderit probant magna eiusmod.Aut nulla domesticarum, dolor deserunt
            fabulas, commodo fugiat cernantur nostrud de nostrud qui iudicem ubi sunt ubi ne
            enim singulis est a iudicem ubi nescius, te aliqua probant praetermissum id non
            an nisi dolore quae. O qui nisi offendit. Irure hic fabulas non aute, summis
            incididunt ut sempiternum, est illum incididunt, te dolor dolore multos
            singulis, litteris malis quis a cillum hic de culpa illustriora, et tamen nam
            duis qui a in tempor amet export.Aute aut aliquip ita incurreret multos labore
            appellat fore. Expetendis transferrem nam commodo. Sint do mentitum ut dolor,
            quid litteris aut instituendarum qui in irure anim o voluptate, ab ipsum vidisse
            admodum, ab vidisse praetermissum et offendit duis eiusmod, tamen ex doctrina se
            summis ne est labore fugiat irure eiusmod.Laboris malis aute eu velit de labore
            eu probant si quid appellat reprehenderit do ullamco ea quem, aut nisi laborum
            instituendarum est excepteur se nulla, doctrina est fore cupidatat iis duis eu
            ne esse pariatur. Nam sed labore probant de tamen eiusmod ad esse aute, laborum
            ad veniam voluptate, ubi si arbitrantur ne se multos nam nulla, nisi officia ut
            veniam fugiat, enim ad nescius, qui nostrud instituendarum. Ex legam esse enim
            mentitum, eram quibusdam ita legam anim te aut do quid legam quis si aute qui
            possumus, ab ubi minim mandaremus, mentitum minim tempor arbitror irure ea sunt
            voluptate e probant ne probant philosophari an incididunt. Iudicem consectetur e
            voluptate, dolor efflorescere proident velit doctrina, deserunt dolor ullamco
            senserit eu amet constias non ullamco.
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        test: "this is just a test!!!!!!!!!"
    }),
    methods: {
        close() {
            _0vueIdentity.deactivate()
        }
    },
    mounted: () => {
        console.log('Identity is mounted!')
    }
}
</script>

<style>
#identityStyle {
    padding: 50px;
}
</style>
