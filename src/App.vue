<template>
  <div id="app">
    <wrapper></wrapper>
  </div>
</template>

<script>
import Wrapper from './components/Wrapper'

export default {
  data () {
    return {
      msg: 'awdwadawd'
    }
  },
  components: {
    Wrapper
  }
}
</script>

<style>
/* css reset */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
body { background:#fff; color:black; font-size:14px; font-family: Verdana, Arial, Helvetica, sans-serif; }
td,th,caption { font-size:14px; }
h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
a { color:#555; text-decoration:none; }
a:hover { text-decoration:underline; }
img { border:none; }
ol,ul,li { list-style:none; }
input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; }
table { border-collapse:collapse; }
html {overflow-y: scroll;}
/* bootstrap font-family*/
@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('./fonts/glyphicons-halflings-regular.eot');
  src: url('./fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('./fonts/glyphicons-halflings-regular.woff') format('woff'), url('./fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('./fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}

/* css common */
.clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
.clearfix { *zoom:1; }

html, body {
  width: 100%;
  height: 100%;
}

body {
  background-image: url('assets/bg.png');
}

#id {
  width: 100%;
  height: 100%;
}
</style>
