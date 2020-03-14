const getters = {
  fileName: state => state.book.fileName,
  menuVisible: state => state.book.menuVisible,
  currentBook: state => state.book.currentBook,
  settingVisible: state => state.book.settingVisible,
  defaultFontSize: state => state.book.defaultFontSize,
  defaultFontFamily: state => state.book.defaultFontFamily,
  fontFamilyVisible: state => state.book.fontFamilyVisible,
  defaultTheme: state => state.book.defaultTheme
}

export default getters
