<template>
 <div class="text-center my-3">
    <button class="btn btn-outline-light px-4 me-3" @click="filter('all')">all</button>
    <button class="btn btn-outline-light px-4 me-3" @click="filter('complete')">done</button>
    <button class="btn btn-outline-light px-4 me-3" @click="filter('ongoing')">ongoing</button>
 </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:['current'],
    methods:{
        filter(value){
            this.$emit('filter',value);
        }
    }
}
</script>

<style>
   button{
    text-transform: uppercase;
   }
</style>