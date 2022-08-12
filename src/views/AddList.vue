<template>
  <div class="col-md-6 mx-auto">
   
    <form @submit.prevent="addList">
      <div class="mb-3">
      <label  class="form-label fs-5 ">Title</label>
      <input type="text" class="form-control py-3" v-model="title">
      </div>
      <div class="mb-3">
        <label class="form-label fs-5">Details</label>
        <textarea class="form-control" rows="6" v-model="details"></textarea>
      </div>
      <div class="text-center">
        <button class="btn btn-primary px-4 py-2">
          Add List
      </button>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:"",
      details:""
    }
  },
  methods:{
    addList(){
      fetch('http://localhost:3000/todoLists',{
        method: "POST",
        headers:{
          "Content-type" : "application/json"
        },
        body:JSON.stringify(
          {
            title : this.title,
            detail : this.details,
            complete : false
          }
        )
      })
      .then(()=>{
        this.$router.push("/");
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>

<style>


</style>