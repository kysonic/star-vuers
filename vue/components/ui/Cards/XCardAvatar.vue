<template>
    <div class="avatar">
        <div class="in-bevel">
            <img :src="matchAvatar" alt="Avatar">
        </div>
        <div class="circle">
            <svg version="1.1" id="Circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
                <g>
                    <circle class="dashed-circle" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-miterlimit="10" cx="60" cy="60" r="65"></circle>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
    import {AVATARS, DEFAULT_AVATAR} from './avatars'

    export default {
        name: "XCardAvatar",
        props: {
            name: {
                type: String,
                default: ()=>{
                    return 'Luke Skywalker'
                }
            }
        },
        computed:{
            matchAvatar(){
                return AVATARS[this.name] || DEFAULT_AVATAR
            }
        }
    }
</script>

<style scoped>
    .avatar {
        width: 170px;
        height: 170px;
        border-radius: 50%;
        border: 1px solid #fff;
        position: relative;
    }
    .in-bevel {
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        border-radius: 50%;
        border: 1px solid #fff;
        background: transparent;

        position: absolute;
        top:4px;
        left:4px;

        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .in-bevel img {
        max-width: 100%;
        max-height: 100%;
    }
    .dashed-circle {
        stroke-dasharray: 100;
        stroke-dashoffset: 200;
    }
</style>