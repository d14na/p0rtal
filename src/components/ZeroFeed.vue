<template>
    <div class="card card-carousel mg-t-10">
        <div id="live-feed" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#live-feed" data-slide-to="0" class="active"></li>
                <li data-target="#live-feed" data-slide-to="1"></li>
                <li data-target="#live-feed" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <div class="carousel-item-wrapper bg-primary">
                        <div class="carousel-item-option">
                            <a href="javascript://"><i class="icon ion-md-create tx-16"></i></a>
                            <a href="javascript://"><i class="icon ion-md-stats tx-20"></i></a>
                            <a href="javascript://"><i class="icon ion-md-more tx-20"></i></a>
                        </div>

                        <div>
                            <p class="carousel-item-label">18 minutes ago on ZeroTalk</p>
                            <h5 class="carousel-item-title">Any licensed hams in the northeast US operating on 2m packet?</h5>
                            <nav class="nav flex-row">
                                <a href="javascript://">12K+ Views</a>
                                <a href="javascript://">234 Shares</a>
                                <a href="javascript://">43 Comments</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="carousel-item-wrapper bg-danger">
                        <div class="carousel-item-option">
                            <a href="javascript://"><i class="icon ion-md-create tx-16"></i></a>
                            <a href="javascript://"><i class="icon ion-md-stats tx-20"></i></a>
                            <a href="javascript://"><i class="icon ion-md-more tx-20"></i></a>
                        </div>
                        <div>
                            <p class="carousel-item-label">3 hours ago on ZeroTalk</p>
                            <h5 class="carousel-item-title">My Minecraft Dolphins died again, after 3 days</h5>
                            <nav class="nav flex-row">
                                <a href="javascript://">6K+ Views</a>
                                <a href="javascript://">112 Shares</a>
                                <a href="javascript://">21 Comments</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="carousel-item-wrapper bg-purple">
                        <div class="carousel-item-option">
                            <a href="javascript://"><i class="icon ion-md-create tx-16"></i></a>
                            <a href="javascript://"><i class="icon ion-md-stats tx-20"></i></a>
                            <a href="javascript://"><i class="icon ion-md-more tx-20"></i></a>
                        </div>
                        <div>
                            <p class="carousel-item-label">7 hours ago on ZeroTalk</p>
                            <h5 class="carousel-item-title">How to make the app written in Python2or3 for Android?</h5>
                            <nav class="nav flex-row">
                                <a href="javascript://">3K+ Views</a>
                                <a href="javascript://">61 Shares</a>
                                <a href="javascript://">10 Comments</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    // props: {
    //     msg: String
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
