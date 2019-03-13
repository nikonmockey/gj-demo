const express = require('express')
const app = express()
const path = require('path')
const request = require('request')
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}))

const auth = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcm92aWRlciI6ImxvY2FsIiwic3ViIjozMTI5LCJwYXlsb2FkIjp7ImlzVXNlciI6dHJ1ZSwiY3JlYXRlZEF0IjoxNTM5OTM1NzgzMDExLCJ0aW1lc3RhbXAiOjE1Mzk5MzU3ODMwMTEsInNlcnZpY2UiOiIxMjcuMC4wLjEiLCJzY29wZSI6WyJhZGRyZXNzIl19fQ.I8PlYICJpUsb3x56lDbBjV9mW-FFpU8cun9AaKRaXo0'
app.use(express.static(path.resolve(__dirname, 'dist')))

app.all('/api/*', function (req, res) {
  // debugger
  const backEndApiBaseEndpoint = 'https://dev.jazzpoolproject.com/back-api/'

  const { method, url, body } = req

  const endpointPath = url.replace(/^\/api\//, '')
  const backendEndpoint = backEndApiBaseEndpoint + endpointPath

  request({
    url: backendEndpoint,
    method,
    headers: {
      'Authorization': auth
    },
    json: body
  }, (error, response, body) => {
    if (error) {
      console.error('Server error', error)
      return false
    }
    res.send(body)
  })
})

app.listen(3838, function () {
  console.log('Example app listening on port 3838!')
})
