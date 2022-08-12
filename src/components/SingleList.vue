<template>
  <div class="each-list ms-5 mb-4 d-flex justify-content-between align-items-center" :class="{complete : list.complete}">
    <div>
        <h4 class="mt-3 mb-3" @click="showDetail=!showDetail">{{list.title}}</h4>
        
        <h5 class="ms-3 my-3" v-if="showDetail">
        <i class="bi bi-arrow-right-circle-fill me-3"></i>{{list.detail}}</h5>
    </div>
    <div class="">
        <i class="bi bi-trash-fill pe-2 fs-5" @click="deleteList"></i>
        <router-link :to="{name:'EditList', params:{id:list.id}}">
            <i class="bi bi-pencil-square ps-2 fs-5"></i>
        </router-link>
        <i class="bi bi-check2-square pe-2 fs-5" @click="completeList"></i>
    </div>
  </div>
</template>

<script>
export default {
    props:['list'],
    data(){
        return{
            showDetail:false,
            api:'http://localhost:3000/todoLists/'
        }
    },
    methods:{
        deleteList(){
            let deleteRoute = this.api+this.list.id;
            fetch(deleteRoute,{ method: "DELETE"})
            .then(()=>{
                this.$emit('delete',this.list.id);
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        completeList(){
            let completeRoute = this.api+this.list.id;
            fetch(completeRoute,{
                method: "PATCH",
                headers: {
                    "Content-type" : "application/json"
                },
                body:JSON.stringify(
                    {
                        complete: !this.list.complete
                    }
                )
            })
            .then(()=>{
                this.$emit('complete',this.list.id);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }
}
</script>

<style>
    .each-list{
        border-bottom: 2px solid crimson;
    }
    h4,h5{
        color: rgb(59, 56, 56);
    }
    h4:hover{
        cursor: pointer;
        color: grey;
    }
    i:hover{
        cursor: pointer;
        color: gray;
    }
    .complete{
        border-bottom: 2px solid green;
    }
</style>