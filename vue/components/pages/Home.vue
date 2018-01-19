<template>
    <div class="home-container">
        <div class="logo">
            <img src="../../assets/img/star-vuers-logo.svg" alt="Star Vuers Logo">
        </div>
        <div class="content">

        </div>
    </div>
</template>

<script>
    import titleMixin from '../../mixins/title-mixin'
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
        }
    }
</script>

<style scoped>
    .home-container {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 160px auto;
    }
    .logo {
        max-width: 380px;
        max-height: 160px;

        grid-column: 1/3;
    }
    .logo img {
        max-width: 100%;
        max-height: 100%;
    }
</style>