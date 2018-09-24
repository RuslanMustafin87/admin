<template lang='pug'>
  #app
    .header
      appHeader
    .tabs
    .content
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    appHeader: require('./components/header')
  }
}
</script>

<style lang="scss">
  
</style>
