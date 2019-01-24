<template>
    <div class="win-stage" role="toolbar" aria-label="Stage Menu">
        <div class="win-toolbar d-flex justify-content-between">
            <div class="d-flex justify-content-around">
                <button type="button" class="btn btn-toolbar btn-link" @click="loadHelp">
                    <font-awesome-icon icon="headset" />
                </button>

                <div class="btn-group" role="group">
                    <button id="btnGroupNetwork" type="button" class="btn btn-toolbar btn-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <font-awesome-icon icon="satellite-dish" />
                    </button>

                    <div class="dropdown-menu" aria-labelledby="btnGroupNetwork">
                        <a class="dropdown-item" href="javascript://" @click="showOne">Chan One</a>
                        <a class="dropdown-item" href="javascript://" @click="showTwo">Chan Two</a>
                    </div>
                </div>
            </div>

            <!-- close window -->
            <button type="button" class="btn btn-lg btn-link" @click="close">
                <font-awesome-icon icon="window-close" class="btn-win-close" />
            </button>
        </div>

        <div class="container">
            <div class="row header">
                <div class="col text-center">
                    <h1>zer<span class="slashed-zero">0</span>net</h1>
                    <h3>Zite Stage</h3>
                </div>
            </div>

            <div class="row">
                <div class="col notice text-center">
                    coming soon
                </div>
            </div>
        </div>

        <div>
            <div>
                <h6 class="dropdown-menu-title">Notifications</h6>
                <div>
                    <a href="javascript://">Mark All as Read</a>
                    <a>Settings</a>
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
</template>

<script>
export default {
    data: () => ({
        //
    }),
    methods: {
        close() {
            _0vueStage.deactivate()
        },
        loadHelp() {
            console.log('load help')
        },
        showOne() {
            console.log('show one')
        },
        showTwo() {
            console.log('show two')
        },
        open0vueStage() {
            console.log('open vue stage')
        }
    },
    mounted: () => {
        console.log('Stage is mounted.')
    }
}
</script>

<style scoped>
.header h1 {
    font-size: 4.8em;
}
.header h3 {
    font-size: 2.6em;
}
.notice {
    font-size: 2.6em;
    color: rgb(180, 60, 60);
}

.win-stage {
    height: 100%;
    border-right: 1px solid #9993;
}
.win-toolbar {
    padding-left: 15px;
}
</style>
