import request from 'superagent'
import { each } from 'lodash'
// import { getState } from 'helpers'
// import { auth } from 'redux/actions'


const doRequest = (url, options) => {

  if (!options.method) {
    options.method = 'get'
  }

  const req = request[options.method.toLowerCase()](url)

  if(!options.noToken) {
    // const token = getState().auth.token
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcm92aWRlciI6ImxvY2FsIiwic3ViIjozMTIwLCJwYXlsb2FkIjp7ImlzVXNlciI6dHJ1ZSwiY3JlYXRlZEF0IjoxNTM3NzY1OTUwODY4LCJ0aW1lc3RhbXAiOjE1Mzc3NjU5NTA4NjgsInNlcnZpY2UiOiIxMjcuMC4wLjEiLCJzY29wZSI6WyJhZGRyZXNzIl19fQ.NKl6MxwTQsvUNckWpFs8unVuv8Ksh6o7tLDm3ItBork'

    req.set({
      Authorization: token,
      "Content-type": "JSON",
    })
  }

  if (options && !options.noCredentials) {
    req.withCredentials()
  }

  if (options.headers) {
    req.set(options.headers)
  }

  if (options.query) {
    req.query(options.query)
  }

  if (options.body) {
    req.send(JSON.stringify(options.body))
  }

  if (options.file) {
    req.attach('file', options.file)
  }

  if (options.files) {
    each(options.files, (file) => {
      req.attach('file', file)
    })
  }

  // if (options.token) {
  //   req.set({ Authorization: `Bearer ${options.token}` })
  // }

  // if (options.getToken) {
  //   const token = options.getToken(getState())
  //   if (token) {
  //     req.set({ Authorization: `Bearer ${token}` })
  //   }
  // }

  // if (options.auth) {
  //   req.auth(...options.auth)
  // }

  return req
}


const requestByMethod = (method) =>
  (url, options) => {
    options = options || {}

    if (typeof(options.before) === 'function') {
      options.before()
    }

    if (typeof(options.setLoading) === 'function') {
      options.setLoading(true)
    }

    return new Promise((resolve, reject) =>
      doRequest(url, { ...options, method })
        .end( (err, data) => {
          console.log('request', url, data, err)

          if (typeof(options.always) === 'function') {
            options.always()
          }

          if (typeof(options.setLoading) === 'function') {
            options.setLoading(false)
          }

          if (data && data.ok && !data.body) {
            return resolve(data.text)
          }

          if (err) {
            // if (data.statusCode === 401) {
            //   auth.logout()
            // }
            return reject(data && data.body)
          } else {
            return resolve(data && data.body)
          }
        })
    )
  }

doRequest.get = requestByMethod('get')
doRequest.post = requestByMethod('post')
doRequest.patch = requestByMethod('patch')
doRequest.put = requestByMethod('put')
doRequest.delete = requestByMethod('delete')
doRequest.upload = requestByMethod('post')


export default doRequest
