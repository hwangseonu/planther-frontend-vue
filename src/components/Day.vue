<template>
  <div class="day-wrapper">
    <div class="day" @mouseover="mouseOver" @mouseleave="mouseLeave">
      <div class="day-header">
        <span>{{date.day}}</span>
        <i v-if="hover" class="add-plan hidden fas fa-plus" @click="addPlan"></i>
      </div>
    </div>
    <add-plan-modal v-if="showAddPlan" v-bind:date="date"></add-plan-modal>
  </div>
</template>

<script>
  import AddPlanModal from './AddPlanModal';

  export default {
    name: "Day",
    props: ['date'],
    components: {AddPlanModal},
    data() {
      return {
        showAddPlan: false,
        hover: false
      }
    },
    mounted: function () {
      this.$root.$on('close-addplan', ({date}) => {
        const {year, month, day} = date;
        if (year === this.date.year && month === this.date.month && day === this.date.day) {
          this.showAddPlan = false;
        }
      })
    },
    methods: {
      addPlan: function () {
        this.showAddPlan = true;
      },
      mouseOver: function () {
        this.hover = true;
      },
      mouseLeave: function () {
        this.hover = false;
      }
    }
  }
</script>

<style>
  .day-wrapper {
    width: 100%;
    height: 100%;
  }
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
