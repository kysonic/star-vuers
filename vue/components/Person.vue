<template>
    <div class="person-container">
        <div class="name">{{person.name}}</div>
        <div class="counter">{{counter}}</div>
        <button @click="increaseCounter">INC</button>
    </div>
</template>

<script>
    export default {
        name: "Person",

        computed: {
            person () {
                const id = this.$route.params.id || 1
                return this.$store && this.$store.state && this.$store.state.persons[id] ? this.$store.state.persons[id] : {name:'Non'}
            }
        },

        data(){
            return {
                counter: 1
            }
        },

        methods: {
            increaseCounter(){
                this.counter++
            }
        }
    }
</script>

<style>
    .person-container {
        padding-top: 10px;
    }
</style>