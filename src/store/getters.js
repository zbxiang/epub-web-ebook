const getters = {
  fileName: state => state.book.fileName,
  menuVisible: state => state.book.menuVisible,
  currentBook: state => state.book.currentBook,
  settingVisible: state => state.book.settingVisible,
  defaultFontSize: state => state.book.defaultFontSize
}

export default getters
