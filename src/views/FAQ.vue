<template>
    <div class="screen">
        <!-- links bar -->
        <LinksBar />

        <!-- navigation bar -->
        <NavBar />

        <div class="slim-mainpanel">
            <div class="container">
                <div class="slim-pageheader">
                    <ol class="breadcrumb slim-breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript://">FAQ</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{title}}</li>
                    </ol>

                    <h6 class="slim-pagetitle">{{title}}</h6>
                </div>

                <div class="section-wrapper">
                    <label class="section-title">WHY CACHE IS BETTER THAN ETH</label>

                    <p class="mg-b-20 mg-sm-b-40">
                        We appreciate your feedback!

                        <button @click="params">params</button>
                    </p>
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
        title: ''
    }),
    methods: {
        params() {
            /* Load query path. */
            const params = this.$route.params

            console.log('FAQ PARAMS', params)
        }
    },
    mounted: function () {
        /* Load query path. */
        const params = this.$route.params

        console.log('FAQ PARAMS', params)

        /* Set topic. */
        const topic = params.topic

        switch(topic) {
            case 'cache-is-better':
                this.title = 'Cache Is Better!'
                break
            case 'what-is-boost':
                this.title = 'What is Boost?'
                break
            default:
                this.title = 'NO TOPIC'
        }
    }
}
</script>
