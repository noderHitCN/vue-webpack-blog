<template>
  <ul id="navbar">
    <navbar-item v-for="item in navlist" :item="item"></navbar-item>
  </ul>
</template>

<script>
import { navlist } from '../consts/consts'
import NavbarItem from './NavbarItem'

export default {
  data () {
    navlist
  },
  components: {
    NavbarItem
  }
}
</script>

<style>
#navbar {
  width: 76px;
  height: 100%;
  background: yellow;
  display: flex;
  flex-direction: row;
}
</style>
