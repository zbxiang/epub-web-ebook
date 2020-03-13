<template>
  <div class='ebook'>
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
  </div>
</template>

<script>
  import EbookReader from '@/components/ebook/EbookReader'
  import EbookTitle from '@/components/ebook/EbookTitle'

  export default {
    name: 'ebook',
    components: {
      EbookReader,
      EbookTitle
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" scoped>
  @import '@/assets/styles/global';
</style>
