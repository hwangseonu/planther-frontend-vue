<template>
  <nav class="page-header">
    <ul>
      <li v-for="(text, index) in menu" :key="index">{{ text }}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PageHeader',
  data () {
    return {
      menu: [
        'Home',
        'Posts'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
