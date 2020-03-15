<template>
  <div class='ebook' ref="ebook">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
    <ebook-bookmark></ebook-bookmark>
  </div>
</template>

<script>
  import EbookReader from '@/components/ebook/EbookReader'
  import EbookTitle from '@/components/ebook/EbookTitle'
  import EbookMenu from '@/components/ebook/EbookMenu'
  import EbookBookmark from '@/components/ebook/EbookBookmark'
  import {
    getReadTime,
    saveReadTime
  } from '@/utils/localStorage'
  import { ebookMixin } from '@/utils/mixin'

  export default {
    name: 'ebook',
    mixins: [ebookMixin],
    watch: {
      offsetY(v) {
        if (!this.menuVisible && this.bookAvailable) {
          if (v > 0) {
            this.move(v)
          } else if (v === 0) {
            this.restore()
          }
        }
      }
    },
    mounted() {
      this.startLoopReadTime()
    },
    components: {
      EbookReader,
      EbookTitle,
      EbookMenu,
      EbookBookmark
    },
    methods: {
      move(v) {
        this.$refs.ebook.style.top = v + 'px'
      },
      restore() {
        this.$refs.ebook.style.top = 0
        this.$refs.ebook.style.transition = 'all .2s linear'
        setTimeout(() => {
          this.$refs.ebook.style.transition = ''
        }, 200)
      },
      startLoopReadTime() {
        let readTime = getReadTime(this.fileName)
        if (!readTime) {
          readTime = 0
        }
        this.task = setInterval(() => {
          readTime++
          if (readTime % 30 === 0) {
            saveReadTime(this.fileName, readTime)
          }
        }, 1000)
      }
    },
    beforeDestory() {
      if (this.task) {
        clearInterval(this.task)
      }
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" scoped>
  @import '@/assets/styles/global';
  .ebook{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
