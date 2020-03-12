<template>
  <div class="ebook-reader">
    <div class="read"></div>
  </div>
</template>

<script>
  import Epub from 'epubjs'

  global.ePub = Epub

  export default {
    name: 'ebook-reader',
    mounted() {
      const books = this.$route.params.fileName.split('|').join('/')
      console.log(books)
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '@/assets/styles/global';
</style>
