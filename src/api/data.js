import fetch from '@/utils/fetch'

export function getList(method, params) {
  return fetch({
    // url: '/table/list',
    url: 'http://sasmbp:7210/api/open',
    method,
    params
  })
}
 function getList(base, method, params) {
  return fetch({
    // url: '/table/list',
    url: base,
    method,
    params
  })
}
  // url: 'http://ts.netease.com/api/db/sql?debug=false&sql=select+*+from+push+limit+5',
  // url: 'http://sasmbp:7010/api/push/sql',

  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }
    else {
      return Promise.reject(new Error(response.statusText));
    }
  }
