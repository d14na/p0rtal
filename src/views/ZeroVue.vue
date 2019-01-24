<template>
    <div class="slim-mainpanel">
        <NavBar />

        <div class="container">

            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">You are <strong>Home</strong></li>
                </ol>

                <h6 class="slim-pagetitle">
                    <a href="javascript://">{{ this.nickname ? $t('helloWithNickname', { nickname: this.nickname }) : 'PRIVATE GUEST' }}</a>
                    <small class="ml-1"><small><strong class="numPeers text-info">0</strong> peers connected</small></small>
                </h6>
            </div>

            <div class="row row-xs">
                <div class="col-md-6 col-lg-3 order-lg-1">
                    <ZeroEffect />
                    <ZeroLife />
                    <ZeroTasks />
                    <RecentMessages />
                </div>

                <div class="col-md-6 col-lg-3 mg-t-10 mg-md-t-0 order-lg-3">
                    <TrendingStories />
                    <ZeroLit />
                    <Sponsor />
                    <Feedback />
                </div>

                <div class="col-lg-6 mg-t-10 mg-lg-t-0 order-lg-2">

                    <div class="card card-blog-overlay">
                        <img class="img-fit-cover" src="@/assets/img/img26.jpg" alt="Image">

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

                    <NewTopic />
                    <Carousel />

                    <div class="card card-blog-split mg-t-10">
                        <div class="row no-gutters flex-row-reverse">
                            <div class="col-md-5 col-lg-6 col-xl-5">
                                <figure>
                                    <img src="@/assets/img/img20.jpg" class="img-fit-cover" alt="">
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

        <ModalAdminPermission />
    </div>
</template>

<script>
/* Import NAVIGATION BAR. */
import NavBar from '@/components/NavBar.vue'

/* Import RECENT MESSAGES. */
import RecentMessages from '@/components/RecentMessages.vue'

/* Import TRENDING STORIES. */
import TrendingStories from '@/components/TrendingStories.vue'

/* Import SPONSOR. */
import Sponsor from '@/components/Sponsor.vue'

/* Import FEEDBACK. */
import Feedback from '@/components/Feedback.vue'

/* Import NEW TOPIC. */
import NewTopic from '@/components/NewTopic.vue'

/* Import CAROUSEL. */
import Carousel from '@/components/Carousel.vue'

/* Import ZEROEFFECT. */
import ZeroEffect from '@/components/ZeroEffect.vue'

/* Import ZEROLIFE. */
import ZeroLife from '@/components/ZeroLife.vue'

/* Import ZEROLIT. */
import ZeroLit from '@/components/ZeroLit.vue'

/* Import ZEROTASKS. */
import ZeroTasks from '@/components/ZeroTasks.vue'

/* Import (MODAL) ADMIN PERMISSION. */
import ModalAdminPermission from '@/components/modal/AdminPermission.vue'

/*******************************************************************************

  ZeroVue Display Engine
  ----------------------

  ...

*******************************************************************************/

/* Set name. */
// NOTE: Are we ever going to use this??
const name = 'zerovue'

/* Initialize components. */
const components = {
    NavBar,
    RecentMessages,
    TrendingStories,
    Sponsor,
    Feedback,
    NewTopic,
    Carousel,
    ModalAdminPermission,
    ZeroEffect,
    ZeroLife,
    ZeroLit,
    ZeroTasks
}

/* Export. */
export default {
    name,
    components,
    data: () => ({
        nickname: 'Satoshi'
    }),
}
</script>
