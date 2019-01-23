<template>
  <div v-if="visible" class="login-wrapper" @click.self="close">
    <div class="login-modal">
      <div class="login-header">
        <p class="login-title">로그인</p>
        <i class="login-close fas fa-times" @click="close"></i>
      </div>
      <div class="login-form" @keypress.enter="login">
        <input v-model="username" title="username" placeholder="Username">
        <input v-model="password" title="password" placeholder="Password" type="password">
        <button class="login-button" @click="login">로그인</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginModal",
    data() {
      return {
        visible: false,
        username: '',
        password: ''
      }
    },
    mounted: function () {
      this.$root.$on('show-login', () => this.visible = true)
    },
    methods: {
      close: function () {
        this.username = this.password = '';
        this.visible = false
      },
      login: function () {
        if (this.username === '' || this.password === '') {
          alert("빈칸이 있습니다.");
        } else {
          this.$store.dispatch('signIn', {
            username: this.username,
            password: this.password
          }).then(_ => this.username = this.password = '')
        }
      },
    }
  }
</script>

<style>
  .login-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .login-modal {
    padding: 30px;
    width: 600px;
    background-color: #FFF;
    border-radius: 30px;
  }

  .login-header {
    display: flex;
    align-items: center;
    cursor: default;
  }

  .login-title {
    font-weight: bold;
    font-size: 2em;
  }

  .login-close {
    font-size: 2em;
    color: #AAA;
    flex: 0 1 auto;
    margin-left: auto;
    cursor: pointer;
  }

  .login-close:hover {
    color: #1f1f1f;
  }

  .login-form {
    margin-top: 3%;
    height: 100%;
  }

  .login-form input {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 1.3em;
    font-weight: bold;
  }

  .login-form .login-button {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    background: #f2c61d;
    font-weight: bold;
    font-size: 1.3em;
    color: #FFF;
  }
</style>
