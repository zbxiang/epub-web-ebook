const actions = {
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName)
  },
  setCurrentBook: ({ commit }, currentBook) => {
    return commit('SET_CURRENT_BOOK', currentBook)
  },
  setMenuVisible: ({ commit }, visible) => {
    return commit('SET_MENU_VISIBLE', visible)
  },
  setSettingVisible: ({ commit }, setSettingVisible) => {
    return commit('SET_SETTING_VISIBLE', setSettingVisible)
  },
  setDefaultFontSize: ({ commit }, defaultFontSize) => {
    return commit('SET_DEFAULT_FONT_SIZE', defaultFontSize)
  },
  setDefaultFontFamily: ({ commit }, defaultFontFamily) => {
    return commit('SET_DEFAULT_FONT_FAMILY', defaultFontFamily)
  },
  setFontFamilyVisible: ({ commit }, visible) => {
    return commit('SET_FONT_FAMILY_VISIBLE', visible)
  },
  setDefaultTheme: ({ commit }, theme) => {
    return commit('SET_DEFAULT_THEME', theme)
  },
  setBookAvailable: ({ commit }, bookAvailable) => {
    return commit('SET_BOOK_AVAILABLE', bookAvailable)
  },
  setProgress: ({ commit }, progress) => {
    return commit('SET_PROGRESS', progress)
  },
  setSection: ({ commit }, section) => {
    return commit('SET_SECTION', section)
  },
  setNavigation: ({ commit }, navigation) => {
    return commit('SET_NAVIGATION', navigation)
  },
  setCover: ({ commit }, cover) => {
    return commit('SET_COVER', cover)
  },
  setMetadata: ({ commit }, metadata) => {
    return commit('SET_METADATA', metadata)
  },
  setOffsetY({ commit }, offsetY) {
    return commit('SET_OFFSETY', offsetY)
  },
  setIsBookmark({ commit }, isBookmark) {
    return commit('SET_IS_BOOKMARK', isBookmark)
  }
}

export default actions
