<template>
    <div :class="{'card-button':true,'disabled':disabled}"></div>
</template>

<script>
    export default {
        name: "XCardButton",
        props: {
            disabled: {
                type:Boolean,
                default: ()=>false
            }
        }
    }
</script>

<style scoped>
    .card-button {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        border: 1px solid #fff;
        background: url('../../../assets/svg/arrow.svg') no-repeat, #221E28;
        background-size: 30%;
        background-position: 30px 50%;
        cursor: pointer;
        transition: .2s background;
    }
    .card-button:hover {
        background: url('../../../assets/svg/arrow.svg') no-repeat, #2d2934;
        background-size: 40%;
        background-position: 25px 50%;
        transition: .2s background;
    }
    .card-button.disabled {
        opacity: 0.4
    }
    .card-button.right {
        transform: rotate(180deg);
    }
</style>