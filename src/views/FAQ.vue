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

                <CacheIsBetter v-if="topic == 'cache-is-better'" />
                <Nametag v-if="topic == 'nametag'" />
                <Welcome v-if="topic == 'welcome'" />
                <WhatIsBoost v-if="topic == 'what-is-boost'" />
                <ZeroDelta v-if="topic == 'zerodelta'" />
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

/* Import FAQs. */
import CacheIsBetter from './FAQ/CacheIsBetter.vue'
import Nametag from './FAQ/Nametag.vue'
import Welcome from './FAQ/Welcome.vue'
import WhatIsBoost from './FAQ/WhatIsBoost.vue'
import ZeroDelta from './FAQ/ZeroDelta.vue'

/* Initialize components. */
const components = {
    NavBar,
    LinksBar,
    Footer,

    CacheIsBetter,
    Nametag,
    Welcome,
    WhatIsBoost,
    ZeroDelta
}

/* Export. */
export default {
    components,
    data: () => ({
        // title: '',
        // summary: ''
    }),
    computed: {
        title() {
            switch(this.getTopic()) {
                case 'cache-is-better':
                    return 'Cache Is Better!'
                case 'nametag':
                    return 'Nametag Guide'
                case 'welcome':
                    return 'Welcome'
                case 'what-is-boost':
                    return 'What is Boost?'
                case 'zerodelta':
                    return 'ZeroDelta'
                default:
                    return 'NO TOPIC'
            }
        },
        topic() {
            return this.getTopic()
        }
    },
    methods: {
        getTopic() {
            /* Load query path. */
            const params = this.$route.params

            /* Set topic. */
            const topic = params.topic

            /* Return topic. */
            return topic
        }
    },
    mounted: function () {
        //
    }
}
</script>
