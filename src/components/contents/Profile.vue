<template>
  <div id="profile">
    <section class="show-myself">
      <div class="sm-picture">
      	<img src="http://localhost:3000/img/2.jpg">
      </div>
      <div class="sm-word p-font-weight p-center">
      	<p>I'm Jason Young.</p>
      	<!-- <hr> -->
      	<span>Web Engineer</span>
      <div>
    </section>
    <section class="about-me p-section-relative">
      <div class="ab-title">
      	ABOUT ME
      </div>
      <div class="ab-user">
        <em class="p-icon p-icon-user p-center"></em>
        <hr>
      </div>
      <div class="ab-content">
        <p class="p-quote">You don't kown me？好吧，我先做一个自我介绍，我叫杨雯杰，现在就读于电子科技大学。从小对于艺术的热爱让我走上了Web前端工程师的道路，希望能在这条路上走的更远。这是我的个人网站，希望你能够喜欢～</p>
      </div>
    </section>
    <section class="my-skills">
    </section>
  </div>
</template>

<script>
export default {
  route: {
    activate (transition) {
      this.$dispatch('choiceChange', 0)
      transition.next()
    }
  }
}
</script>

<style>
#profile {
  font: 125%;
}

.p-font-weight {
  font-weight: bold;
}

.p-section-relative {
  position: relative;
}

.p-center {
  text-align: center;
}

.p-icon {
  display: block;
  width: 4em;
  height: 2em;
  position: absolute;
  font-size: 2em;
  background: white;
  margin-left: 50%;
  left: -2em;
  z-index: 2;
}

.p-icon-user:after {
  content: '\F007';
}

.p-quote:before {
  content: '\f10d';
  font-size: .1em;
  position: relative;
  top: -5px;
  left: -2px;
}

.p-quote:after {
  content: '\f10e';
  font-size: .1em;
  position: relative;
  top: -5px;
  /*left: -2px;*/
}

#profile .show-myself {
  width: 100%;
  background: #3B5998;
  padding-top: 2em;
  padding-bottom: 2em;
}

#profile .show-myself .sm-picture {
  width: 10em;
  height: 10em;
  margin: auto;
  border-radius: 50%;
  border: .5em solid white; 
  overflow: hidden;
}

#profile .show-myself .sm-picture img {
  width: 100%;
  height: 100%;
}

#profile .show-myself .sm-word {
  width: 20em;
  margin: auto;
  margin-top: 5px;
}

#profile .show-myself .sm-word p {
  color: white;
  font-size: 125%;
  margin-bottom: .5em;
}

#profile .show-myself .sm-word span {
  color: white;
  border: 1px solid white;
  padding: .3em .7em;
  transition: color .5s, background .5s, border .5s;
}

#profile .show-myself .sm-word span:hover {
  background: white;
  border: 1px solid #3B5998;
  color: #3B5998;
}

#profile .about-me {
  width: 100%;
  height: 10em;
  background: white;
}

#profile .about-me .ab-title {
  margin: auto;
  font-size: 250%;
  text-align: center;
  padding: .3em .7em;
  color: #bbb;
  margin-top: 1em;
}

#profile .about-me .ab-user hr {
  width: 50%;
  position: absolute;
  margin-top: 1em;
  margin-left: 50%;
  left: -25%;
  z-index: 1;
}

#profile .about-me .ab-content {
  width: 80%;
  margin: auto;
}

#profile .about-me .ab-content p {
  margin-top: 4em;
  text-indent: 2em;
  color: #aaa;
  font-size: 125%;
}

#profile .my-skills {
  width: 100%;
  height: 15em;
}
</style>
