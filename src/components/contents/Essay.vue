<template>
  <ul id="essay">
    <!-- <div v-if="$loadingRouteData">loading...</div> -->
    <content-title section-title="Essay"></content-title>
    <essay-item v-for="item in items" :item="item" :index="$index"></essay-item>
  </ul>
</template>

<script>
import EssayItem from './EssayItem'
import ContentTitle from './ContentTitle'

export default {
  created () {
  },
  ready () {
    this.$dispatch('hideProgress')
  },
  components: {
    EssayItem, ContentTitle
  },
  data () {
    return {
      items: []
    }
  },
  route: {
    data (transition) {
      const Xhttp = window.XMLHttpRequest
      // let self = this
      let items = null
      // this.$dispatch('hideProgress')

      if (Xhttp) {
        this.$dispatch('showProgress')
        let xhr = new Xhttp()

        xhr.onload = event => {
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            items = JSON.parse(xhr.responseText)
            this.$dispatch('totalComponent', items.length)
            transition.next({
              items: items
            })
            // this.$dispatch('hideProgress')
          } else {
            console.error('fetch data failed.')
          }
        }

        xhr.onprogress = event => {
          if (event.lengthComputable) {
            // let percent = event.loaded / event.total

            // this.onPercentChange(percent)
          }
        }

        xhr.open('get', 'http://localhost:3000')
        xhr.send(null)
      }
    },
    deactivate (transition) {
      this.$dispatch('hideProgress')
      transition.next()
    },
    activate (transition) {
      this.$dispatch('choiceChange', 4)
      transition.next()
    }
  }
}
</script>

<style>
#essay {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 710px;
  margin: auto;
  padding-bottom: 20px;
}
</style>
