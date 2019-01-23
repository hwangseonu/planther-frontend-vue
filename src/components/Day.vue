<template>
  <div class="day-wrapper">
    <div class="day" v-bind:class="{gray: plans.length > 0}" @mouseover="mouseOver" @mouseleave="mouseLeave">
      <div class="day-header">
        <span>{{date.day}}</span>
        <i v-if="hover" class="add-plan hidden fas fa-plus" @click="addPlan"></i>
      </div>
      <div>
        <div v-for="plan in plans" v-bind:class="'plan '+plan.type.toLowerCase()" @click="">
          <span>{{plan.title}}</span>
        </div>
      </div>
    </div>
    <add-plan-modal v-if="showAddPlan" v-bind:date="date"></add-plan-modal>
  </div>
</template>

<script>
  import AddPlanModal from './AddPlanModal';
  import router from '@/router';

  export default {
    name: "Day",
    props: ['date'],
    components: {AddPlanModal},
    data() {
      return {
        showAddPlan: false,
        hover: false,
        plans: []
      }
    },
    mounted: function () {
      this.$root.$on('close-addplan', ({date}) => {
        const {year, month, day} = date;
        if (year === this.date.year && month === this.date.month && day === this.date.day) {
          this.showAddPlan = false;
        }
      });

      if (this.$store.getters.isLogin) {
        const {year, month, day} = this.date;
        const jwt = this.$cookie.get('JWT');

        this.$http.get(`/plans/${year}/${month}/${day}`, {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }).then(res => {
          this.plans = res.data;
        }).catch(_ => {
          alert("페이지 로딩 중 오류가 발생하였습니다.");
          router.go(-1);
        });
      }
    },
    methods: {
      addPlan: function () {
        if (!this.$store.getters.isLogin) {
          alert("먼저 로그인을 해주세요!");
        } else {
          this.showAddPlan = true;
        }
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

  .gray {
    background-color: #eee;
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

  .plan {
    text-align: center;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    color: #FFFFFF;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    overflow:hidden;
  }

  .event {
    background-color: #f5b74d;
  }

  .presentation {
    background-color: #f3c74d;
  }

  .assignment {
    background-color: #ffd57d;
  }

  .presentation:hover, .event:hover, .assignment:hover {
    background-color: #ff7640;
  }
</style>
