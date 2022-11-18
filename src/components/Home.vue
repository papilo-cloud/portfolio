<template>
     <div class="about" id="about">
    <div class="pic">
      <img src="../assets/illustration-your-users.svg" alt="abu">
    </div>
    <!-- <a href="#About">About</a> -->
    <div class="txt">
    <h2>About Me</h2>
    <div class="grid">
      <div class="msgs">
        <p>
          I am Abdulrahman Badamasi, a.k.a (Jordan).<br/>
          I'm a Logical and result-driven Web Developer, dedicated to building and optimizing
          users-focused website for customers with various business objectives.
          Enthusiastic and eager to contribute to team success through hardwork, attention to details and excellent organizational skills.
          Motivated to learn, grow and excell in Software Engineering.
        </p>
      </div>
      <div>
        <h4> Educational background</h4> 
        <div class="educ">
          <p>
          An undergraduate in Electrical Engineering,  Ahmadu Bello Unviersity Zaria
          </p>
          <p>National Diploma in Electrical Engineering, federal polytechnic Bauchi</p>
        
        </div>
      
        <h4>
          Experienced
        </h4>
        <div class="exp">
          <p>Html</p>
          <p>CSS</p>
          <p>JS</p>
          <p>React </p>
          <p>Vue</p>
          <p>Vuex</p>
          <p>BootStrap</p>
        </div>
      </div>
      </div>
    </div>
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quam voluptatem, voluptates quae, deleniti repellat, ipsam magnam fuga molestiae culpa eos dignissimos provident totam eaque dolores officiis perspiciatis distinctio? Expedita?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae repellat quidem atque reprehenderit illo perspiciatis consequatur veniam eos eaque laboriosam. Ipsam possimus enim dignissimos perferendis blanditiis magni maiores dicta necessitatibus!

      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quam voluptatem, voluptates quae, deleniti repellat, ipsam magnam fuga molestiae culpa eos dignissimos provident totam eaque dolores officiis perspiciatis distinctio? Expedita?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae repellat quidem atque reprehenderit illo perspiciatis consequatur veniam eos eaque laboriosam. Ipsam possimus enim dignissimos perferendis blanditiis magni maiores dicta necessitatibus!
        
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quam voluptatem, voluptates quae, deleniti repellat, ipsam magnam fuga molestiae culpa eos dignissimos provident totam eaque dolores officiis perspiciatis distinctio? Expedita?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae repellat quidem atque reprehenderit illo perspiciatis consequatur veniam eos eaque laboriosam. Ipsam possimus enim dignissimos perferendis blanditiis magni maiores dicta necessitatibus!
        
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quam voluptatem, voluptates quae, deleniti repellat, ipsam magnam fuga molestiae culpa eos dignissimos provident totam eaque dolores officiis perspiciatis distinctio? Expedita?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae repellat quidem atque reprehenderit illo perspiciatis consequatur veniam eos eaque laboriosam. Ipsam possimus enim dignissimos perferendis blanditiis magni maiores dicta necessitatibus!
        
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quam voluptatem, voluptates quae, deleniti repellat, ipsam magnam fuga molestiae culpa eos dignissimos provident totam eaque dolores officiis perspiciatis distinctio? Expedita?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae repellat quidem atque reprehenderit illo perspiciatis consequatur veniam eos eaque laboriosam. Ipsam possimus enim dignissimos perferendis blanditiis magni maiores dicta necessitatibus!
        
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quam voluptatem, voluptates quae, deleniti repellat, ipsam magnam fuga molestiae culpa eos dignissimos provident totam eaque dolores officiis perspiciatis distinctio? Expedita?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae repellat quidem atque reprehenderit illo perspiciatis consequatur veniam eos eaque laboriosam. Ipsam possimus enim dignissimos perferendis blanditiis magni maiores dicta necessitatibus!
        Hello Woldee...
      </p>
    </div>
  </div>
</template>
 
<script>
export default {
    name:"Home",
    props: {
      abb: String
    },
}
</script>

<style>
     .about{
    position: relative;
    width: 100%;
    margin: 0;
    color: white;
    line-height: 30px;
    padding: 4em 20px;
    padding-bottom: 5em;
  }
  .txt > div{
    margin-bottom: 20px;
    letter-spacing: 0.7px;
  }
  .txt .educ, .txt .msgs{
    background: #11334d;
    padding: 12px;
    border-radius: 10px;
  }
  .txt h4, .txt h2{
    color: #71dfd4;
    text-align: center;
    letter-spacing: 1px;
  }
  .txt h4{
    margin-top: 20px;
  }
  .txt .exp{
    display: flex;
    border-radius: 10px;
    background: #11334d;
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
    .grid{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 10px;
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