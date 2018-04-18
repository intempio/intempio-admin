import request from '@/utils/request'

const resourceURL = '/sunovion-events/'

export function fetchList(query) {
  return request({
    url: resourceURL,
    method: 'get',
    params: query
  })
}

export function fetchEvent(eventId) {
  return request({
    url: resourceURL + eventId + '/',
    method: 'get'
  })
}

export function createEvent(data) {
  return request({
    url: resourceURL,
    method: 'post',
    data
  })
}

export function updateEvent(eventId, data) {
  return request({
    url: resourceURL + eventId + '/',
    method: 'put',
    data
  })
}

export function deleteEvent(eventId) {
  return request({
    url: resourceURL + eventId + '/',
    method: 'delete'
  })
}

export function fetchOptions() {
  return request({
    url: resourceURL,
    method: 'options'
  })
}