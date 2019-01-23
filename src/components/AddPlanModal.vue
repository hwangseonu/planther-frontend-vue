<template>
  <div class="modal-wrapper" @click.self="close">
    <div class="modal">
      <div class="modal-header">
        <p class="modal-title">일정 추가</p>
        <i class="modal-close fas fa-times" @click="close"></i>
      </div>
      <div class="plan-form">
        <input v-model="title" title="title" placeholder="제목">
        <textarea v-model="content" title="content" placeholder="내용"></textarea>
        <button class="submit-button" @click="close">추가</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddPlanModal",
    props: ['date'],
    data() {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      close: function () {
        this.$root.$emit('close-addplan', {date: this.date});
      }
    }
  }
</script>

<style scoped>
  .modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal {
    padding: 30px;
    width: 35.35%;
    border-radius: 30px;
    background-color: #FFF;
  }

  .modal-header {
    display: flex;
    align-items: center;
    cursor: default;
  }

  .modal-title {
    font-weight: bold;
    font-size: 2em;
  }

  .modal-close {
    font-size: 2em;
    color: #AAA;
    flex: 0 1 auto;
    margin-left: auto;
    cursor: pointer;
  }

  .modal-close:hover {
    color: #1f1f1f;
  }

  .plan-form input {
     width: 100%;
     height: 50px;
     margin-bottom: 20px;
     border: none;
     border-bottom: 1px solid #000;
     font-size: 1.3em;
     font-weight: bold;
   }

  .plan-form textarea {
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 1.3em;
    font-weight: bold;
    resize: none;
  }

  .plan-form .submit-button {
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
