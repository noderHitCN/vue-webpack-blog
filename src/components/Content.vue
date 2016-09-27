<template>
  <div id="content">
    <div id="progress" :style="{ 'width': percent + '%'}" v-if="showState"></div>
    <router-view transition="in-out" transition-mode="out-in"></router-view>
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
          this.$route.router.go({name: 'profile'})
          break
        case 4:
          this.$route.router.go({name: 'essay'})
          break
        default:
          this.$route.router.go({name: 'profile'})
      }
    }
  },
  data () {
    return {
      showState: false,
      percent: 0,
      total: 0,
      loaded: 0
    }
  },
  components: {

  },
  events: {
    changeProgress (percent) {
      this.percent = percent * 90 + 10
    },
    hideProgress () {
      this.showState = false
    },
    showProgress () {
      this.showState = true
    },
    totalComponent (total) {
      this.total = total
    },
    addComponent () {
      this.loaded++
      this.percent = (this.loaded / this.total) * 90 + 10
      if (this.percent === 100) {
        this.loaded = 0
      }
    }
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
  position: relative;
}

#progress {
  height: 5px;
  width: 10%;
  background: orange;
  position: absolute;
}

.in-out-transition {
  transition: opacity .5s ease, transform .5s ease;
}

.in-out-enter, .in-out-leave {
  opacity: 0;
}

.in-out-enter {
  transform: translateY(-600px);
}

.in-out-leave {
  transform: translateY(500px);
}
</style>
