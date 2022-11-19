<template>
  <div>
    <Transition name="show" appear="">
        <div v-show="isActive" >
            <slot></slot>
        </div>
    </Transition>
  </div>
</template> 
 
<script>
export default { 
    props:{
        abb: String,
        title:{  
            type: String,
            default: 'Tab'
        }
    },
    data(){ 
        return {
            isActive: true
        }
    }
}
</script>

<style scoped>
    .show-enter-active, .show-leave-active {
        transition: all .4s linear;
        /* transition-timing-function: cubic-bezier(0.7, 0.17, 0.35, .8); */
    }
    .show-enter,.show-leave-to {
        /* opacity: 0; */
        transform: translateY(100px);
    }
    /* form */
</style>