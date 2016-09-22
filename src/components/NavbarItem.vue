<template>
  <li class="navbar-item">
    <i>{{item.name}}</i>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.navbar-item {
  width: 74px;
  border: 1px solid white;
  height: 74px;
  margin-left: 13px;
  background: orange;
}
</style>
