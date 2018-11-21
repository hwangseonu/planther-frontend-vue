<template>
  <div id="app">
    <page-header></page-header>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'App',
  components: {PageHeader}
}
</script>

<style lang="scss" scoped>
@import "assets/styles/style";
#app {
}
</style>
