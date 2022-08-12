<template>
  <div class="col-md-6 mx-auto">
   
    <form @submit.prevent="updateList">
      <div class="mb-3">
      <label  class="form-label fs-5">Title</label>
      <input type="text" class="form-control py-3" v-model="title">
      </div>
      <div class="mb-3">
        <label class="form-label fs-5">Details</label>
        <textarea class="form-control" rows="10" v-model="details"></textarea>
      </div>
      <div class="text-center">
        <button class="btn btn-primary px-4 py-2">
          Update List
      </button>
    </div>
    </form>
  </div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            title:"",
            details:""
        }
    },
    mounted(){
        fetch('http://localhost:3000/todoLists/'+this.id)
        .then((response)=>{
            return response.json();
        })
        .then((datas)=>{
            this.title = datas.title;
            this.details = datas.detail;
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    methods:{
        updateList(){
            fetch('http://localhost:3000/todoLists/'+this.id,{
                method: "PATCH",
                headers: {
                    "Content-type" : "application/json"
                },
                body:JSON.stringify(
                    {
                        title:this.title,
                        detail:this.details
                    }
                )
            })
            .then(()=>{
                this.$router.push('/');
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