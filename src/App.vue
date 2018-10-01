<template lang='pug'>
  #app
    .header
      app-header
    .tabs
      app-tabs
    .content
      .content__bg
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
#app{
  display:flex;
  flex-direction: column;
  min-height: 100%;
}
  .content{
    flex:1;
    background: url('~img/bg.jpg') center no-repeat;
    background-size: cover;
    // filter: opacity(30%);
  }
  .content__bg{
    // min-height: 100%;
  }
</style>
