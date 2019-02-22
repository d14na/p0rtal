<template>
    <div class="slim-mainpanel">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <!--  -->
                </ol>

                <h6 class="slim-pagetitle">Profile</h6>
            </div>

            <div class="card-contact mg-b-20">
                <div class="tx-center">
                    <img src="@/assets/img/img12.jpg" class="card-img" alt="">

                    <h5 class="mg-t-10 mg-b-5">Londynn Lee</h5>
                    <p>Product Director</p>
                    <p class="contact-social">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                        <font-awesome-icon :icon="['fab', 'google']" />
                    </p>
                </div>

                <p class="contact-item">
                    <span>Phone:</span>
                    <span>+1 (646) 846-8181</span>
                </p>

                <p class="contact-item">
                    <span>Matrix</span>
                    <a href="javascript://">LondynnLee@0net.io</a>
                </p>
            </div>

            <ul class="nav nav-activity-profile mg-t-20">
                <li class="nav-item" @click="signout">
                    <span class="nav-link">
                        <i class="icon ion-ios-redo tx-purple"></i>
                        Sign Out
                    </span>
                </li>
            </ul>

            <div class="card card-connection mg-t-20">
                <div class="row row-xs">
                    <div class="col-4 tx-primary">129</div>
                    <div class="col-8">people viewed your profile in the past 90 days</div>
                </div>

                <hr />

                <div class="row row-xs">
                    <div class="col-4 tx-purple">845</div>
                        <div class="col-8">
                            connections <br>
                            <a href="javascript://">Grow your network</a>
                        </div>
                    </div>
                </div>

                <div class="card card-people-list mg-t-20">
                    <div class="slim-card-title">People you may know</div>

                    <div class="media-list">
                        <div class="media">
                            <img src="@/assets/img/img5.jpg" alt="">
                            <div class="media-body">
                                <a href="javascript://">Amber Heard</a>
                                <p>Software Engineer</p>
                            </div>
                            <a href="javascript://"><i class="icon ion-person-add tx-20"></i></a>
                        </div>

                        <div class="media">
                            <img src="@/assets/img/img6.jpg" alt="">
                            <div class="media-body">
                                <a href="javascript://">Richard Salomon</a>
                                <p>Architect</p>
                            </div>
                            <a href="javascript://"><i class="icon ion-person-add tx-20"></i></a>
                        </div>

                        <div class="media">
                            <img src="@/assets/img/img13.jpg" alt="">
                            <div class="media-body">
                                <a href="javascript://">Warren Vito</a>
                                <p>Sales Representative</p>
                            </div>
                            <a href="javascript://"><i class="icon ion-person-add tx-20"></i></a>
                        </div>

                        <div class="media">
                            <img src="@/assets/img/img12.jpg" alt="">
                            <div class="media-body">
                                <a href="javascript://">Charlene Plateros</a>
                                <p>Sales Representative</p>
                            </div>
                            <a href="javascript://"><i class="icon ion-person-add tx-20"></i></a>
                        </div>

                        <div class="media">
                            <img src="@/assets/img/img11.jpg" alt="">
                            <div class="media-body">
                                <a href="javascript://">Allan Palban</a>
                                <p>Sales Representative</p>
                            </div>
                            <a href="javascript://"><i class="icon ion-person-add tx-20"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

export default {
    data: () => ({
        //
    }),
    computed: {
        ...mapGetters([
            'account',
            'address'
        ]),
        // accountAbbr() {
        // }
    },
    methods: {
        ...mapActions([
            'updateIdentityScreenId'
        ]),
        loadScreen(_screenId) {
            this.updateIdentityScreenId(_screenId)
        },
        signout() {
            console.log('DO SIGN OUT!')
            this.loadScreen('')
        }
    },
    mounted: function () {
        //
    }
}
</script>

<style>
#identityStyle {
    border: 1pt solid #f33;
    padding-top: 20px;
}

.contact-social {
    display: flex;
    justify-content: space-evenly;
}
</style>
