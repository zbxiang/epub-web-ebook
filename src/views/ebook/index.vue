<template>
  <div class='ebook'>
    <ebook-reader></ebook-reader>
  </div>
</template>

<script>
  import EbookReader from '@/components/ebook/EbookReader'

  export default {
    name: 'ebook',
    components: {
      EbookReader
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" scoped>
  @import '@/assets/styles/global';
</style>
