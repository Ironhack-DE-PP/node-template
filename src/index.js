const express = require('express')
const httpStatus = require('http-status')

const app = express()

app.use()

app.use(function (err, req, res, next) {
  if(process.env.NODE_ENV !== 'production') {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.stack)
  }
})

module.exports = app