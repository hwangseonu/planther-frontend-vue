<template>
  <div id="main">
    <navbar></navbar>
    <div class="page-header">
      <div class="title-wrapper">
        <p class="page-title">Planther</p>
        <p class="page-description">소중한 우리들의 일정을 위한 서비스</p>
        <button>Go to calendar</button>
      </div>
    </div>
    <div class="page-section">
    </div>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar';

  export default {
    name: 'Main',
    components: {Navbar}
  }
</script>

<style>
  #main {
    width: 100%;
    min-height: 100vh;
    background: url("../assets/images/background.png") no-repeat center center fixed;
    background-size: cover;
  }

  .page-header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .title-wrapper {
    margin-top: 70px;
    margin-left: 12.6vw;
    color: #FFF;
  }

  .page-title {
    font-size: 4em;
    font-weight: bold;
  }

  .page-description {
    font-weight: lighter;
  }

  .title-wrapper button {
    margin-top: 1em;
    width: 200px;
    height: 50px;
    background-color: #f2c61d;
    border-radius: 30px;
    font-size: 1.3em;
    color: #FFF;
  }

  .page-section {
    width: 100%;
    height: 70vh;
    background-color: #FFF;
  }
</style>
