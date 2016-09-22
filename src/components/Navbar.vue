<template>
  <ul id="navbar">
    <navbar-item v-for="item in navlist" :item="item" :index="$index" :choice="choice"></navbar-item>
  </ul>
</template>

<script>
import { navlist } from '../consts/consts'
import NavbarItem from './NavbarItem'

export default {
  data () {
    return {
      choice: 0,
      navlist
    }
  },
  components: {
    NavbarItem
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
