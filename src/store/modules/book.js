const book = {
  state: {
    fileName: '',
    menuVisible: false,
    currentBook: null
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_MENU_VISIBLE: (state, visible) => {
      state.menuVisible = visible
    },
    SET_CURRENT_BOOK: (state, currentBook) => {
      state.currentBook = currentBook
    }
  }
}

export default book
