import fetch from '@/utils/fetch'

export function getList(params) {
  return fetch({
    // url: '/table/list',
    url: 'http://sasmbp:7210/api/user/list',
    method: 'get',
    params
  })
}
  // url: '/table/list',
  // url: 'http://ts.netease.com/api/db/sql?debug=false&sql=select+*+from+push+limit+5',
  // url: 'http://sasmbp:7010/api/push/sql',
// var ul = 'http://sasmbp:7010/api/push/sql';

  function status(response) {
    console.log(666);
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }
    else {
      return Promise.reject(new Error(response.statusText));
    }
  }

 function json(response) {
    console.log(555);
    console.log(response);
    return response;
  }
