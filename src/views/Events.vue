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
                    <li class="breadcrumb-item active" aria-current="page">Event Calendar</li>
                </ol>

                <h6 class="slim-pagetitle">Event Calendar</h6>
            </div>

            <div class="card pd-25">
                <div id="fullCalendar"></div>
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

$(function() {
    return
    'use strict';

    $('#fullCalendar').fullCalendar({
        header: {
            left: 'prev',
            center: 'title',
            right: 'today next'
        }
    })
})
</script>

<style scoped>

</style>
