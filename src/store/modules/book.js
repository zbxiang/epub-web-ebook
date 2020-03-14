const book = {
  state: {
    fileName: '',
    menuVisible: false,
    currentBook: null,
    settingVisible: -1,
    defaultFontSize: 16
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
    },
    SET_SETTING_VISIBLE: (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    SET_DEFAULT_FONT_SIZE: (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    }
  }
}

export default book
