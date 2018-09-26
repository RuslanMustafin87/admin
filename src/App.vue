<template lang='pug'>
  #app
    .header
      app-header
    .tabs
      app-tabs
    .content
      router-view
</template>

<script>
import appHeader from './components/header'
import appTabs from './components/tabs'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    appHeader,
    appTabs
  }
}
</script>

<style lang="scss">
  
</style>
