<template>
    <div class="card card-recent-messages mg-t-10">
        <div class="card-header">
            <span>My Recent Messages</span>
            <a href="javascript://"><i class="icon ion-more"></i></a>
        </div>

        <div class="list-group list-group-flush">
            <div class="list-group-item">
                <div class="media">
                    <img src="@/assets/img/diana-queen.jpg" alt="">
                    <div class="media-body">
                        <h6>Diana Queen</h6>
                        <p>an hour ago</p>
                    </div>
                </div>

                <p class="msg">
                    Hi, welcome to P0rtal! My name is Diana.
                    I run things around here, so if there's anything you need, just ask!
                </p>
            </div>

            <!-- <div class="list-group-item">
                <div class="media">
                    <img src="@/assets/img/dev/img4.jpg" alt="">
                    <div class="media-body">
                        <h6>Rowella Sombrio</h6>
                        <p>3 hours ago</p>
                    </div>
                </div>
                <p class="msg">The European languages are members of the same family. Their separate existence is a myth...</p>
            </div> -->

        </div>

        <div class="card-footer">
            <a href="javascript://" class="tx-12"><i class="fa fa-angle-down mg-r-5"></i> Show all messages</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecentMessages',
    // props: {
    //     msg: String
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
