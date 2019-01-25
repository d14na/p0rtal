<template>
    <div class="screen">
        <!-- links bar -->
        <LinksBar />

        <!-- navigation bar -->
        <NavBar />

        <div class="container">
            <h1>About zer<span class="slashed-zero">0</span>net</h1>

            <p>
                Learn more here...
            </p>
        </div>

        <div class="container">
            <h3>For Contractors</h3>

            <p>
                We're always looking for talented individuals to cooperate with on mutual goals.
                Please reach out to us: <a href="mailto:info@d14na.org">info@d14na.org</a>
            </p>
        </div>

        <div class="container">
            <h3>Bug Bounty Program</h3>

            <ol>
                <li>
                    IFrame Escape — 30k ZeroGold
                </li>
                <li>
                    CSRF, XSS — 10k ZeroGold
                </li>
            </ol>

            <button class="btn btn-block btn-warning">Submit a Bug</button>
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
