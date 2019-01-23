<template>
  <nav class="navbar">
    <router-link :to="'/'" class="navbar-brand" tag="div">
      <img class="logo" src="../assets/images/logo.svg" alt="logo">
      <span class="title">Planther</span>
    </router-link>
    <div class="navbar-menu">
      <div v-if="login">
        <span class="menu-item">{{user.username}}님 환영합니다.</span>
        <span class="menu-item" @click="$store.dispatch('signOut')">로그아웃</span>
      </div>
      <div v-else>
        <span class="menu-item" @click="showLogin">로그인</span>
        <span class="menu-item" @click="showRegister">회원가입</span>
      </div>
    </div>
    <login-modal></login-modal>
    <register-modal></register-modal>
  </nav>
</template>

<script>
  import LoginModal from './LoginModal';
  import RegisterModal from './RegisterModal';

  export default {
    name: 'Navbar',
    computed: {
      login: function () {
        return this.$store.getters.isLogin
      },
      user: function () {
        return this.$store.getters.userData
      }
    },
    components: {LoginModal, RegisterModal},
    methods: {
      showLogin: function () {
        this.$root.$emit('show-login');
      },
      showRegister: function () {
        this.$root.$emit('show-register');
      }
    }
  }
</script>

<style>
  .navbar {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #f2c61d;
  }

  .navbar-brand {
    font-weight: bold;
    font-size: 1.3em;
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

