<template>
    <div id="stageWin">
        <div class="d-flex justify-content-between">
            <div class="btn-toolbar" role="toolbar" aria-label="Stage Menu">
                <div class="btn-group" role="group">
                    <button id="btnGroupNetwork" type="button" class="btn btn-lg btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <font-awesome-icon icon="network-wired" />
                    </button>

                    <div class="dropdown-menu" aria-labelledby="btnGroupNetwork">
                        <a class="dropdown-item" href="javascript://" @click="showOne">One</a>
                        <a class="dropdown-item" href="javascript://" @click="showTwo">Two</a>
                    </div>
                </div>
            </div>

            <!-- close window -->
            <font-awesome-icon icon="times" class="btnWinClose" @click="close" />
        </div>

        <div class="container">
            <div class="row header">
                <div class="col text-center">
                    <h1>zer0net</h1>
                    <h3>Zite Stage</h3>
                </div>
            </div>

            <div class="row">
                <div class="col notice text-center">
                    coming soon
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
        showOne() {
            console.log('show one')
        },
        showTwo() {
            console.log('show two')
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

#stageWin {
    /* padding: 20px; */
}
</style>
