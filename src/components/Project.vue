<template>
  <div class="main_bdy">
    <h2>Project</h2>
    <div class="main_poj">
      <div v-for="data in datas" :key="data.id" class="poj">
      <p class="title">{{data.title}}</p>
      <div class="img">
        <img :src="data.img" :alt="data.title">
        <div class="butn">
          <div class="mess">
            <p class="p1">You should be able to:</p>
             <ul>
              <li v-for="desc in data.desc" :key="desc" class="p">
                {{desc}}
              </li>
             </ul>
          </div>
          <div class="bun">
            <span>
              <a :href="data.code" target="_blank">
                <img src="../assets/icon-code.svg" class="me" alt="code">
              </a>
            </span>
            <span>
              <a :href="data.link" target="_blank">
                <img src="../assets/icon-link.svg" alt="link">
              </a>
            </span>
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
  .main_bdy h2{
    padding-left: 20px;
    color: #71dfd4;
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
    margin-bottom: 40px;
    border-bottom: 1px solid #11334d;
    /* box-shadow: 3px 3px 3em rgba(0, 0, 0, 0.9) ; */
  
  }
  .poj .title{
    color: #71dfd4;
  }
  .poj .img{
    position: relative;
    width: 100%;
    height: 80%;
    overflow: hidden;
    border-radius: 10px;
  }
  ul{
    margin: 0;
    padding: 0;
    padding-left: 12px;
  }
  .p{
    font-size: 14.7px;
    color: #378696;
    /* margin: 0; */
    /* padding-left: 30px; */
    line-height: 18px;
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
  .mess{
    position: relative;
    padding: 10px;
  }
  .mess >.p1{
    color: #71dfd4;
  }
 
  .img  .butn .bun{
    position: absolute;
    bottom: -100PX;
    opacity: 1;
    transition: .4s;
    padding-bottom: 4px;
    background: #11334d;
  }
  .img:hover .butn .bun{
    bottom: 0;
    transition-delay: .4s;
  }
 .bun span{
    position: relative;
    padding: 20px 40px;
    display: inline-block;
    cursor: pointer;
    margin-right: 10px;
    border: 2px solid #71dfd4;
    outline: none;
    border-radius: 14px;
    text-align: center;
    background: #71dfd4;
  }
  .bun span img{
    width: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #71dfd4;
  }
  .bun span .me{
    /* fill="#71dfd4" */
    stroke: #71dfd4;
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
  @media screen and (min-width: 768px) {
    .main_poj{
      grid-template-columns: 1fr 1fr;
      column-gap: 2em;
    }
  }
  @media screen and (min-width: 1200px) {
    .main_poj{
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1em;
    }
  }
</style>