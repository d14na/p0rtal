<template>
    <div class="card card-body pd-20 mg-t-10">
        <h6 class="slim-card-title mg-b-20 text-center">Who's Got ZeroLIT? <small class="text-muted">last 24hrs</small></h6>

        <div class="mg-b-25">
            <span class="peity-donut" data-peity='{ "fill": ["#da3749","#2586e4","#e6428c","#6f47be","#f2982e","#acacac"], "height": 200, "width": "100%" }'>92,57,33,15,6,46</span>
        </div>

        <div class="d-flex align-items-center">
            <span class="square-10 bg-danger rounded-circle"></span>
            <span class="mg-l-10"><span class="flag-icon flag-icon-cn tx-16 mg-r-5"></span> China</span>
            <span class="mg-l-auto tx-lato tx-right">9,212 peers</span>
        </div>

        <div class="d-flex align-items-center mg-t-5">
            <span class="square-10 bg-primary rounded-circle"></span>
            <span class="mg-l-10"><span class="flag-icon flag-icon-us tx-16 mg-r-5"></span> USA</span>
            <span class="mg-l-auto tx-lato tx-right">5,768 peers</span>
        </div>

        <div class="d-flex align-items-center mg-t-5">
            <span class="square-10 bg-pink rounded-circle"></span>
            <span class="mg-l-10"><span class="flag-icon flag-icon-ru tx-16 mg-r-5"></span> Russia</span>
            <span class="mg-l-auto tx-lato tx-right">3,355 peers</span>
        </div>

        <div class="d-flex align-items-center mg-t-5">
            <span class="square-10 bg-indigo rounded-circle"></span>
            <span class="mg-l-10"><span class="flag-icon flag-icon-au tx-16 mg-r-5"></span> Australia</span>
            <span class="mg-l-auto tx-lato tx-right">1,574 peers</span>
        </div>

        <div class="d-flex align-items-center mg-t-5">
            <span class="square-10 bg-warning rounded-circle"></span>
            <span class="mg-l-10"><span class="flag-icon flag-icon-de tx-16 mg-r-5"></span> Germany</span>
            <span class="mg-l-auto tx-lato tx-right">550 peers</span>
        </div>

        <div class="d-flex align-items-center mg-t-5">
            <span class="square-10 bg-gray-500 rounded-circle"></span>
            <span class="mg-l-10">Other Areas</span>
            <span class="mg-l-auto tx-lato tx-right">4,684 peers</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZeroLit',
    // props: {
    //     msg: String
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
