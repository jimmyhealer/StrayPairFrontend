import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.withCredentials = true

// const CSRF_COOKIE_NAME = 'csrftoken';
// const CSRF_HEADER_NAME = 'X-CSRFToken';

// const session = axios.create({
//   xsrfCookieName: CSRF_COOKIE_NAME,
//   xsrfHeaderName: CSRF_HEADER_NAME,
// });

export default {
  login (data) {
    return ajax('auth/login/', 'post', {data})
  },
  profile (data) {
    return ajax('auth/profile/', 'get')
  },
  getNumber () {
    return ajax('pair')
  }
}

/**
 * @param url
 * @param method get|post|put|delete...
 * @param params like queryString. if a url is index?a=1&b=2, params = {a: '1', b: '2'}
 * @param data post data, use for method put|post
 * @returns {Promise}
 */
 function ajax (url, method, options) {
  if (options !== undefined) {
    var {params = {}, data = {}} = options
  } else {
    params = data = {}
  }
  return new Promise((resolve, reject) => {
    axios ({
      url,
      method,
      params,
      data
    }).then(res => {
      resolve(res)
    }, res => {
      reject(res)
    })
  })
}