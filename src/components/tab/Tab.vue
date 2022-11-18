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
        transition: all .3s ease-out;
        /* transition-timing-function: cubic-bezier(0.7, 0.17, 0.35, .8); */
    }
    .show-leave-to {
        opacity: 0;
        /* visibility: hidden; */
        transform: translateY(40px);
    }
    .show-enter-form{
        opacity: 0;
        transition-delay: .2s;
        transform: translateY(-40px);
        /* animation: anime 2s ; */
    }
    @keyframes anime{
        0%{ opacity: 0;transform: translateY();}
    }
   
</style>