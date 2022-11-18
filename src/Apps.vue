<template>
  <div>
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
    font-family:'ABeeZee', sans-serif;
  }
  html{
    scroll-behavior: smooth;
  }
</style>