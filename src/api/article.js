import fetch from '@/utils/fetch'

export function fetchList(query) {
  return fetch({
    url: 'http://sasmbp:7210/api/user/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle() {
  return fetch({
    url: 'http://sasmbp:7210/api/user/list',
    method: 'get'
  })
}

export function fetchPv(pv) {
  return fetch({
    url: 'http://sasmbp:7210/api/user/list',
    method: 'get',
    params: { pv }
  })
}

