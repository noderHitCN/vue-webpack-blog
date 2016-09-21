<template>
  <div id="wrapper">
    <container></container>
  </div>
</template>

<script>
import Container from './Container'
export default {
  data () {
    return {
      msg: 'adwdwd'
    }
  },
  components: {
    Container
  }
}
</script>

<style>
#wrapper {
  height: 600px;
  background: red;
  margin-top: -300px;
  width: 100%;
  top: 50%;
  position: absolute;
}
</style>
