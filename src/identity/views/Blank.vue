<template>
    <div class="win-screen">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="javascript://" @click="gotoParent">back to Parent</a>
                    </li>
                </ol>

                <h6 class="slim-pagetitle">Blank</h6>
            </div>


            <p>
                put content here...
            </p>
        </div>
    </div>
</template>

<script>
/* Initialize Vuex. */
import { mapGetters, mapActions } from 'vuex'

/* Import COMPONENT. */
// import Component from '@/components/Component.vue'

/* Initialize components. */
const components = {
    //
}

/* Export. */
export default {
    components,
    data: () => ({
        //
    }),
    computed: mapGetters([
        'account'
    ]),
    methods: {
        ...mapActions([
            //
        ]),
        gotoParent() {
            
        }
    },
    mounted: () => {
        //
    }
}
</script>

<style scoped>

</style>
