<template>
  <div class="loading-wrapper">
    <div class="loading">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Loading",
  }
</script>

<style>
  body {
    overflow: hidden;
  }
  .loading-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #FFF;
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading div {
    display: inline-block;
    width: 50px;
    background: #f2c61d;
    animation: loading-animation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    margin-right: 20px;
  }

  .loading div:nth-child(1) {
    animation-delay: -0.24s;
  }

  .loading div:nth-child(2) {
    animation-delay: -0.12s;
  }

  .loading div:nth-child(3) {
    animation-delay: 0s;
    margin-right: 0;
  }

  @keyframes loading-animation {
    from {
      height: 200px;
    }
    50%, to {
      height: 100px;
    }
  }
</style>
