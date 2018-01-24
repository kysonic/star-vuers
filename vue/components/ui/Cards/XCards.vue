<template>
    <div class="cards">
        <div class="button-container">
            <x-card-button @click.native="previous" :disabled="loading"></x-card-button>
        </div>
        <div class="card-container">
            <x-card :person="person" :loading="loading"></x-card>
            <div :class="{glow:true,female:person.gender==='female'}"></div>
        </div>
        <div class="button-container">
            <x-card-button  @click.native="next" :disabled="loading" class="right"></x-card-button>
        </div>
    </div>
</template>

<script>
    import XCard from './XCard.vue'
    import XCardButton from './XCardButton.vue'
    import {mapGetters} from 'vuex'
    export default {
        name: "XCards",
        components: {
            XCard,
            XCardButton
        },
        computed: {
            id () {
                return this.$route.params.id || 1
            },
            person(){
                return this.$store.getters.getPersonById(this.id) || {name:'Not Found'}
            },
            ...mapGetters(['loading'])
        },
        methods: {
            previous(){
                if(this.loading) false;
                const id = this.$route.params.id || 1
                const nextId = +id - 1 >= 1 ? +id - 1 : 20
                this.$router.push({path:`/${nextId}`})
            },
            next(){
                if(this.loading) false;
                const id = this.$route.params.id || 1
                const nextId = +id + 1 <= 20 ? +id+1 : 1
                this.$router.push({path:`/${nextId}`})
            }
        }
    }
</script>

<style scoped>
    .cards {
        height: 100%;
        display: grid;
        grid-template-columns: 100px auto 100px;
        grid-template-rows: auto;
    }
    .button-container, .card-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .glow {
        position: absolute;
        max-width: 1200px;
        width: 100%;
        max-height: 180px;
        height: 180px;
        background: url('../../../assets/svg/glow.svg') no-repeat center;
        z-index: 10;
    }
    .glow.female {
        background: url('../../../assets/svg/glow-female.svg') no-repeat center;

        transition: .2s background;
    }
    .card,.card-button {
        position: relative;
        z-index: 11;
    }
</style>