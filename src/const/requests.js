import env from './env'

export default {
  global: () => env.BASE_URL + '/global',
  getImgUrl: (url) => env.BASE_URL + url,
}
