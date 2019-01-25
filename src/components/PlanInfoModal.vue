<template>
  <div class="info-wrapper" v-if="show" @click.self="close">
    <div class="info">
      <div class="info-header">
        <p class="info-title" v-bind:title="plan.title">{{plan.title}}</p>
        <i class="info-close fas fa-times" @click="close"></i>
      </div>
      <div class="info-section">
        <p class="info-writer">작성자: {{plan.user.username}}</p>
        <div class="info-content">
          <p v-for="text in computedContent">{{text}}</p>
        </div>
        <button class="delete-button" @click="deletePlan">삭제</button>
      </div>
    </div>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
  import Loading from './Loading';
  import router from '@/router';

  export default {
    name: "PlanInfoinfo",
    components: {Loading},
    data() {
      return {
        show: false,
        loading: false,
        plan: {}
      }
    },
    computed: {
      computedContent() {
        return this.plan.content.split(/\n/);
      }
    },
    methods: {
      close() {
        this.show = false;
        this.plan = {};
      },
      deletePlan() {
        const jwt = this.$cookie.get('JWT');
        this.loading = true;

        this.$http.delete(`/plans/${this.plan.id}`, {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }).then(_ => {
          alert("삭제되었습니다.");
          this.loading = false;
          router.go(0);
        }).catch(_ => {
          alert("삭제 도중 오류가 발생하였습니다.");
          this.loading = false;
          router.go(0);
        })
      }
    },
    mounted() {
      this.$root.$on('show-info', (plan) => {
        this.show = true;
        this.plan = plan;
      })
    }
  }
</script>

<style>
  .info-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #000;
  }

  .info {
    padding: 30px;
    width: 600px;
    border-radius: 30px;
    background-color: #FFF;
  }

  .info-header {
    display: flex;
    align-items: center;
    cursor: default;
  }

  .info-title {
    font-weight: bold;
    font-size: 2em;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    overflow: hidden;
  }

  .info-close {
    font-size: 2em;
    color: #AAA;
    flex: 0 1 auto;
    margin-left: auto;
    cursor: pointer;
  }

  .info-close:hover {
    color: #1f1f1f;
  }

  .info-content {
    margin-top: 20px;
    width: 100%;
    height: 300px;
    overflow: auto;
    font-weight: bold;
    word-break: break-word;
  }

  .delete-button {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #ff7861;
    font-weight: bold;
    font-size: 1.3em;
    color: #FFFFFF;
  }

  .delete-button:hover {
    background-color: #ff5046;
  }
</style>
