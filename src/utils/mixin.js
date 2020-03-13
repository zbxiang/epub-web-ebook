import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'currentBook'
    ])
  },
  methods: {
    ...mapActions([
      'setFileName',
      'setCurrentBook'
    ])
  }
}
