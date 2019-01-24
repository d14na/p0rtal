<template>
    <div class="screen">
        <!-- links bar -->
        <LinksBar />

        <!-- navigation bar -->
        <NavBar />

        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item"><a href="">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">DApp Buidl Wizard</li>
                </ol>

                <h6 class="slim-pagetitle">DApp Buidl Wizard</h6>
            </div>

            <div class="section-wrapper mg-t-20">
                <label class="section-title">Basic Wizard With Validation</label>
                <p class="mg-b-20 mg-sm-b-40">A basic form wizard with form validation using Parsley js form validation plugin.</p>

                <div id="wizard2">
                    <h3>Personal Information</h3>
                    <section>
                        <p>Try the keyboard navigation by clicking arrow left or right!</p>
                        <div class="form-group wd-xs-300">
                            <label class="form-control-label">Firstname: <span class="tx-danger">*</span></label>
                            <input id="firstname" class="form-control" name="firstname" placeholder="Enter firstname" type="text" required>
                        </div>

                        <div class="form-group wd-xs-300">
                            <label class="form-control-label">Lastname: <span class="tx-danger">*</span></label>
                            <input id="lastname" class="form-control" name="lastname" placeholder="Enter lastname" type="text" required>
                        </div>
                    </section>

                    <h3>Billing Information</h3>
                    <section>
                        <p>Wonderful transition effects.</p>
                        <div class="form-group wd-xs-300">
                            <label class="form-control-label">Email: <span class="tx-danger">*</span></label>
                            <input id="email" class="form-control" name="email" placeholder="Enter email address" type="email" required>
                        </div>
                    </section>

                    <h3>Payment Details</h3>
                    <section>
                        <p>The next and previous buttons help you to navigate through your content.</p>
                    </section>
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

<style scoped>

</style>
