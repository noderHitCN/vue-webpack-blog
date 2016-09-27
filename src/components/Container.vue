<template>
  <div id="container">
    <navbar :choice="choice"></navbar>
    <Content :choice="choice"></Content>
    <sidebar></sidebar>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Content from './Content'

export default {
  created () {
    // this.$router.go({name: 'content'})
  },
  components: {
    Navbar, Sidebar, Content
  },
  data () {
    return {
      choice: 0
    }
  },
  events: {
    choiceChange (index) {
      if (index === this.choice) {
        return
      }
      this.choice = index
    }
  }
}
</script>

<style>
#container {
  width: 1130px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
}
</style>
