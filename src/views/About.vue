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

            <hr />
        </div>

        <div class="container">
            <h3>For Contractors</h3>

            <p>
                We're always looking for talented individuals to cooperate with on mutual goals.
                Please reach out to us: <a href="mailto:info@d14na.org">info@d14na.org</a>
            </p>

            <hr />
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

            <hr />
        </div>

        <div class="container">
            <h3>Our Partners</h3>

            <p>
                Although we have a very robust network of redundant nodes across the globe; we still rely on these valuable partners to provide our customers with the most reliable service.
            </p>

            <h4>INFURA</h4>
            <p>
                Powering our Ethereum Virtual Machine (EVM).
            </p>

            <h4>Cloudflare</h4>
            <p>
                Powering our Interplanetary Filesystem (IPFS).
            </p>

            <h4>Coinmarketcap</h4>
            <p>
                Providing all coin and token pricing data.
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
