<template>
  <canvas class="draw-circle" :width="width + 'px'" :height="height + 'px'">Dont support canvas!</canvas>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      require: true
    },
    height: {
      type: String,
      require: true
    }
  },
  methods: {
    drawCircle (pos, total = 100) {
      let ctx = this.$el.getContext('2d')

      const width = Number(this.width)
      const height = Number(this.height)
      const alpha = 0.9
      const angle = (pos / total) * 2 * Math.PI - 0.5 * Math.PI
      const text = pos + '%'

      ctx.beginPath()
      ctx.strokeStyle = '#aaa'
      ctx.lineWidth = 5
      ctx.arc(width / 2, height / 2, width / 2 * alpha, -0.5 * Math.PI, angle)
      ctx.stroke()

      ctx.beginPath()
      ctx.fillStyle = 'black'
      ctx.font = '35px Helvetica'
      ctx.textAlign = 'center'
      ctx.textBaseLine = 'middle'
      ctx.fillText(text, width / 2 + 2, height / 2 + 12)
    }
  },
  ready () {
    this.drawCircle(100)
  }
}
</script>

<style>
.draw-circle {
  /*background: yellow;*/
}
</style>