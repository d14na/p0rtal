<template>
    <div class="card">
        <div class="card-body">
            <h6 class="slim-card-title mg-b-20 text-center">Trending Stories <small class="text-muted">last 24hrs</small></h6>

            <label class="mg-b-5">24,224 sales</label>
            <div class="progress mg-b-15">
                <div class="progress-bar bg-warning progress-bar-xs wd-50p" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <label class="mg-b-5">43,765 sales</label>
            <div class="progress mg-b-15">
                <div class="progress-bar bg-primary progress-bar-xs wd-70p" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <label class="mg-b-5">14,220 sales</label>
            <div class="progress mg-b-15">
                <div class="progress-bar bg-danger progress-bar-xs wd-30p" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <label class="mg-b-5">20,220 sales</label>
            <div class="progress mg-b-15">
                <div class="progress-bar bg-success progress-bar-xs wd-85p" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrendingStories',
    // props: {
    //     msg: String
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
