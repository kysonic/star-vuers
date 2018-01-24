<template>
   <div class="about-container">
       <div class="two-columns">
           <div class="left">
               <div class="title">About</div>
               <div class="description">
                   <a href="https://github.com/kysonic/star-vuers.git" title="StarVuers">Star Vuers</a> it's a boilerplate for your isomorphic
                   Vue2 + Koa2 projects. The main branch of the repo contains all required for basic app based on Vue with SSR.
               </div>
           </div>
           <div class="right">
               <div class="title">Features</div>
               <div class="description">
                   <ul>
                       <li>1. Koa 2 + Vue 2 + SSR</li>
                       <li>2. Hot Module Reloading</li>
                       <li>3. Caching</li>
                       <li>4. Optimized for production</li>
                   </ul>
               </div>
           </div>
       </div>
       <div class="title">Getting started</div>
       <div class="two-columns">
           <div class="left">
               <p>Clone repo:</p>
               <code>git clone https://github.com/kysonic/star-vuers.git
                   cd ./iso2vue2koa2
                   yarn run init</code>
               <p>Development mode:</p>
               <code>yarn run dev</code>
           </div>
           <div class="right">
               <p>Enable caching</p>
               <code>yarn run dev:cache</code>
               <p>Build for production:</p>
               <code>yarn run build</code>
               <p>Start app in production mode:</p>
               <code>yarn start</code>
           </div>
       </div>
       <div class="two-columns">
           <div class="left">
               <div class="title">Todos:</div>
               <div class="description">
                   <ul>
                       <li>1. Api layer for MongoDB, Neo4j, PostgreSQL</li>
                       <li>2. Pre processors: Stylus, Sass, Less</li>
                       <li>3. Testing</li>
                       <li>4. Linting</li>
                   </ul>
               </div>
           </div>
           <div class="right">
               <div class="title">Contributing:</div>
               <div class="description">
                   <ul>
                       <li>1. Fork the repo</li>
                       <li>2. Crate new brunch called according your basic idea. For instance: 'mongodb-api-layer'</li>
                       <li>3. Write your code</li>
                       <li>4. Submit your pull request</li>
                   </ul>
               </div>
           </div>
       </div>

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
    .about-container {
        color: #fff;
        padding-bottom: 40px;
    }
    .title {
        font-size: 24px;
        font-weight: bold;
        margin: 15px 0;
        color: #0071bc;


    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul li {
        padding: 5px 0;
    }
    a {
        color: #C1272D;
    }
    .two-columns {
        display: flex;
        justify-content: space-between;
    }
    p {
        color: #C1272D;
    }
    code {
        white-space: pre-line;
        padding: 3.5px 0px;
        background: rgba(256,256,256,0.2);
    }
    .description {
        max-width: 350px;
    }
    .left, .right {
        width: 50%;
    }
    .right {
        margin-left: 10px;
    }
</style>