<template>
    <div class="footer">
         <div class="container">
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link.alias">
                        <router-link :to="link.url" class="navbar-li">{{link.title}}</router-link>
                    </li>
                </ul>
            
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