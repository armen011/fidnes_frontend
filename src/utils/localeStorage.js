export const setLocaleOnLocaleStorage = (locale) => {
  localStorage.setItem('locale', locale)
}

export const getLocaleFromLocaleStoreage = () => {
  return localStorage.getItem('locale')
}
