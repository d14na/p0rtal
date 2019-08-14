<template>
    <div class="slim-mainpanel">
        <!-- links bar -->
        <LinksBar />

        <!-- navigation bar -->
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
                    <SponsorBox />
                    <Feedback />
                </div>

                <div class="col-lg-6 mg-t-10 mg-lg-t-0 order-lg-2">

                    <div class="card card-blog-overlay">
                        <img class="img-fit-cover" src="@/assets/img/news/hong-kong.jpg" alt="Image">

                        <div class="blog-content-wrapper">
                            <div class="blog-content">
                                <h3 class="blog-title"><a href="javascript://">
                                    A guide to collective and individual tactics being used in the uprising that has been growing in the streets of Hong Kong against the Extradition Bill.</a></h3>
                            </div>
                        </div>

                        <div class="card-footer">
                            <span class="mg-r-5">August 13, 2019</span>

                            <a href="javascript://" class="mg-r-10"><i class="fa fa-heart-o mg-r-5"></i> 23 Likes</a>

                            <a href="javascript://"><i class="fa fa-comment-o mg-r-5"></i> 4 Comments</a>

                            <span>By: <a href="javascript://" class="tx-white-8 hover-white">Anonymous Contributor</a></span>
                        </div>
                    </div>

                    <NewTopic />
                    <Carousel />

                    <div class="card card-blog-split mg-t-10">
                        <div class="row no-gutters flex-row-reverse">
                            <div class="col-md-5 col-lg-6 col-xl-5">
                                <figure>
                                    <img src="@/assets/img/news/tom-manning.jpg" class="img-fit-cover" alt="">
                                </figure>
                            </div>

                            <div class="col-md-7 col-lg-6 col-xl-7">
                                <p class="blog-category tx-success">Editorial</p>

                                <h5 class="blog-title"><a href="javascript://">Statement on Passing of Tom Manning</a></h5>

                                <p class="blog-text">
                                    The following is a statement on the passing of political prisoner, Tom Manning. by Ray Luc LevasseurTom Manning's death on July 30 has me in the grip of an emotional riptide. I feel like part of me died with him.Tom was imprisoned at USP-Hazelton, WV at the time of his...
                                </p>

                                <span class="blog-date">August 2, 2019</span>
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

/* Import LINKS BAR. */
import LinksBar from '@/components/LinksBar.vue'

/* Import RECENT MESSAGES. */
import RecentMessages from '@/components/RecentMessages.vue'

/* Import TRENDING STORIES. */
import TrendingStories from '@/components/TrendingStories.vue'

/* Import SPONSOR BOX. */
import SponsorBox from '@/components/SponsorBox.vue'

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
    LinksBar,
    RecentMessages,
    TrendingStories,
    SponsorBox,
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
