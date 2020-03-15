const getters = {
  fileName: state => state.book.fileName,
  menuVisible: state => state.book.menuVisible,
  currentBook: state => state.book.currentBook,
  settingVisible: state => state.book.settingVisible,
  defaultFontSize: state => state.book.defaultFontSize,
  defaultFontFamily: state => state.book.defaultFontFamily,
  fontFamilyVisible: state => state.book.fontFamilyVisible,
  defaultTheme: state => state.book.defaultTheme,
  bookAvailable: state => state.book.bookAvailable,
  progress: state => state.book.progress,
  section: state => state.book.section,
  navigation: state => state.book.navigation,
  cover: state => state.book.cover,
  metadata: state => state.book.metadata,
  offsetY: state => state.book.offsetY,
  isBookmark: state => state.book.isBookmark
}

export default getters
