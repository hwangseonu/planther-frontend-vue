<template>
  <div class="calendar">
    <div class="cal-header">
      <p class="year">{{date.year}}</p>
      <p class="month">{{date.month}}</p>
    </div>
    <table class="cal-table">
      <thead>
        <tr>
          <th>일</th>
          <th>월</th>
          <th>화</th>
          <th>수</th>
          <th>목</th>
          <th>금</th>
          <th>토</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in weeks">
          <th v-for="day in week">
            <day v-if="day" v-bind:date="{year: date.year, month: date.month, day: day}"></day>
          </th>
        </tr>
      </tbody>
    </table>
    <plan-modal></plan-modal>
  </div>
</template>

<script>
  import Day from './Day';
  import PlanModal from './PlanInfoModal';

  const Utils = {
    isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    },
    getDays(year, month) {
      const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let day = days[month - 1];
      if (month === 2 && Utils.isLeapYear(year)) {
        day += 1;
      }
      return parseInt(day);
    },
    getDayOfWeek(year, month, day) {
      const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
      year -= month < 3;
      return parseInt(year + year / 4 - year / 100 + year / 400 + t[month - 1] + day) % 7;
    }
  };

  export default {
    name: "Calendar",
    components: {Day, PlanModal},
    props: ['date'],
    data() {
      return {
        weeks: [
          [], [], [], [], [], []
        ]
      }
    },
    mounted() {
      let {year, month} = this.date;
      year = parseInt(year);
      month = parseInt(month);

      if (year < 1) {
        window.location.href = `/calendar/1/${month}`;
      }
      if (month < 1) {
        window.location.href = `/calendar/${year - 1}/${12 + month}`;
      } else if (month > 12) {
        window.location.href = `/calendar/${year + 1}/${month - 12}`;
      }

      [...Array(Utils.getDayOfWeek(year, month, 1)).keys()].map(i => this.weeks[0].push(''));

      let j = 0;
      [...Array(Utils.getDays(year, month)).keys()].map(i => {
        if (this.weeks[j].length === 7) j++;
        this.weeks[j].push(i + 1);
      })
    },
  }
</script>

<style>
  .cal-table {
    width: 100%;
    table-layout: fixed;
  }

  .cal-header {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 40px;
  }

  .year {
    color: #777;
  }

  .month {
    font-weight: bold;
    font-size: 3.5em;
  }

  .cal-table thead th {
    background-color: #ffdf9b;
    border-radius: 10px;
  }

  .cal-table tbody th {
    height: calc(1280px / 7);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    text-align: left;
    vertical-align: top;
  }

  .cal-table th:nth-child(1) {
    color: red;
  }

  .cal-table th:nth-child(7) {
    color: blue;
  }

  @media screen and (max-width: 1280px) {
    .cal-table tbody th {
      height: 14vw;
    }
  }
</style>
