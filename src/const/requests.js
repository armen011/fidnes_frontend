import env from './env'

const requests = {
  global: () => env.BASE_URL + '/global',
  slides: (id) => env.BASE_URL + '/slider/' + id,
  news: () => env.BASE_URL + '/news',
  newsPage: (page) => env.BASE_URL + '/news?page=' + page,
  currentNews: (id) => env.BASE_URL + '/news/' + id,
  legalActs: () => env.BASE_URL + '/legalact/',
  currentPageData: (id) => env.BASE_URL + '/page/' + id,
  doSearch: (text) => env.BASE_URL + '/search/?s=' + text,
  sendContactForm: () => env.BASE_URL + '/contact/',
  management: () => env.BASE_URL + '/owner/',
  branch: () => env.BASE_URL + '/branch/'
}

export default requests
