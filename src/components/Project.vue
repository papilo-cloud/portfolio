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
            <p>You should be able to:</p>
             <ul>
              <li v-for="desc in data.desc" :key="desc" class="p">
                {{desc}}
              </li>
             </ul>
          </div>
          <div class="bun">
            <button>
              <a :href="data.code" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
              </a>
            </button>
            <button>
              <a :href="data.link" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
              </a>
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
    color: azure;
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
 .bun button{
  color: #000;
    padding: 12px 20px;
    cursor: pointer;
    margin-right: 10px;
    border: 2px solid #71dfd4;
    outline: none;
    border-radius: 14px;
    background: #71dfd4;
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