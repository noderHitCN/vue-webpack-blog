<template>
  <div id="content-title">
    <h2><span>+</span>Name : {{sectionTitle}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      require: true
    }
  }
}
</script>

<style>
#content-title {
  width: 100%;
}

#content-title h2 {
  color: #3B5998;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 1px solid #ccc;
  height: 50px;
  font-size: 30px;
  line-height: 50px;
}

#content-title h2 span {
  margin-right: 10px;
}
</style>
