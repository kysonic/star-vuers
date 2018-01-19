<template>
   <div class="about-container">
       ABOUT
   </div>
</template>

<script>
    import titleMixin from '../../mixins/title-mixin'
    export default {
        name: "About",
        mixins: [titleMixin],
        title(){
            return 'About'
        },
        data () {
            return {}
        }
    }
</script>

<style scoped>

</style>