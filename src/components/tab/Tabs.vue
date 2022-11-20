<template>
    <div class="mains">
        <header class="head">
            <div>
                <h2>Jordan</h2> 
            </div>
            <nav>
                <button>
                    <img src="/assets/icon-menu.svg" @click="openTabs"  alt="menu">
                </button>
            </nav>
        </header>
        <ul class="tabs">
            <li v-for="(tab, index) in tabs" @click="selecTab(index)"  :key="index">
                <button :class="{active: selectedIndex == index }">
                    {{tab.abb}} 
                     <svg v-if="index == 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="segment-fill mode" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                     <svg v-if="index == 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="segment-fill mode" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                     <svg v-if="index == 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="segment-fill mode" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg> 
                     <svg v-if="index == 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="segment-fill mode" d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm96-96c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"/></svg>
                </button>
            </li>

        </ul> 
        <div>
            <tab ref="home" abb="home">
                <HomeViews @selec-tabs="selecTabs" />
            </tab>
            <tab abb="about" ref="about">
                <Home />
            </tab>
            <tab abb="project" ref="project">
                <Project />
            </tab> 
            <tab abb="contact" ref="contact">
                <contact />
            </tab> 
        </div>
    </div>
  </template>
 
 <script>
import Contact from '../Contact.vue';
import Home from '../Home.vue';
import HomeViews from '../HomeViews.vue';
import Project from '../Project.vue';
import Tab from './Tab.vue';

 export default {
    data() {
        return {
            selectedIndex: 0,
            tabs: [],
        };
    }, 
    created(){
        
    },
    mounted() {
        this.tabs = [this.$refs.home,this.$refs.about,this.$refs.project,this.$refs.contact]
        this.selecTab(2);

    },
    methods: {
        selecTab(i) {
            this.selectedIndex = i;
            this.tabs.forEach((tab, index) => {
                tab.isActive = (index ===i)
            })            
        },
        selecTabs(n){
            this.selectedIndex = n;
            this.tabs.forEach((tab, index) => {
                tab.isActive = (index === n)
            })  
        },
        openTabs() {
            const opn = document.getElementsByClassName('tabs')[0];
            opn.classList.toggle('show');
        }
    },
    components: { Tab, HomeViews, Home, Project, Contact }
}
 </script>
 
 <style scoped>
  .head{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000000;
    display: flex;
    justify-content: space-between;
    padding: 18px;
    background: #061528;
    /* color: white; */
  }
  .head h2{
    color: #71dfd4;
  }
  button{
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    padding: 4px;
  }
  button:hover{
    border: 1px dashed #44c1f3;
  }
  .mains{
    position: relative;
    width: 100%;
    margin: 0;
    height: 100vh;
  }
  .tabs{
    position: absolute;
    position: fixed;
    bottom: -100px;
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin: 0;
    padding: 8px 0;
    width: 100%;
    background: #11334d;
    border-radius: 20px 20px 0 0 ;
    transition: all .3s;
    z-index: 100000;
  }
 
  .show{
    bottom: 0;
  }
  .tabs li{
    position: relative;
  }
  .tabs li button{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px ;
    padding: 12px;
  }
  button{
    color: white;
  }
  .active{
    border: 1px solid #71dfd4;
    color: #71dfd4;
}
.active li button{
  color: #71dfd4;
}
  .tabs li svg{
    margin-top: 4px;
    width: 20px;
    height: 20px;
  }
 
  .tabs li svg .segment-fill{
    fill: azure;
  }
  .tabs li .active svg .mode{
    fill: #71dfd4;
  }
 </style>