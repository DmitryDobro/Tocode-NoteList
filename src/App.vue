<template>
<div class="wrapper">
      <Header></Header>
       <div class="wrapper-content"> 
    <div class="container">
        <router-view></router-view>
    </div>
    
    </div>

    <Footer></Footer>

</div>


</template>

<script>
import Header from "./components/MyHeader"
import Footer from "@/components/MyFooter"
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="scss">

</style>
