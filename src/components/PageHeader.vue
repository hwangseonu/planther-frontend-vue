<template>
  <nav class="page-header">
    <ul>
      <li v-for="item in menu">{{ item.text }}</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'PageHeader',
    data () {
      return {
        menu: [
          {text: 'Home'},
          {text: 'Posts'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
