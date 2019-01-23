<template>
    <div class="card card-activities pd-20 mg-t-10">
        <h6 class="slim-card-title">My ZeroLife Activities</h6>
        <p>Last activity was 1 hour ago</p>

        <div class="media-list">
            <div class="media">
                <div class="activity-icon bg-primary">
                    <i class="icon ion-stats-bars"></i>
                </div>

                <div class="media-body">
                    <h6>Report has been updated</h6>
                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor.</p>
                    <span>2 hours ago</span>
                </div>
            </div>

            <div class="media">
                <div class="activity-icon bg-success">
                    <i class="icon ion-trophy"></i>
                </div>

                <div class="media-body">
                    <h6>Achievement Unlocked</h6>
                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor.</p>
                    <span>2 hours ago</span>
                </div>
            </div>

            <div class="media">
                <div class="activity-icon bg-purple">
                    <i class="icon ion-image"></i>
                </div>

                <div class="media-body">
                    <h6>Added new images</h6>
                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor.</p>
                    <span>2 hours ago</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZeroLife',
    // props: {
    //     msg: String
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
