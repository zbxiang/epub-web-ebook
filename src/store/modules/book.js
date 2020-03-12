const book = {
  state: {
    fileName: ''
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    }
  }
}

export default book
