<template>
    <div class="card card-carousel mg-t-10">
        <div id="carousel2" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel2" data-slide-to="0" class="active"></li>
                <li data-target="#carousel2" data-slide-to="1"></li>
                <li data-target="#carousel2" data-slide-to="2"></li>
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
                            <p class="carousel-item-label">Recent Article</p>
                            <h5 class="carousel-item-title">20 Best Travel Tips After 5 Years Of Traveling The World</h5>
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
                            <p class="carousel-item-label">Recent Article</p>
                            <h5 class="carousel-item-title">How I Flew Around the World in Business Class for $1,340</h5>
                            <nav class="nav flex-row">
                                <a href="javascript://">Edit</a>
                                <a href="javascript://">Unpublish</a>
                                <a href="javascript://">Delete</a>
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
                            <p class="carousel-item-label">Recent Article</p>
                            <h5 class="carousel-item-title">10 Reasons Why Travel Makes You a Happier Person</h5>
                            <nav class="nav flex-row">
                                <a href="javascript://">Edit</a>
                                <a href="javascript://">Unpublish</a>
                                <a href="javascript://">Delete</a>
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
