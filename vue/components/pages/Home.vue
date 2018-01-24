<template>
    <div class="home-container">
        <div class="logo-container">
            <div class="logo">
                <img src="../../assets/img/star-vuers-logo.svg" alt="Star Vuers Logo">
            </div>
        </div>
        <div class="content">
            <x-cards></x-cards>
        </div>
    </div>
</template>

<script>
    import titleMixin from '../../mixins/title-mixin'
    import XCards from '../ui/Cards/XCards.vue'
    export default {
        name: "Home",
        mixins: [titleMixin],
        title(){
          return 'Home'
        },
        asyncData({store, route}){
            const id = route.params.id || 1
            if(store && store.state.people && store.state.people[id]) return store.state.people[id]
            return store.dispatch('getPersonById', id)
        },
        components: {
            XCards
        }
    }
</script>

<style scoped>
    .home-container {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 175px auto;

        height: 100%;
    }
    .logo-container {
        grid-column: 1/3;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo {
        width: 100%;
        height: 100%;
        max-width: 380px;
        max-height: 160px;
    }
    .logo img {
        max-width: 100%;
        max-height: 100%;
    }
    .home-container .content {
        grid-column: 1/3;
        margin-top: 40px;
    }
    @media (max-width: 1367px) {
        .home-container {
            grid-template-rows: 0 auto;
        }
    }
</style>