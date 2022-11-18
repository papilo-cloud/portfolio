<template>
  <div class="main_bdy">
    <div class="main_poj">
      <div v-for="data in datas" :key="data.id" class="poj">
      <p>{{data.title}}</p>
      <div class="img">
        <img :src="data.img" :alt="data.title">
      </div>
      <div class="lis">
        <p>Tag:</p>
        <p v-for="tag in data.tag" :key="tag"> {{tag}}</p>
      </div>
    </div>
    </div>
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
  mounted(){
    const x = this.datas.filter(x => x.tag)
    console.log(x.map(x => x.tag))
  }
}
</script>

<style scoped>
  .main_bdy{
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
    padding-top: 4.9em;
    min-height: 100vh;
  }
  .main_poj{
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px;
  }
  .poj{
    position: relative;
    width: 100%;
    min-height: 300px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .poj .img{
    position: relative;
    width: 100%;
    height: 80%;
    overflow: hidden;
    border-radius: 10px;
  }
  .img img{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .poj .lis{
    position: relative;
    display: flex;
    width: 100%;
    height: 30px;
    padding: 12px;
  }
  .lis p{
    margin-right: 10px;
  }
  .poj p{
    color: white;
    /* margin-bottom: 10px; */
  }
</style>