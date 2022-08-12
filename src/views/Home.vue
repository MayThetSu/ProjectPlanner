<template>
  <FilterNav @filter="current=$event" :current="current"></FilterNav>
    <div class="col-12 col-lg-6 mx-auto">
        <div class="card shadow">
        <div class="card-body">
            <h2 class="card-title ps-3 pt-3">Lists</h2>
            <div v-for="list in filtered" :key="list.id">
                <SingleList :list="list" @delete="deleteList" @complete="completeList"></SingleList>
            </div>
            
        </div>
    </div>
    </div>
    
</template>

<script>
import FilterNav from '../components/FilterNav'
import SingleList from '../components/SingleList'
export default {
  components: {
    FilterNav, SingleList },
  data(){
    return{
      lists:[],
      current:"all"
    }
  },
  mounted(){
    fetch('http://localhost:3000/todoLists')
    .then((response)=>{
      return response.json();
    })
    .then((datas)=>{
      this.lists=datas;
    })
    .catch((error)=>{
      console.log(error)
    })
  },
  methods:{
    deleteList(id){
      this.lists=this.lists.filter(list=>{
        return list.id!=id;
      })
    },
    completeList(id){
      let findList=this.lists.find(list=>{
        return list.id===id;
      })
      findList.complete =! findList.complete;
    }
  },
  computed:{
    filtered(){
      if(this.current==='complete'){
        return this.lists.filter(list=>{
          return list.complete;
        })
      }
      if(this.current==='ongoing'){
        return this.lists.filter(list=>{
          return !list.complete;
        })
      }
      return this.lists;
    }
  }  

}
</script>

<style>

    .card-title{
        color: black;
        letter-spacing: 0px;
    }
</style>