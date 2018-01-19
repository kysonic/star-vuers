<template>
    <header>
        <div class="left">
            <a class="item" href="https://github.com/vuejs/awesome-vue">Vue</a>
        </div>
        <div class="right">
            <ul class="list">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    header {
        display: grid;
        grid-template-columns: 25% auto 25%;
        grid-template-rows: 100%;
    }

    .container header .left {
        grid-column: 1/2;
        display: flex;
        align-items: center;

        margin-left: 15%;
    }

    .container header .right {
        grid-column: 3/4;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .list {
        list-style: none;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-around;
    }


    .item, li a {
        color: #fff;
        font-weight: 100;
        font-size: 18px;
        text-decoration: none;
    }

    .item:hover, li a:hover {
        text-decoration: underline;
    }
</style>