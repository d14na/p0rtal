<template>
    <div class="slim-mainpanel">
        <Header />
        <NavBar />

        <div class="container">

            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">You are <strong>Home</strong></li>
                </ol>

                <h6 class="slim-pagetitle">
                    <a href="javascript://">PRIVATE GUEST</a>
                    <small class="ml-1"><small><strong class="numPeers text-info">0</strong> peers connected</small></small>
                </h6>
            </div>

            <div class="row row-xs">
                <div class="col-md-6 col-lg-3 order-lg-1">
                    <ZeroEffect />

                    <div id="zerolife">
                        <!-- placeholder for zerolife -->
                    </div>

                    <div id="zerotasks">
                        <!-- placeholder for zerotasks -->
                    </div>

                    <div id="recent-messages">
                        <!-- placeholder for recent-messages -->
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 mg-t-10 mg-md-t-0 order-lg-3">
                    <div id="trending-stories">
                        <!-- placeholder for trending-stories -->
                    </div>

                    <div id="zerolit">
                        <!-- placeholder for zerolit -->
                    </div>

                    <div id="sponsor">
                        <!-- placeholder for sponsor -->
                    </div>

                    <div id="feedback">
                        <!-- placeholder for feedback -->
                    </div>
                </div>

                <div class="col-lg-6 mg-t-10 mg-lg-t-0 order-lg-2">

                    <div class="card card-blog-overlay">
                        <img class="img-fit-cover" src="img/img26.jpg" alt="Image">

                        <div class="blog-content-wrapper">
                            <div class="blog-content">
                                <p class="blog-category tx-primary">Travel</p>
                                <h3 class="blog-title"><a href="javascript://">
                                    The Difference Between Streets, Boulevards, Avenues, and Other Roads</a></h3>
                            </div>
                        </div>

                        <div class="card-footer">
                            <span class="mg-r-5">Mar 25, 2017</span>
                            <a href="javascript://" class="mg-r-10"><i class="fa fa-heart-o mg-r-5"></i> 23 Likes</a>
                            <a href="javascript://"><i class="fa fa-comment-o mg-r-5"></i> 4 Comments</a>
                            <span>By: <a href="javascript://" class="tx-white-8 hover-white">Katherine Pechon</a></span>
                        </div>
                    </div>

                    <div id="new-topic">
                        <!-- placeholder for new-topic -->
                    </div>

                    <div id="carousel">
                        <!-- placeholder for carousel -->
                    </div>

                    <div class="card card-blog-split mg-t-10">
                        <div class="row no-gutters flex-row-reverse">
                            <div class="col-md-5 col-lg-6 col-xl-5">
                                <figure>
                                    <img src="img/img20.jpg" class="img-fit-cover" alt="">
                                </figure>
                            </div>

                            <div class="col-md-7 col-lg-6 col-xl-7">
                                <p class="blog-category tx-success">Science</p>
                                <h5 class="blog-title"><a href="javascript://">Five Actual Facts About the Science of Dreams</a></h5>
                                <p class="blog-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Nascetur ridiculus mus. Donec quam felis, ultricies nec...</p>
                                <span class="blog-date">Mar 11, 2017, 2:30pm</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div id="footer">
            <!-- placeholder for footer -->
        </div>
    </div>
</template>

<script>
/* Import HEADER. */
import Header from '@/components/Header.vue'

/* Import NAVIGATION BAR. */
import NavBar from '@/components/NavBar.vue'

/* Import ZEROEFFECT. */
import ZeroEffect from '@/components/ZeroEffect.vue'

/*******************************************************************************

  ZeroVue Display Engine
  ----------------------

  ...

*******************************************************************************/

/* Set name. */
const name = 'zerovue'

/* Initialize components. */
const components = {
    Header,
    NavBar,
    ZeroEffect
}

/* Export. */
export default {
    name,
    components
}
</script>
