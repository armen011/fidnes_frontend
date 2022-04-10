import env from './env'

const requests = {
  global: () => env.BASE_URL + '/global',
  slides: () => env.BASE_URL + '/slider/',
  news: () => env.BASE_URL + '/news',
  currentNews: (id) => env.BASE_URL + '/news/' + id,
  legalActs: () => env.BASE_URL + '/legalact/',
  currentPageData: (id) => env.BASE_URL + '/page/' + id,
  doSearch: (text) => env.BASE_URL + '/search/?s=' + text,
  sendContactForm: () => env.BASE_URL + '/contact/',
}

export default requests
