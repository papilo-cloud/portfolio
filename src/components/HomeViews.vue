<template>
  <div class="main-container">
 <div class="bdy">
  <div class="main">
    <img src="../assets/illustration-flowing-conversation.svg" alt="background-image" >
    <div class="msg">
      <p>Hello I am</p>
      <h2>Jordan Abdul</h2>
      <p>A Frontend Web Developer</p>
      <!-- <button @click="$emit('selecTabs', 3)">Hire me</button> -->
      <button>
        <a href="mailto:abdulrahmanbadamasi123@gmail.com">Hire me</a>
      </button>
    </div>
  </div>
 </div>
 </div>
</template>

<script>

export default {
  
    props: {
      abb: String
    },
   
} 
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  .bdy{
    position: relative;
    margin: 0;
    padding: 0;
    /* padding-bottom: 5em; */
    width: 100%;
    /* min-height: 100vh; */
  }
  a{
    text-decoration: none;
    color: inherit;
  }
 
  .main{
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    /* margin-bottom: 2em; */
  }
  .main img{
    position: absolute;
    left: 0;
    top: 0;
    top: 10%;
    width: 300px;
    margin-inline: auto;
    left: 50%;
    transform: translateX(-50%);
    object-fit: contain;
  }
  .msg{
    position: absolute;
    bottom: 0;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    bottom: 20%;
    color: white;
    line-height: 2.2em;
  }
  .msg p{
    font-size: 1em;
    
  }
  .msg h2{
    font-size: 2em;
    color: #71dfd4;
  }
  button{
    border: none;
    outline: none;
    padding: 10px 28px;
    letter-spacing: 1px;
    margin-top: 10px;
    border-radius: 7px;
    font-size: 1em;
    background: #11334d;
    color: white;
    cursor: pointer;
  }
  .about{
    position: relative;
    width: 100%;
    margin: 0;
    color: white;
    line-height: 30px;
    padding: 20px;
  }
  .txt > div{
    margin-bottom: 20px;
    letter-spacing: 0.7px;
  }
  .txt .educ, .txt .msgs{
    background: rgba(0, 0, 0, 0.3);
    padding: 12px;
    border-radius: 10px;
  }
  .txt h4, .txt h2{
    color: #44c1f3;
    text-align: center;
    letter-spacing: 1px;
  }
  .txt .exp{
    display: flex;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);
    flex-wrap: wrap;
  }
  .txt .exp p{
    flex: 1;
    padding: 12px;
    /* background: #1e2238; */
  }
  .pic{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 14px;
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
  @media screen and (min-width: 768px) {
    .bdy{
      margin-top: 4.9em;
    }
    .grid{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 10px;
    }
    .main img{
      width: 500px;
      top: 10%;
    }
    .msgs{
      margin-top: 30px;
    }
  } 
  @media screen and (min-width: 1000px) {
    .grid{
      display: unset;
      /* grid-template-columns: repeat(2, 1fr);
      column-gap: 10px; */
    }
    .about{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 30px;
      padding: 8px 40px;
    }
  }
  @media screen and (max-width: 770px) {
    .pic{
    display: none;
    }
  }
</style>