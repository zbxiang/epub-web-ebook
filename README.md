# epub-web-ebook

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 移动端响应设置
document.addEventerliser('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
})

# store
store/modules/book.js
const books = {
    state: {
        fileName: ''
    },
    mutations: {
        SETFILENAME => (state, fileName) {
            state.fileName = fileName
        }
    }
}
export default books

store/actions.js
const actions = {
    setFileName: ({ commit }, visible) => {
        return commit('SET_FILENAME', fileName)
    }
}
export default actions

store/getters.js
const getters = {
    fileName: state => state.book.fileName
}
export default getters

store/index.js
export default new Vuex.Store({
    modules: {
        book
    },
    getters,
    actions
})
