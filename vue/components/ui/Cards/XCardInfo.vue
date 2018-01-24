<template>
    <div :class="{'card-info':true,female:data.gender==='female'}">
        <div class="left">
            <div class="item">
                <div class="prop">GENDER</div>
                <div class="value">{{data.gender}}</div>
            </div>
            <div class="item">
                <div class="prop">DIMENTIONS</div>
                <div class="value">Height: {{data.height}}</div>
                <div class="value">Mass: {{data.mass}}</div>
            </div>
            <div class="item">
                <div class="prop">BIRTH YEAR</div>
                <div class="value">{{data.birth_year}}</div>
            </div>
        </div>
        <div class="separator"></div>
        <div class="right">
            <div class="item">
                <div class="prop">EYES COLOR</div>
                <div class="value">{{data.eye_color}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "XCardInfo",
        props: {
            data: {
                type: Object,
                default: ()=>{
                    return {
                        birth_year: "XXX",
                        eye_color: "XXX",
                        gender: "XXX",
                        hair_color:"XXX",
                        mass:"XXX",
                        height:"XXX"
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .card-info{
        width: 210px;
        height: auto;

        position: relative;

        display: flex;
        color: #fff;
    }
    .item {
        margin-top: 10px;
    }
    .item:first-child {
        margin-top: 0;
    }
    .item .prop {
        color: #66AAD7;
    }
    .female .item .prop {
        color: #C1272D;
    }
    .right {
        margin-left: 20px;
    }
    .separator {
        position: absolute;
        width: 2px;
        height: 100%;
        background: #66AAD7;

        left: 50%;
        top:0;
    }
    .female .separator {
        background: #C1272D;
    }
    .value {
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>