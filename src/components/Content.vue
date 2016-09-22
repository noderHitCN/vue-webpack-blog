<template>
  <div id="content">
    <div id="progress"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    choice: {
      type: Number,
      required: true
    }
  },
  watch: {
    choice: function (value) {
      switch (value) {
        case 0:
          this.$router.go({name: 'profile'})
          break
        case 4:
          this.$router.go({name: 'essay'})
          break
        default:
          this.$router.go({name: 'profile'})
      }
    }
  },
  components: {

  }
}
</script>

<style>
#content {
  width: 745px;
  height: 100%;
  background: white;
  margin-left: 13px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
