<template>
    <div class="screen">
        <!-- links bar -->
        <LinksBar />

        <!-- navigation bar -->
        <NavBar />

        <div class="container">
            <h1>Privacy</h1>

            <p>
                We respect YOURS!
            </p>
        </div>

        Result: {{scannedText}}
        <hr />
        <qrcode-stream @init="onInit" @decode="onDecode"></qrcode-stream>

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

import { QrcodeStream } from 'vue-qrcode-reader'

// import VueQrcodeReader from 'vue-qrcode-reader'
console.log('QrcodeStream', QrcodeStream)

/* Initialize components. */
const components = {
    NavBar,
    LinksBar,
    Footer,
    'qrcode-stream': QrcodeStream
}

/* Export. */
export default {
    components,
    data: () => ({
        scannedText: ''
    }),
    methods: {
        async onInit(_promise) {
            console.log('show loading indicator');

            try {
                await promise

                console.log('successfully initialized');
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                    console.log('user denied camera access permisson')
                } else if (error.name === 'NotFoundError') {
                    console.log('no suitable camera device installed')
                } else if (error.name === 'NotSupportedError') {
                    console.log('page is not served over HTTPS (or localhost)')
                } else if (error.name === 'NotReadableError') {
                    console.log('maybe camera is already in use')
                } else if (error.name === 'OverconstrainedError') {
                    console.log('passed constraints don\'t match any camera.')
                } else if (error.name === 'StreamApiNotSupportedError') {
                    console.log('browser seems to be lacking features')
                }
            } finally {
                console.log('hide loading indicator')
            }
        },
        onDecode (_decodedString) {
            console.log('DECODED STRING', _decodedString)
            this.scannedText = _decodedString
        }
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>
qrcode-stream {
    border: 1pt solid #f00;
}
</style>
