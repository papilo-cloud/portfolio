<template>
  <div>
    <SidebarComponent />
    <home-views />
  </div>  
</template>

<script>
import SidebarComponent from './components/sidebarComponent.vue';
import HomeViews from './components/HomeViews.vue';

export default {
    name: "Apps",
    components: { SidebarComponent, HomeViews }
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
    background: #10141E;
    font-family:'ABeeZee', sans-serif;
  }
</style>