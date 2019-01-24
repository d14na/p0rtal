<template>
    <div class="screen">
        <!-- links bar -->
        <LinksBar />

        <!-- navigation bar -->
        <NavBar />

        <div class="container">
            <h1>Search zer<span class="slashed-zero">0</span>net</h1>

            <p>
                no results...
            </p>
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
    mounted: () => {
        //
    }
}
</script>
