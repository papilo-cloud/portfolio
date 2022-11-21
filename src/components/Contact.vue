<template>
  <div class="contact">
    <h2>Contact </h2>
    <div>
      <form @submit.prevent="onSubmit">
        <label for="name"></label>
        <input type="text" id="name" placeholder="Name">
        <label for="mail"></label>
        <input type="email" name="" id="mail" placeholder="Email">
        <label for="mss"></label>
        <textarea name="mss" rows="4" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div> 
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      alert('Still under construction')
    }
  }
}
</script>

<style scoped>
  .contact{
    position: relative;
    width: 100%;
    padding-top: 4em;
  }
  .contact h2{
    color: #71dfd4;
    text-align: center;
  }
  .contact > div{
    padding: 3em;
  }
  form{
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    padding-bottom: 40px;
  }
  label{
    color: #178696;
  }
  input, textarea {
    width: 100%;
    padding: 12px;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid #71dfd4 ;
    color: #178696;
  }
  input::placeholder, textarea::placeholder{
    color: #178696;
  }
  .contact button{
    position: absolute;
      left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    border: none;
    outline: none;
    padding: 12px 24px;
    background: #11334d;
    color: #178696;
    border-radius: 10px;
    border: 1px solid #178696 ;
  }
  @media screen and (min-width: 768px) {
    .contact > div{
      width: 768px;
      position: absolute;
      left: 50%;
      /* top: 50%; */
      transform: translateX(-50%);
    }
  }
</style>