<template>
  <div class="main_bdy">
    <div class="main1">
    <h2>Project <span>portfolio</span></h2>
    <div class="buns">
          <div>
            <button class="bun1" @click="showFilter">filter <span> by category</span><img class="ims" src="../assets/icon-arrow-down.svg" alt=""></button>
            <div class="asses" v-if="filter">
              <label for="all">
                <input type="radio" name="bunn" v-model="pick" value="all" id="all"> all
                <span class="span"></span>
              </label>
              <div v-for="(shows, x) in showFilters" :key="x">
              <label :for="x">
                <input type="radio" name="bunn" v-model="pick" :value="shows" :id="x"> {{shows}}
                <span class="span"></span>
              </label>
            </div>
            </div>
          </div>
      </div>
    </div>
    <div class="main_poj">
      <div v-for="data in showDatas" :key="data.id" class="poj">
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
              <span class="span1">
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
        datas: [...data],
        show: false,
        filter: false,
        pick: 'all'
      }
  },
  computed: {
    showFilters(){
      const shw =  this.datas
      const ans = [...new Set(shw.map(x => x.category)) ]
      return ans
    },
    showDatas(){
      // let data =  this.datas
      if( this.pick == 'all'){
        return this.datas
      }
        return this.datas.filter(x => x.category === this.pick)
    }
  },
  methods: {
    showFilter() {
      this.filter = !this.filter;
      const x = document.querySelector('.ims')
      x.classList.toggle('imss')
    }
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
  .main_bdy h2{
    color: #71dfd4;
  }
  .main_bdy h2 span{
    color: #178696;
  }
  .main_bdy .main1{
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  /* ile */
  .buns{
      position: relative;
      transition: .4s;
    }
    .buns .bun1{
      color: #71dfd4;
      cursor: pointer;
      letter-spacing: 1px;
      font-size: 14px;
      padding: 12px;
      outline: none;
      border: 1px solid #71dfd4;
      background: #11334d;
      border-radius: 10px;
    }
    .bun1 img{
      margin-left: 10px;
    }
     .imss{
      /* position: absolute; */
      transform: rotate(180deg);
      transition: .4s;
      /* padding: 10px;
      background: white; */
    }
    .asses{
      background: #061528;
      position: absolute;
      padding: 20px 10px;
      left: -20px;
      top: 48px;
      transition: .4s;
      z-index: 1;
      border-radius: 8px;
      box-shadow: inset 3px 3px 2px rgba(249, 249, 249, 0.1), inset -3px -3px 2px rgba(249, 249, 249, 0.1) ;
      color: #178696;
    }
    .asses label{
      position: relative;
      cursor: pointer;
      padding-left: 40px;
      display: block;
      margin-bottom: 10px;
    }
     label input{
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
      /* margin-bottom: 10px; */
    }
     label .span{
      width: 20px;
      height: 20px;
      border-radius: 10%;
      /* display: inline-block; */
      position: absolute;
      left: 0;
      top: 0;
      border:1px solid #11334d;
    }
     label input:checked ~ .span::after{
      content: '';
      position: absolute;
      width: 4px;
      height: 12px;
      left: 7px;
      border-bottom:1px solid #71dfd4;
      border-right: 1px solid #71dfd4;
      transform: rotate(40deg);
    }
    label input:checked ~ .span{
      background: #11334d;
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
    margin-bottom: 5em;
    border-bottom: 1px solid #11334d;
    /* box-shadow: 3px 3px 3em rgba(0, 0, 0, 0.9) ; */
  
  }
  .poj .title{
    /* color: rgba(249, 249, 249, 0.9) ; */
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
    color: #178696;
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
    padding: 18px 40px;
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
    color: #178696;
    margin-right: 10px;
  }
  .lis p:nth-child(1){
    color: rgba(249, 249, 249, 0.9);
    color: #71dfd4;
  }
  .poj p{
    margin-bottom: 10px;
  }
  
  @media screen and (max-width: 767px) {
    .bun1 span{
      display: none;
    }
   
  }
  @media screen and (min-width: 768px) {
    .main_poj{
      grid-template-columns: 1fr 1fr;
      column-gap: 2em;
    }
    .asses{
      left: 0;
    }
  }
  @media screen and (min-width: 1200px) {
    .main_poj{
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1em;
    }
  }
</style>