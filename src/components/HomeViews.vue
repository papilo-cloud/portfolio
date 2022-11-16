<template>
 <div class="bdy">
  <div class="main">
    <img src="../assets/illustration-flowing-conversation.svg" alt="">
    <div class="msg">
      <p>Hello I am</p>
      <h1>Jordan Abdul</h1>
      <p>A Frontend Web Developer</p>
      <button>Hire me</button>
    </div>
  </div>
  <div class="about">
    <div class="pic">
      <!-- <img src="../assets/illustration-your-users.svg" alt="abu"> -->
    </div>
    <!-- <a href="#About">About</a> -->
    <h2>About</h2>
    <div class="txt">
      <div>
        <p>
          Logical and result-driven Web Developer, dedicated to building and optimizing
          users-focused website for customers with various business objectives.
          Enthusiastic and eager to contribute to team success through hardwork, attention to details and excellent organizational skills.
          Motivated to learn, grow and excell in Software Engineering.
        </p>
      </div>
      <div>
        <h4> Educational background</h4>
        <p>
          An undergraduate in Electrical Engineering,  Ahmadu Bello Unviersity Zaria
        </p>
        <p>National Diploma in Electrical Engineering, federal polytechnic Bauchi</p>
      </div>
      <div>
        <h4>
          Experienced
        </h4>

      </div>
    </div>
  </div>
  <!-- <div v-for="data in datas" :key="data.id" class="main_bdy">
    <p>{{data.name}}</p>
    <img :src="data.img" alt="">
  </div> -->
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
    mounted() {
      console.log(this.datas)
      
    }
}
</script>

<style scoped>

  .bdy{
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
  }
  .main{
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
  }
  .main img{
    position: absolute;
    left: 0;
    top: 0;
    /* bottom: 10%; */
    width: 100%;
    height: 80%;
    object-fit: contain;
  }
  .msg{
    position: absolute;
    bottom: 0;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    /* bottom: 7%; */
    color: white;
    line-height: 30px;
  }
  .msg h1{
    color: #44c1f3;
  }
  button{
    border: none;
    outline: none;
    padding: 8px 18px;
    letter-spacing: 1px;
    border-radius: 7px;
    background: #44c1f3;
    color: white;
  }
  .about{
    position: relative;
    width: 100%;
    margin: 0;
    color: white;
    line-height: 30px;
    padding: 20px;
  }
  .pic{
    position: relative;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    border-radius: 14px;
    display: none;
  }
  .pic img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
  .me{
    color:hsl(192, 100%, 9%),
     hsl(207, 100%, 98%),  hsl(0, 100%, 63%), #4487f3
  }
</style>