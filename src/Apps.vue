<template>
  <div class="app">
    <!-- <SidebarComponent /> -->
    <Tabs />
  </div>  
</template>

<script>
import SidebarComponent from './components/sidebarComponent.vue';
import Tabs from './components/tab/Tabs.vue';

export default {
    name: "Apps",
    components: { SidebarComponent, Tabs, Tabs }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    position: relative;
    width: 100%;
    margin: 0;
    background: #061528;
    font-family:'Jost', sans-serif;
  }
  html{
    scroll-behavior: smooth;
  }
  .main-container{
    width: min(1200px, 100%);
    margin-inline: auto;
  }
  @media (max-width: 75em){
    .main-container{
        width: min(779px, 100%);
    }
  }
</style>