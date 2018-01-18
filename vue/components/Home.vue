<template>
    <div id="content">
        <Person></Person>
        <router-link :to="{ path: '/xpath'}">XPath</router-link>
        <a href="/xpath">XPATH2</a>
        <h1>HEY</h1>
        <div class="logo">
            <img src="../assets/img/logo.png" alt="LOGO">
        </div>
    </div>
</template>

<script>
    import Person from './Person.vue'
    import titleMixin from '../mixins/title-mixin'
    export default {
        name: "Home",
        mixins: [titleMixin],
        title(){
          return 'Home'
        },
        asyncData({store, route}){
            const id = route.params.id || 1
            return store.dispatch('getPersonById', id)
        },
        data () {
            return {}
        },
        components: {
            Person
        }
    }
</script>

<style>
    a {
        color: red;
    }
</style>