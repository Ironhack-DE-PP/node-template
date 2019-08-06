const bunyan = require('bunyan')

const pjson = require('../../package.json')

const PRODUCTION = process.env.NODE_ENV === 'production'
const LOCAL = !process.env.NODE_ENV || process.env.NODE_ENV === 'test'

const config = {
  name: pjson.name,
  version: pjson.version,
  level: PRODUCTION ? 'info' : 'debug',
  streams: [
    { stream: process.stdout }
  ],
  serializers: {
    err: bunyan.stdSerializers.err,
    req: bunyan.stdSerializers.req,
    res: bunyan.stdSerializers.res,
  }

}

const logger = bunyan.createLogger(config)

module.exports = {
  logger
}