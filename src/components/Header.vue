<template>
    <div class="slim-header">
        <div class="container">
            <div class="slim-header-left">
                <h2 class="slim-logo">
                    <router-link to="/">
                        p<span class="slashedZero">0</span>rtal
                    </router-link>
                </h2>

                <div class="search-box">
                    <input type="text" class="form-control" placeholder="Your p2p request?">
                    <button class="btn btn-primary"><i class="fa fa-search"></i></button>
                </div>
            </div>

            <div class="slim-header-right">
                <div class="dropdown dropdown-a">
                    <a href="javascript://" class="header-notification" data-toggle="dropdown">
                        <font-awesome-icon icon="bolt" />
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-header">
                            <h6 class="dropdown-menu-title">Network Status</h6>
                            <div>
                                <a href="javascript://">Events</a>
                                <a href="javascript://">Settings</a>
                            </div>
                        </div>

                        <div class="dropdown-activity-list">
                            <div class="activity-label tx-16 text-center">
                                <strong class="text-danger tx-16">0PEN is offline!</strong>
                            </div>

                            <div class="activity-item">
                                <div class="row no-gutters">
                                    <div class="col-2 tx-right">10:15am</div>
                                    <div class="col-2 tx-center"><span class="square-10 bg-success"></span></div>
                                    <div class="col-8">Purchased christmas sale cloud storage</div>
                                </div>
                            </div>

                            <div class="activity-item">
                                <div class="row no-gutters">
                                    <div class="col-2 tx-right">9:48am</div>
                                    <div class="col-2 tx-center"><span class="square-10 bg-danger"></span></div>
                                    <div class="col-8">Login failure</div>
                                </div>
                            </div>

                            <div class="activity-item">
                                <div class="row no-gutters">
                                    <div class="col-2 tx-right">7:29am</div>
                                    <div class="col-2 tx-center"><span class="square-10 bg-warning"></span></div>
                                    <div class="col-8">(D:) Storage almost full</div>
                                </div>
                            </div>

                            <div class="activity-item">
                                <div class="row no-gutters">
                                    <div class="col-2 tx-right">3:21am</div>
                                    <div class="col-2 tx-center"><span class="square-10 bg-success"></span></div>
                                    <div class="col-8">1 item sold <strong>Christmas bundle</strong></div>
                                </div>
                            </div>
                        </div>

                        <div class="dropdown-list-footer">
                            <a href="javascript://" @click="open0vueStage"><font-awesome-icon icon="chevron-down" /> Show All Activities</a>
                        </div>
                    </div>
                </div>

                <div class="dropdown dropdown-b">
                    <a href="javascript://" class="header-notification" data-toggle="dropdown">
                        <font-awesome-icon icon="bell" />
                        <span class="indicator"></span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="dropdown-menu-header">
                            <h6 class="dropdown-menu-title">Notifications</h6>
                            <div>
                                <a href="javascript://">Mark All as Read</a>
                                <router-link to="/settings">Settings</router-link>
                            </div>
                        </div>

                        <div class="dropdown-list">
                            <a href="javascript://" class="dropdown-link">
                                <div class="media">
                                    <img src="@/assets/img/img8.jpg" alt="">
                                    <div class="media-body">
                                        <p><strong>Suzzeth Bungaos</strong> tagged you and 18 others in a post.</p>
                                        <span>October 03, 2017 8:45am</span>
                                    </div>
                                </div>
                            </a>
                            <a href="javascript://" class="dropdown-link">
                                <div class="media">
                                    <img src="@/assets/img/img9.jpg" alt="">
                                    <div class="media-body">
                                        <p><strong>Mellisa Brown</strong> appreciated your work <strong>The Social Network</strong></p>
                                        <span>October 02, 2017 12:44am</span>
                                    </div>
                                </div>
                            </a>
                            <a href="javascript://" class="dropdown-link read">
                                <div class="media">
                                    <img src="@/assets/img/img10.jpg" alt="">
                                    <div class="media-body">
                                        <p>20+ new items added are for sale in your <strong>Sale Group</strong></p>
                                        <span>October 01, 2017 10:20pm</span>
                                    </div>
                                </div>
                            </a>
                            <a href="javascript://" class="dropdown-link read">
                                <div class="media">
                                    <img src="@/assets/img/img2.jpg" alt="">
                                    <div class="media-body">
                                        <p><strong>Julius Erving</strong> wants to connect with you on your conversation with <strong>Ronnie Mara</strong></p>
                                        <span>October 01, 2017 6:08pm</span>
                                    </div>
                                </div>
                            </a>
                            <div class="dropdown-list-footer">
                                <a href="javascript://" @click="open0vueStage"><font-awesome-icon icon="chevron-down" /> Show All Notifications</a>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="javascript://" class="logged-user" @click="open0vueIdentity">
                    <img src="@/assets/img/img1.jpg" alt="">
                    <span>Guest Peer</span>
                    <!-- <font-awesome-icon icon="chevron-down" /> -->
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        //
    }),
    methods: {
        open0vueIdentity() {
            _0vueIdentity.activate()
        },
        open0vueStage() {
            _0vueStage.activate()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slashedZero {
    font-family: monaco, Consolas, "Lucida Console", monospace;
}
</style>
