<template>
    <div id="content">
        <Person></Person>
        <router-link :to="{ path: '/xpath'}">XPath</router-link>
        <a href="/xpath">XPATH5</a>
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

<style scoped>
    a {
        color: black;
    }
</style>