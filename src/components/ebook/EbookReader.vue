<template>
  <div class="ebook-reader">
    <div class="read"></div>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  import { ebookMixin } from '@/utils/mixin'

  global.ePub = Epub

  export default {
    name: 'ebook-reader',
    mixins: [ebookMixin],
    mounted() {
      this.setFileName(this.$route.params.fileName.split('|').join('/'))
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '@/assets/styles/global';
</style>
