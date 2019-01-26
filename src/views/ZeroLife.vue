<template>
    <div class="screen">
        <!-- links bar -->
        <LinksBar />

        <!-- navigation bar -->
        <NavBar />

        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item"><a href="">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">ZeroLife</li>
                </ol>

                <h6 class="slim-pagetitle">ZeroLife</h6>
            </div>

            <div class="row row-sm row-timeline">
                <div class="col-lg-9">

                    <div class="card pd-30">
                        <div class="timeline-group">
                            <div class="timeline-item timeline-day">
                                <div class="timeline-time">&nbsp;</div>
                                <div class="timeline-body">
                                    <p class="timeline-date">Today</p>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-time">10:30pm</div>
                                <div class="timeline-body">
                                    <p class="timeline-title"><a href="page-timeline.html">Building a Simple User Interface</a></p>
                                    <p class="timeline-author"><a href="page-timeline.html">Elisse Joson</a> San Francisco, CA</p>
                                    <p class="timeline-text">In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the </p>
                                    <p class="tx-12 mg-b-0"><a href="page-timeline.html">Like</a> &nbsp;&nbsp; <a href="page-timeline.html">Comment</a></p>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-time">8:15pm</div>
                                <div class="timeline-body">
                                    <p class="timeline-title"><a href="page-timeline.html">Blueberry Cheesecake Dessert Recipe</a></p>
                                    <p class="timeline-author"><a href="page-timeline.html">Katherine Lumaad</a> Oakland, CA</p>
                                    <p class="timeline-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

                                    <div class="row mg-b-15">
                                        <div class="col-6">
                                            <a href="page-timeline.html"><img src="@/assets/img/img17.jpg" class="img-fluid" alt=""></a>
                                        </div>
                                    </div>

                                    <p class="tx-12 mg-b-0"><a href="page-timeline.html">Like</a> &nbsp;&nbsp; <a href="page-timeline.html">Comment</a></p>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-time">3:30pm</div>
                                <div class="timeline-body">
                                    <p class="timeline-title"><a href="page-timeline.html">Your Finances Don't Have to Be Perfect to Work</a></p>
                                    <p class="timeline-author"><a href="page-timeline.html">Elisse Joson</a> San Francisco, CA</p>
                                    <p class="timeline-text">In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the </p>
                                    <p class="tx-12 mg-b-0"><a href="page-timeline.html">Like</a> &nbsp;&nbsp; <a href="page-timeline.html">Comment</a></p>
                                </div>
                            </div>

                            <div class="timeline-item timeline-day">
                                <div class="timeline-time">&nbsp;</div>
                                <div class="timeline-body">
                                    <p class="timeline-date">Yesterday</p>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-time">6:30pm</div>
                                <div class="timeline-body">
                                    <p class="timeline-title"><a href="page-timeline.html">An Engineer Explains Why You Should Always Order the Larger Pizza</a></p>
                                    <p class="timeline-author"><a href="page-timeline.html">Elisse Joson</a> San Francisco, CA</p>
                                    <p class="timeline-text">In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the </p>

                                    <div class="row row-xs mg-b-15">
                                        <div class="col-6">
                                            <a href="page-timeline.html"><img src="@/assets/img/img19.jpg" class="img-fluid" alt=""></a>
                                        </div>

                                        <div class="col-6">
                                            <a href="page-timeline.html"><img src="@/assets/img/img18.jpg" class="img-fluid" alt=""></a>
                                        </div>
                                    </div>

                                    <p class="tx-12 mg-b-0"><a href="page-timeline.html">2 Likes</a> &nbsp;&nbsp; <a href="page-timeline.html">1 Comment</a></p>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-time">1:15pm</div>
                                <div class="timeline-body">
                                    <p class="timeline-title"><a href="page-timeline.html">The Strange Persistence of First Languages</a></p>
                                    <p class="timeline-author"><a href="page-timeline.html">Elisse Joson</a> San Francisco, CA</p>
                                    <p class="timeline-text">In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the </p>
                                    <p class="tx-12 mg-b-0"><a href="page-timeline.html">Like</a> &nbsp;&nbsp; <a href="page-timeline.html">Comment</a></p>
                                </div>
                            </div>

                            <div class="timeline-item timeline-day">
                                <div class="timeline-time">&nbsp;</div>
                                <div class="timeline-body">
                                    <p class="timeline-date">December 20, 2017</p>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-time">11:45pm</div>
                                <div class="timeline-body">
                                    <p class="timeline-title"><a href="page-timeline.html">How to Win Your Next Political Argument</a></p>
                                    <p class="timeline-author"><a href="page-timeline.html">Elisse Joson</a> San Francisco, CA</p>
                                    <p class="timeline-text">In this lesson, you create a layout in XML that includes a text field and a button. In the next lesson, your app responds when the </p>
                                    <p class="tx-12 mg-b-0"><a href="page-timeline.html">Like</a> &nbsp;&nbsp; <a href="page-timeline.html">Comment</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-lg-3 mg-t-20 mg-lg-t-0">
                    <div id="datepicker" class="timeline-datepicker"></div>

                    <div class="card pd-20 mg-t-20">
                        <label class="slim-card-title">My Latest Updates</label>
                        <div class="post-group">
                            <div class="post-item">
                                <span class="post-date">Today, 3:30pm</span>
                                <p class="post-title"><a href="page-timeline.html">Maybe Just Don't Drink Coffee</a></p>
                                <p class="tx-12 mg-b-0"><a href="page-timeline.html">Elisse Joson</a> San Francisco, CA</p>
                            </div>

                            <div class="post-item">
                                <span class="post-date">Yesterday, 10:00am</span>
                                <p class="post-title"><a href="page-timeline.html">Your Finances Don't Have to Be Perfect to Work</a></p>
                                <p class="tx-12 mg-b-10"><a href="page-timeline.html">Elisse Joson</a> San Francisco, CA</p>
                                <p class="tx-12 mg-b-0">In this lesson, you create a layout in XML that includes a text field and a button...</p>
                            </div>

                            <div class="post-item">
                                <span class="post-date">Dec 22, 2017 10:00am</span>
                                <p class="post-title"><a href="page-timeline.html">The Condensed Guide to Running Meetings</a></p>
                                <p class="tx-12 mg-b-10"><a href="page-timeline.html">Elisse Joson</a> San Francisco, CA</p>
                                <p class="tx-12 mg-b-15">We love to hate meetings. And with good reason — they clog up our days, making it hard to get work done in the gaps...</p>
                                <a href="page-timeline.html"><img src="@/assets/img/img20.jpg" class="img-fluid" alt=""></a>
                            </div>

                            <div class="post-item">
                                <span class="post-date">Dec 21, 2017 5:00am</span>
                                <p class="post-title"><a href="page-timeline.html">What Romance Really Means After 10 Years of Marriage</a></p>
                                <p class="tx-12 mg-b-10"><a href="page-timeline.html">Elisse Joson</a> San Francisco, CA</p>
                                <p class="tx-12 mg-b-0">In this lesson, you create a layout in XML that includes a text field and a button...</p>
                            </div>

                            <div class="post-item">
                                <span class="post-date">Dec 20, 2017 4:20am</span>
                                <p class="post-title"><a href="page-timeline.html">
                                    Buying organic veggies at the supermarket is a waste of money</a>
                                </p>
                                <p class="tx-12 mg-b-10"><a href="page-timeline.html">Elisse Joson</a> San Francisco, CA</p>
                                <p class="tx-12 mg-b-0">In this lesson, you create a layout in XML that includes a text field and a button...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
/* Import NAVIGATION BAR. */
import NavBar from '@/components/NavBar.vue'

/* Import LINKS BAR. */
import LinksBar from '@/components/LinksBar.vue'

/* Import FOOTER. */
import Footer from '@/components/Footer.vue'

/* Initialize components. */
const components = {
    NavBar,
    LinksBar,
    Footer
}

/* Export. */
export default {
    components,
    data: () => ({
        //
    }),
    methods: {
        //
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>

</style>
