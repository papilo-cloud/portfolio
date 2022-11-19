<template>
  <div class="main_bdy">
    <div class="main_poj">
      <div v-for="data in datas" :key="data.id" class="poj">
      <p>{{data.title}}</p>
      <div class="img">
        <img :src="data.img" :alt="data.title">
        <div class="butn">
          <div class="mess">
            <p>Your users should be able to:</p>
              <p v-for="desc in data.desc" :key="desc" class="p">
                {{desc}}
              </p>
          </div>
          <div class="bun">
            <button>
              <a :href="data.code" target="_blank">Code</a>
            </button>
            <button>
              <a :href="data.link" target="_blank">Link</a>
            </button>
          </div>
        </div>
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
  .p{
    font-size: 13px;
    margin: 0;
    padding: 0;
    line-height: 12px;
  }
  .img img{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .img .butn{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    bottom: -300px;
    display: flex;
    padding-left: 12px;
    background: #11334d;
    transition: .4s;
  }
  .img:hover .butn{
    bottom: 0;
  }
 
  .img  .butn .bun{
    position: absolute;
    bottom: -100PX;
    opacity: 1;
    transition: .4s;
    background: #11334d;
  }
  .img:hover .butn .bun{
    bottom: 0;
    transition-delay: .4s;
  }
 .bun button{
  color: #000;
    padding: 12px 20px;
    cursor: pointer;
    margin-right: 10px;

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
    margin-bottom: 10px;
  }
</style>