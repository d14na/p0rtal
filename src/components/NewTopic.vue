<template>
    <div class="card card-quick-post mg-t-10">
        <h6 class="slim-card-title">Share Your Thoughts</h6>

        <div class="form-group">
            <input type="text" name="location" class="form-control" placeholder="Choose a category or location">
            <small class="text-muted mg-l-10">eg. ZeroTalk | ZeroMe | Peeper</small>
        </div>

        <div class="form-group">
            <input type="text" name="title" class="form-control" placeholder="Enter a new Topic / Title">
        </div>

        <div class="form-group">
            <textarea class="form-control" rows="3" placeholder="What's on your mind?"></textarea>
        </div>

        <div class="card-footer">
            <button class="btn btn-purple">Share Post</button>
            <nav>
                <a href="javascript://"><i class="icon ion-images"></i></a>
                <a href="javascript://"><i class="icon ion-aperture"></i></a>
                <a href="javascript://"><i class="icon ion-calendar"></i></a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewTopic',
    // props: {
    //     msg: String
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
