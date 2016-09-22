<template>
  <div id="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
// import Container from './Container'
export default {
  created () {
    this.$router.go({name: 'index'})
  },
  components: {
    // Container
  }
}
</script>

<style>
#wrapper {
  height: 600px;
  margin-top: -300px;
  width: 100%;
  top: 50%;
  position: absolute;
}
</style>
