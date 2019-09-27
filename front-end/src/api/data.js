'use strict'

import request from '@/utils/request'

export function getData(unit) {
  return request({
    url: '/data/' + unit,
    method: 'get'
  })
}
