<template>
    <div class="person-container">{{person.name}}</div>
</template>

<script>
    export default {
        name: "Person",

        computed: {
            person () {
                const id = this.$route.params.id || 1
                return this.$store && this.$store.state && this.$store.state.persons[id] ? this.$store.state.persons[id] : {name:'Non'}
            }
        }
    }
</script>

<style scoped>

</style>