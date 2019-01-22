<template>
  <div class="day" @mouseover="mouseOver" @mouseleave="mouseLeave">
    <div class="day-header">
      <span>{{day}}</span>
      <i v-if="hover" class="add-plan hidden fas fa-plus"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Day",
    data () {
      return {
        hover: false
      }
    },
    methods: {
      mouseOver: function () {
        this.hover = true;
      },
      mouseLeave: function () {
        this.hover = false;
      }
    },
    props: {
      day: Number
    }
  }
</script>

<style>
  .day {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .day:hover {
    background-color: #EEE;
  }

  .day-header {
    padding: 5% 5% 0 5%;
    display: flex;
  }

  .add-plan {
    margin-left: auto;
    color: #999;
  }
  
  .add-plan:hover {
    color: #555;
  }
</style>
