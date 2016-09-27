<template>
  <li class="essay-item" :class="{ 'essay-item-top': index < 3}" @click="onHandleClick">
    <img :src="item.url">
    <div class="essay-item-title">
      <p>{{item.title}}</p>
      <span>{{item.id}}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true
    },
    index: {
      type: Number,
      require: true
    }
  },
  methods: {
    onHandleClick (e) {
      this.$route.router.go({path: 'essay/' + this.item.id})
    }
  },
  ready () {
    // setTimeout(() => {
    //   this.$dispatch('addComponent')
    // }, this.index * 1000)
    this.$dispatch('addComponent')
  }
}
</script>

<style>
.essay-item {
  width: 216px;
  height: 300px;
  margin: 10px;
  position: relative;
  transition: box-shadow .2s, transform .2s;
}

.essay-item-top {
  margin-top: 20px;
}

.essay-item img {
  width: 100%;
  height: 100%;
}

.essay-item .essay-item-title {
  height: 50px;
  width: 100%;
  position: absolute;
  background: #3B5998;
  bottom: 0px;
  color: white;
}

.essay-item .essay-item-title p {
  margin-top: 4px;
  font-size: 18px;
  margin-left: 10px;
}

.essay-item .essay-item-title span {
  margin-left: 10px;
}

.essay-item:hover {
  box-shadow: 5px 5px #aaa;
  transform: translate(-2px, -2px);
}

.essay-item:hover .essay-item-title {
  
}
</style>
