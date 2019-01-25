<template>
  <div v-if="show" class="register-wrapper" @click.self="close">
    <div class="register-modal">
      <div class="register-header">
        <p class="register-title">회원가입</p>
        <i class="register-close fas fa-times" @click="close"></i>
      </div>
      <div class="register-form" @keypress.enter="register">
        <input v-model="username" title="username" placeholder="Username">
        <input v-model="password" title="password" placeholder="Password" type="password">
        <input v-model="name" title="name" placeholder="Name">
        <input v-model="grade" title="grade" placeholder="Grade" type="number">
        <input v-model="cls" title="class" placeholder="Class" type="number">
        <input v-model="num" title="number" placeholder="Number" type="number">
        <button class="register-button" @click="register">회원가입</button>
      </div>
    </div>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
  import Loading from './Loading';
  import router from '@/router';

  export default {
    name: "RegisterModal",
    components: {Loading},
    data() {
      return {
        show: false,
        loading: false,
        username: '',
        password: '',
        name: '',
        grade: '',
        cls: '',
        num: ''
      }
    },
    mounted() {
      this.$root.$on('show-register', () => this.show = true);
    },
    methods: {
      register() {
        if (this.username === '' || this.password === '' || this.name === '' || this.grade === '' || this.cls === '' || this.num === '') {
          alert("빈칸이 있습니다.");
        } else {
          this.loading = true;
          this.$store.dispatch('signUp', {
            username: this.username,
            password: this.password,
            name: this.name,
            grade: this.grade,
            cls: this.cls,
            num: this.num
          }).then(() => {
            this.username = this.password = this.name = this.grade = this.cls = this.num = '';
            alert("회원가입되었습니다.");
            this.loading = false;
            router.go(0);
          }).catch(err => {
            alert("회원가입에 실패했습니다.");
            this.loading = false;
          })
        }
      },
      close() {
        this.username = this.password = this.name = this.grade = this.cls = this.num = '';
        this.show = false;
      },
    }
  }
</script>

<style>
  .register-wrapper {
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

  .register-modal {
    padding: 30px;
    width: 600px;
    background-color: #FFF;
    border-radius: 30px;
  }

  .register-header {
    display: flex;
    align-items: center;
    cursor: default;
  }

  .register-title {
    font-weight: bold;
    font-size: 2em;
  }

  .register-close {
    font-size: 2em;
    color: #AAA;
    flex: 0 1 auto;
    margin-left: auto;
    cursor: pointer;
  }

  .register-close:hover {
    color: #1f1f1f;
  }

  .register-form {
    margin-top: 3%;
    height: 100%;
  }

  .register-form input {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 1.3em;
    font-weight: bold;
  }

  .register-form .register-button {
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
