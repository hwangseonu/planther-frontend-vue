<template>
  <nav class="navbar">
    <a href="/">
      <div class="navbar-brand">
        <img class="logo" src="../assets/images/logo.svg" alt="logo">
        <span class="title">Planther</span>
      </div>
    </a>
    <div class="navbar-menu">
      <div v-if="login">
        <span class="menu-item">{{username}}님 환영합니다.</span>
        <span class="menu-item">로그아웃</span>
      </div>
      <div v-else>
        <span class="menu-item" @click="loginClick">로그인</span>
        <span class="menu-item">회원가입</span>
      </div>
    </div>
    <login-modal></login-modal>
  </nav>
</template>

<script>
  import LoginModal from './LoginModal';
  export default {
    name: 'Navbar',
    components: {LoginModal},
    methods: {
      loginClick: function () {
        this.$root.$emit('login-click')
      }
    },
    data() {
      return {
        login: '',
      }
    }
  }
</script>

<style>
  .navbar {
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: #f2c61d;
  }

  .navbar-brand {
    font-weight: bold;
    font-size: 2em;
    color: #000;
    margin-left: 2.5vw;
    cursor: pointer;
  }

  .navbar-brand .logo {
    height: 30px;
  }

  .navbar-menu {
    flex: 0 0 auto;
    margin-left: auto;
    margin-right: 2.5vw;
  }

  .navbar-menu .menu-item {
    font-weight: bold;
    margin-left: 20px;
    cursor: pointer;
  }
</style>

