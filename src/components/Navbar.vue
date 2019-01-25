<template>
  <nav class="navbar">
    <router-link :to="'/'" class="navbar-brand" tag="div">
      <img class="logo" src="../assets/images/logo.svg" alt="logo">
      <span class="title">Planther</span>
    </router-link>
    <div class="navbar-menu">
      <div v-if="login">
        <span class="menu-item">{{user.username}}님 환영합니다.</span>
        <span class="menu-item" @click="signOut">로그아웃</span>
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
  import router from '@/router';

  export default {
    name: 'Navbar',
    computed: {
      login() {
        return this.$store.getters.isLogin
      },
      user() {
        return this.$store.getters.userData
      }
    },
    components: {LoginModal, RegisterModal},
    methods: {
      showLogin() {
        this.$root.$emit('show-login');
      },
      showRegister() {
        this.$root.$emit('show-register');
      },
      signOut() {
        this.$store.dispatch('signOut').then(_ => {
          alert("로그아웃되었습니다.");
          router.go(0);
        });
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

