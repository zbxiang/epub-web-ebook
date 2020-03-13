const book = {
  state: {
    fileName: '',
    currentBook: null
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_CURRENT_BOOK: (state, currentBook) => {
      state.currentBook = currentBook
    }
  }
}

export default book
