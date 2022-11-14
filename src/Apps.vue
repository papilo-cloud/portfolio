<template>
  <div>
  <SidebarComponent />
    <router-view></router-view>
  </div>  
</template>

<script>
import SidebarComponent from './components/sidebarComponent.vue';

export default {
    name: "Apps",
    components: { SidebarComponent }
}
</script>

<style>

</style>