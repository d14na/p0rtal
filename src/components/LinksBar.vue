<template>
    <!-- mini sub-menu (this replaces the standard footer links) -->
    <div class="links-bar">
        <a href="#/about">About</a> <span class="v-divider-dark"></span>
        <router-link to="/legal">Legal</router-link> <span class="v-divider-dark"></span>
        <router-link to="/privacy">Privacy</router-link>
    </div>
</template>

<script>
export default {
    data: () => ({
        //
    }),
    methods: {
        //
    }
}
</script>

<style scoped>
.links-bar {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 0.7em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: right;
    background: rgba(30, 30, 30, 0.9);
    padding: 2px 7px 2px 0;
    border-bottom: 1px solid #9993;
}
.links-bar a {
    color: rgba(210, 210, 255, 0.9);
}
.links-bar a:hover {
    color: rgba(255, 150, 150, 0.9);
}
</style>
