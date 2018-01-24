<template>
    <div :class="{card:true,female:person.gender==='female'}">
        <div class="in-bevel">
            <div class="data" v-if="!loading">
                <x-card-avatar :name="person.name"></x-card-avatar>
                <div class="name">{{person.name}}</div>
                <x-card-info :data="person" ></x-card-info>
            </div>
           <div class="loading" v-else>
               LOADING...
           </div>
        </div>
    </div>
</template>

<script>
    import XCardAvatar from './XCardAvatar.vue'
    import XCardInfo from './XCardInfo.vue'
    export default {
        name: "XCard",
        props: {
            person: {
                type: Object,
                default: function () {
                    return { name: 'Luke Skywalker' }
                }
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        components:{
            XCardAvatar,
            XCardInfo
        }
    }
</script>

<style scoped>
    .card {
        width: 325px;
        height: 515px;
        background: linear-gradient(to bottom, #0071bc 30%,#0071bc 30%, #16131b 30%, #16131b 100%);
        border-radius: 10px;
        border: 1px solid #fff;
        box-shadow: 0 0 46px -2px rgba(0,113,188,1);
        position: relative;

        transition: .2s background, .2s box-shadow;
    }
    .card.female {
        background: linear-gradient(to bottom, #C1272D 30%,#C1272D 30%, #16131b 30%, #16131b 100%);
        box-shadow: 0 0 46px -2px #C1272D;

        transition: .2s background, .2s box-shadow;
    }
    .in-bevel {
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        border-radius: 10px;
        border: 1px solid #fff;
        background: transparent;

        position: absolute;
        top:2px;
        left:2px;
        display: flex;
        flex-direction: column;
        align-items: center;

        color: #fff;
    }
    .data {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .avatar {
        margin-top: 60px;
    }
    .name {
        margin-top: 20px;
        font-weight: bold;
        font-size: 24px;
        text-transform: uppercase;
        color: #fff;
    }
    .card-info {
        margin-top: 10px;
    }

</style>