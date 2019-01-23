<template>
    <div id="identityStyle">
        <h1>0NET IDENTITY</h1>

        <nav class="nav">
            <a href="profile/" class="nav-link"><i class="icon ion-md-body"></i> My Profile</a>
            <a href="javascript://" class="nav-link"><i class="icon ion-md-options"></i> p0rtal Settings</a>
            <a href="javascript://" class="nav-link"><i class="icon ion-md-help-buoy"></i> Help &amp; Support</a>
            <a href="profile/signin.html" class="nav-link"><i class="icon ion-md-exit"></i> Sign Out</a>
        </nav>

        <p>
            Et iis quae culpa anim, si si quem deserunt. Litteris magna qui mandaremus
            imitarentur, aut dolor nostrud relinqueret, si anim consequat quo a mandaremus
            nam nostrud. Mandaremus non quem constias. Ne arbitror coniunctione.Sed quis
            elit ullamco graviterque. Et quid irure ea possumus.
        </p>

        <button class="btn btn-block btn-warning" @click="close">Close</button>
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
    border: 1pt solid #f33;
    padding-top: 20px;
}
</style>
