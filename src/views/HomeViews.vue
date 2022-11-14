<template>
 <div v-for="data in datas" :key="data.id" >
    <p>{{data.name}}</p>
    <img :src="data.img" alt="">
 </div>
</template>

<script>
import data from '../data/apps.js'

export default {
    data() {
      return{
        datas: [...data]
      }
    },
    mounted() {
      console.log(this.datas)
      
    }
}
</script>

<style scoped>

</style>