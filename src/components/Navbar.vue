<template>
  <ul id="navbar">
    <navbar-item v-for="item in navlist" :item="item" :index="$index" :choice="choice"></navbar-item>
  </ul>
</template>

<script>
import { navlist } from '../consts/consts'
import NavbarItem from './NavbarItem'

export default {
  props: {
    choice: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      navlist
    }
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
}
</style>
