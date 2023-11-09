<template>
  <div class="main-container">
  <header class="head">
    <div>
      <h3>Jordan</h3> 
    </div>
    <nav>
      <button class="menu">
        <img src="../assets/icon-menu.svg" alt="menu">
      </button>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">project</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  </header>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped> 
  .head{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    padding: 18px;
    color: white;
  }
  button{
    border: none;
    outline: none;
    background: transparent;
  }
 
</style>