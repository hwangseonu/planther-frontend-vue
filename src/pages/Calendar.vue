<template>
  <div id="calendar">
    <div class="prev">
      <a :href="'/calendar/'+year+'/'+(parseInt(month) - 1)">
        <i class="fas fa-chevron-left"></i>
      </a>
    </div>
    <div class="next">
      <a :href="'/calendar/'+year+'/'+(parseInt(month) + 1)">
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
    <navbar></navbar>
    <calendar-comp v-bind:date="{year: year, month: month}"></calendar-comp>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar';
  import CalendarComp from '../components/Calendar';

  export default {
    name: "Calendar",
    props: ['year', 'month'],
    components: {Navbar, CalendarComp}
  }
</script>

<style>
  .calendar {
    width: 1280px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
  }

  .prev, .next {
    display: flex;
    align-items: center;
    position: fixed;
    height: 100%;
    top: 0;
    font-size: 5em;
  }
  
  .prev a, .next a {
    color: #AAA;
  }

  .prev {
    left: 3%;
  }

  .next {
    right: 3%;
  }

  .prev a:hover, .next a:hover {
    color: #555;
  }


  @media screen and (max-width: 1280px) {
    .calendar {
      width: 100%;
    }
  }
</style>
