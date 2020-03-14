import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuVisible',
      'currentBook',
      'settingVisible',
      'defaultFontSize'
    ])
  },
  methods: {
    ...mapActions([
      'setFileName',
      'setMenuVisible',
      'setCurrentBook',
      'setSettingVisible',
      'setDefaultFontSize'
    ])
  }
}
