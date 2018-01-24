<template>
    <header>
        <div class="left">
            <a class="item vue-link" href="https://github.com/vuejs/awesome-vue">Vue</a>
            <div class="logo">
                <img src="../../assets/img/star-vuers-logo.svg" alt="Star Vuers Logo">
            </div>
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
    .logo {
        display: none;
        width: 100%;
        height: 100%;
        max-width: 120px;
        max-height: 55px;
    }
    .logo img {
        max-width: 100%;
        max-height: 100%;
    }
    @media (max-width: 1367px) {
        .logo {
            display: block;
        }
        .vue-link {
            display: none;
        }
        .container header .left {
            margin-left: 20px;
        }
    }
</style>