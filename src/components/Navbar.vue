<template>
  <div class="col-md-6 mx-auto">
    <nav class="navigation mb-3 d-flex justify-content-between">
    <div>
      <router-link :to="{name:'Home'}">Lists</router-link>
    </div>
    <div>
      <router-link :to="{name:'AddList'}">Add List</router-link>
    </div>
  </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .navigation{
    text-align: center;
    font-size: 25px;
  }

  a{
    color: black;
    margin-right: 20px;
    text-decoration: none;
  }

  a:hover{
    color: black;
    
  }

  a.router-link-active{
    text-decoration: underline 2px solid rgb(237, 113, 237);
  }
</style>