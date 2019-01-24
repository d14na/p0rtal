<template>
    <div class="slim-navbar">
        <div class="container">
            <ul class="nav">
                <ZeroLife />
                <Discovery />
                <Buidl />
                <ThreeSixty />
            </ul>
        </div>
    </div>
</template>

<script>
/* Import ZEROLIFE. */
import ZeroLife from './navbar/ZeroLife.vue'

/* Import DISCOVERY. */
import Discovery from './navbar/Discovery.vue'

/* Import BUIDL. */
import Buidl from './navbar/Buidl.vue'

/* Import THREESIXTY. */
import ThreeSixty from './navbar/ThreeSixty.vue'

/* Initialize components. */
const components = {
    ZeroLife,
    Discovery,
    Buidl,
    ThreeSixty
}

/* Export. */
export default {
    components
}
</script>

<style scoped>
</style>
