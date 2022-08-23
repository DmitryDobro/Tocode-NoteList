<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar-content">
                <a class="navbar-logo" href="/">Logo</a>
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link.alias">
                        <router-link :to="link.url" class="navbar-li">{{link.title}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {links} from "@/_config.js"
export default {
   data(){
        return {
           links:links
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>