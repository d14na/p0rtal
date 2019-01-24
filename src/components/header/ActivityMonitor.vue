<template>
    <div class="dropdown dropdown-a">
        <a href="javascript://" class="header-notification" data-toggle="dropdown">
            <font-awesome-icon icon="broadcast-tower" />
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
                    <strong class="text-danger tx-16"><span class="slashed-zero">0</span>PEN is offline!</strong>
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
.slashed-zero {
    font-family: monaco, Consolas, "Lucida Console", monospace;
}

.subMenu {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 0.7em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: right;
    background: rgba(30, 30, 30, 0.9);
    padding: 2px 7px 2px 0;
    border-bottom: 1px solid #9993;
}
.subMenu a {
    color: rgba(210, 210, 210, 0.9);
}
.subMenu a:hover {
    color: rgba(255, 150, 150, 0.9);
}
</style>
