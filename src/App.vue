<template>
    
    <div class="header pt-5">
        <h1 class="text-center animate__animated animate__zoomIn">To Do Lists</h1>
    </div>
    <Navbar></Navbar>
  <router-view/>
  
</template>
<script>
import Navbar from './components/Navbar.vue'
export default{
  components:{
    Navbar
  }
}
</script>
<style>
  #app{
    width: 100%;
    height: 1000px;
    background-image: linear-gradient(#C193C5,#7BC6CC);
  }

  .header{
        color: black;
        word-spacing: 1px;
        font-size: 50px;
  }


</style>
