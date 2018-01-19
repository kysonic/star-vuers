<template>
    <div id="app">
        <div class="container">
            <Navbar></Navbar>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/layout/Navbar.vue'
    export default {
        name: "App",
        data () {
            return {}
        },
        components: {
            Navbar
        }
    }
</script>

<style>
    @import './stylesheets/styles.css';
</style>