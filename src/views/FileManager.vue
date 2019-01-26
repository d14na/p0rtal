<template>
    <div class="screen">
        <!-- links bar -->
        <LinksBar />

        <!-- navigation bar -->
        <NavBar />

        <div class="container">
            <div class="manager-header">
                <div class="slim-pageheader">
                    <ol class="breadcrumb slim-breadcrumb">
                        <li class="breadcrumb-item"><a href="">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">File Manager</li>
                    </ol>

                    <h6 class="slim-pagetitle">File Manager</h6>
                </div>

                <a id="managerNavicon" href="javascript://" class="contact-navicon"><i class="icon ion-navicon-round"></i></a>
            </div>

            <div class="manager-wrapper">
                <div class="manager-right">
                    <label class="section-label">Today</label>
                    <div class="file-group">
                        <div class="file-item">
                            <div class="row no-gutters wd-100p">
                                <div class="col-9 col-sm-5 d-flex align-items-center">
                                    <i class="fa fa-file-image-o"></i>
                                    <a href="javascript://">IMG_12292017.jpg</a>
                                </div>
                                <div class="col-3 col-sm-2 tx-right tx-sm-left">123kb</div>
                                <div class="col-6 col-sm-4 mg-t-5 mg-sm-t-0">20 minutes ago</div>
                                <div class="col-6 col-sm-1 tx-right mg-t-5 mg-sm-t-0"><a href="javascript://"><i class="icon ion-more"></i></a></div>
                            </div>
                        </div>

                        <div class="file-item">
                            <div class="row no-gutters wd-100p">
                                <div class="col-9 col-sm-5 d-flex align-items-center">
                                    <i class="fa fa-file-image-o"></i>
                                    <a href="javascript://">IMG_12292016.jpg</a>
                                </div>
                                <div class="col-3 col-sm-2 tx-right tx-sm-left">204kb</div>
                                <div class="col-6 col-sm-4 mg-t-5 mg-sm-t-0">1 hour ago</div>
                                <div class="col-6 col-sm-1 tx-right mg-t-5 mg-sm-t-0"><a href="javascript://"><i class="icon ion-more"></i></a></div>
                            </div>
                        </div>

                        <div class="file-item">
                            <div class="row no-gutters wd-100p">
                                <div class="col-9 col-sm-5 d-flex align-items-center">
                                    <i class="fa fa-file-pdf-o"></i>
                                    <a href="javascript://">Getting_Started.pdf</a>
                                </div>
                                <div class="col-3 col-sm-2 tx-right tx-sm-left">31kb</div>
                                <div class="col-6 col-sm-4 mg-t-5 mg-sm-t-0">2 hours ago</div>
                                <div class="col-6 col-sm-1 tx-right mg-t-5 mg-sm-t-0"><a href="javascript://"><i class="icon ion-more"></i></a></div>
                            </div>
                        </div>
                    </div>

                    <label class="section-label mg-t-25">Yesterday</label>
                    <div class="file-group">
                        <div class="file-item">
                            <div class="row no-gutters wd-100p">
                                <div class="col-9 col-sm-5 d-flex align-items-center">
                                    <i class="fa fa-file-video-o"></i>
                                    <a href="javascript://">VID_12122017.jpg</a>
                                </div>
                                <div class="col-3 col-sm-2 tx-right tx-sm-left">2.2mb</div>
                                <div class="col-6 col-sm-4 mg-t-5 mg-sm-t-0">Dec 22, 2017</div>
                                <div class="col-6 col-sm-1 tx-right mg-t-5 mg-sm-t-0"><a href="javascript://"><i class="icon ion-more"></i></a></div>
                            </div>
                        </div>

                        <div class="file-item">
                            <div class="row no-gutters wd-100p">
                                <div class="col-9 col-sm-5 d-flex align-items-center">
                                    <i class="fa fa-file-pdf-o"></i>
                                    <a href="javascript://">Instructions.pdf</a>
                                </div>
                                <div class="col-3 col-sm-2 tx-right tx-sm-left">42kb</div>
                                <div class="col-6 col-sm-4 mg-t-5 mg-sm-t-0">Dec 22, 2017</div>
                                <div class="col-6 col-sm-1 tx-right mg-t-5 mg-sm-t-0"><a href="javascript://"><i class="icon ion-more"></i></a></div>
                            </div>
                        </div>

                        <div class="file-item">
                            <div class="row no-gutters wd-100p">
                                <div class="col-9 col-sm-5 d-flex align-items-center">
                                    <i class="fa fa-file-pdf-o"></i>
                                    <a href="javascript://">Documentation.pdf</a>
                                </div>
                                <div class="col-3 col-sm-2 tx-right tx-sm-left">61kb</div>
                                <div class="col-6 col-sm-4 mg-t-5 mg-sm-t-0">Dec 22, 2017</div>
                                <div class="col-6 col-sm-1 tx-right mg-t-5 mg-sm-t-0"><a href="javascript://"><i class="icon ion-more"></i></a></div>
                            </div>
                        </div>

                        <div class="file-item">
                            <div class="row no-gutters wd-100p">
                                <div class="col-9 col-sm-5 d-flex align-items-center">
                                    <i class="fa fa-file-sound-o"></i>
                                    <a href="javascript://">Welcome.mp3</a>
                                </div>
                                <div class="col-3 col-sm-2 tx-right tx-sm-left">1.2mb</div>
                                <div class="col-6 col-sm-4 mg-t-5 mg-sm-t-0">Dec 22, 2017</div>
                                <div class="col-6 col-sm-1 tx-right mg-t-5 mg-sm-t-0"><a href="javascript://"><i class="icon ion-more"></i></a></div>
                            </div>
                        </div>
                    </div>

                    <label class="section-label mg-t-25">December 21, 2017</label>
                    <div class="file-group">
                        <div class="file-item">
                            <div class="row no-gutters wd-100p">
                                <div class="col-9 col-sm-5 d-flex align-items-center">
                                    <i class="fa fa-file-video-o"></i>
                                    <a href="javascript://">VID_12122017.jpg</a>
                                </div>
                                <div class="col-3 col-sm-2 tx-right tx-sm-left">2.2mb</div>
                                <div class="col-6 col-sm-4 mg-t-5 mg-sm-t-0">Dec 21, 2017</div>
                                <div class="col-6 col-sm-1 tx-right mg-t-5 mg-sm-t-0"><a href="javascript://"><i class="icon ion-more"></i></a></div>
                            </div>
                        </div>

                        <div class="file-item">
                            <div class="row no-gutters wd-100p">
                                <div class="col-9 col-sm-5 d-flex align-items-center">
                                    <i class="fa fa-file-pdf-o"></i>
                                    <a href="javascript://">Instructions.pdf</a>
                                </div>
                                <div class="col-3 col-sm-2 tx-right tx-sm-left">42kb</div>
                                <div class="col-6 col-sm-4 mg-t-5 mg-sm-t-0">Dec 21, 2017</div>
                                <div class="col-6 col-sm-1 tx-right mg-t-5 mg-sm-t-0"><a href="javascript://"><i class="icon ion-more"></i></a></div>
                            </div>
                        </div>

                        <div class="file-item">
                            <div class="row no-gutters wd-100p">
                                <div class="col-9 col-sm-5 d-flex align-items-center">
                                    <i class="fa fa-file-pdf-o"></i>
                                    <a href="javascript://">Documentation.pdf</a>
                                </div>
                                <div class="col-3 col-sm-2 tx-right tx-sm-left">61kb</div>
                                <div class="col-6 col-sm-4 mg-t-5 mg-sm-t-0">Dec 21, 2017</div>
                                <div class="col-6 col-sm-1 tx-right mg-t-5 mg-sm-t-0"><a href="javascript://"><i class="icon ion-more"></i></a></div>
                            </div>
                        </div>

                        <div class="file-item">
                            <div class="row no-gutters wd-100p">
                                <div class="col-9 col-sm-5 d-flex align-items-center">
                                    <i class="fa fa-file-sound-o"></i>
                                    <a href="javascript://">Welcome.mp3</a>
                                </div><!-- col-6 -->
                                <div class="col-3 col-sm-2 tx-right tx-sm-left">1.2mb</div>
                                <div class="col-6 col-sm-4 mg-t-5 mg-sm-t-0">Dec 21, 2017</div>
                                <div class="col-6 col-sm-1 tx-right mg-t-5 mg-sm-t-0"><a href="javascript://"><i class="icon ion-more"></i></a></div>
                            </div>
                        </div>
                    </div>

                    <div class="load-more-wrapper mg-t-25">
                        <a href="javascript://">Load more</a>
                    </div>
                </div>

                <div class="manager-left">
                    <a href="javascript://" class="btn btn-contact-new">Upload File</a>
                    <nav class="nav">
                        <a href="javascript://" class="nav-link active">
                            <span>All File Type</span>
                            <span>120</span>
                        </a>
                        <a href="javascript://" class="nav-link">
                            <span>Documentts</span>
                            <span>16</span>
                        </a>
                        <a href="javascript://" class="nav-link">
                            <span>Images</span>
                            <span>68</span>
                        </a>
                        <a href="javascript://" class="nav-link">
                            <span>Videos</span>
                            <span>38</span>
                        </a>
                        <a href="javascript://" class="nav-link">
                            <span>Sounds</span>
                            <span>9</span>
                        </a>
                    </nav>
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
