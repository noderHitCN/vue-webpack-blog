<template>
  <div id="essay-page">
  </div>
</template>

<script>
import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true,
  highlight (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})

export default {
  data () {
    return {
      markdown: ''
    }
  },
  route: {
    data (transition) {
      const Xhttp = window.XMLHttpRequest

      if (Xhttp) {
        this.$dispatch('showProgress')
        let xhr = new Xhttp()

        xhr.onload = event => {
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            this.$el.innerHTML = marked(xhr.responseText)
            transition.next()
          } else {
            console.error('fetch data failed.')
          }
        }

        xhr.onprogress = event => {
          if (event.lengthComputable) {
            let percent = event.loaded / event.total
            this.$dispatch('changePercent', percent)
          }
        }

        xhr.open('get', 'http://localhost:3000/article/' + this.$route.params.id)
        xhr.send(null)
      }
    },
    deactivate (transition) {
      this.$dispatch('hideProgress')
      transition.next()
    }
  },
  ready () {
    this.$dispatch('hideProgress')
  }
}
</script>

<style>
#essay-page {
  width: 92%;
  margin: auto;
  font-size: 110%;
}

#essay-page h1 {
  font-size: 180%;
  color: #3B5998;
  height: 2em;
  line-height: 2em;
  margin-bottom: .9em;
  font-weight: bold;
  border-bottom: 5px solid #3B5998;
}

#essay-page h2 {
  text-indent: .5em;
  margin: 1em 0;
  font-size: 125%;
  color: #3B5998;
}

#essay-page h3 {
  text-indent: 1em;
  color: #3B5998;
  font-size: 110%;
}

#essay-page p {
  margin: 1em 0;
  line-height: 1.7;
}

#essay-page p code {
  background: #FFEBCD;
  padding: .1em .5em;
  border-radius: .3em;
}

#essay-page blockquote {
  width: 90%;
  padding: 0.3em 0.9em;
  background: #eee;
  border-left: 5px solid rgb(255, 128, 0);
  margin: 2em 0;
  margin: inherit;
}

#essay-page blockquote p {
  margin: 1em 0;
}

#essay-page pre {
  width: 90%;
  max-height: 400px;
  background: #FFFAF0;
  padding: 1.4em;
  overflow-x: auto;
  margin: inherit;
}

#essay-page ul {
  margin-left: 2em;
  padding: 0.9em;
}

#essay-page ul li {
  list-style: disc;
}
</style>
