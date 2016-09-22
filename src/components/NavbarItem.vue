<template>
  <li class="navbar-item" :class="{'active': index === choice, 'navbar-item-last': index == 4}" @click.prevent="onHandleClick">
    <i :class="[item.name]"></i>
  </li>
</template>

<script>
export default {
  // props from father component
  props: {
    // item name
    item: {
      type: Object,
      required: true
    },
    // active number of child
    choice: {
      type: Number,
      required: true
    },
    // index number of this child
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    onHandleClick (e) {
      this.$dispatch('choiceChange', this.index)
    }
  }
}
</script>

<style>
.navbar-item {
  width: 74px;
  border: 1px solid white;
  height: 74px;
  background: #3B5998;
  border-bottom: none;
  transition: background-color .5s;
}

.navbar-item i {
  font-style: normal;
  display: block;
  width: 42px;
  height: 42px;
  background: white;
  border-radius: 50%;
  margin-left: 16px;
  margin-top: 16px;
  line-height: 42px;
  text-align: center;
  font-size: 25px;
  color: #3B5998;
  transition: background-color .5s, color .5s;
}

.navbar-item:hover {
  background: white;
}

.navbar-item:hover i {
  background-color: #3B5998;
  color: white;
}

.active {
  background: white;
}

.active i {
  background-color: #3B5998;
  color: white;
}

.navbar-item-last {
  border-bottom: 1px solid white;
}

.profile:after {
  content: '\f007';
}

.capacity:after {
  content: '\f0ae';
}

.comment:after {
  content: '\f0b1';
}

.website:after {
  content: '\f0a1';
}

.essay:after {
  content: '\f0e0';
}
</style>
