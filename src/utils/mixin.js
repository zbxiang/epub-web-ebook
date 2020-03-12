import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName'
    ])
  },
  methods: {
    ...mapActions([
      'setFileName'
    ])
  }
}
