import Storage from 'web-storage-cache'

const localStorage = new Storage()

export function getLocalStorage(key) {
  return localStorage.get(key)
}

export function setLocalStorage(key, value, expire = 30 * 24 * 3600) {
  return localStorage.set(key, value, { exp: expire })
}

export function removeLocalStorage(key) {
  return localStorage.delete(key)
}

export function clearLocalStorage() {
  return localStorage.clear()
}

export function saveFontSize(fileName, fontSize) {
  setBookObject(fileName, 'fontSize', fontSize)
}

export function saveFontFamily(fileName, fontFamily) {
  setBookObject(fileName, 'fontFamily', fontFamily)
}

export function setBookObject(fileName, key, value) {
  let book = {}
  if (getLocalStorage(`${fileName}-info`)) {
    book = getLocalStorage(`${fileName}-info`)
  }
  book[key] = value
  setLocalStorage(`${fileName}-info`, book)
}
