<template>
    <div class="slim-footer">
        <div class="container">
            <p>&copy; {{currentYear}} D14na MDAO. All Rights Reserved.</p>
            <p>Designed with ❤️ by <a href="http://themepixels.me/" target="_blank">ThemePixels</a></p>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    data: () => ({
        currentYear: moment().format('YYYY')
    }),
    methods: {
    },
    mounted: function () {
        // console.log('Footer is mounted.')
    }
}
</script>

<style scoped>

</style>
