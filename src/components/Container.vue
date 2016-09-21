<template>
  <div id="container">
    <navbar></navbar>
    <content></content>
    <sidebar></sidebar>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Content from './Content'
import Sidebar from './Sidebar'

export default {
  components: {
    Navbar, Content, Sidebar
  }
}
</script>

<style>
#container {
  width: 1130px;
  height: 100%;
  margin: auto;
  background: blue;
  display: flex;
  flex-direction: row;
}
</style>
