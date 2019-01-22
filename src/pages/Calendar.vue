<template>
  <div id="calendar">
    <navbar></navbar>
    <calendar-comp></calendar-comp>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar';
  import CalendarComp from '../components/Calendar';

  export default {
    name: "Calendar",
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

  @media screen and (max-width: 1280px) {
    .calendar {
      width: 100%;
    }
  }
</style>
