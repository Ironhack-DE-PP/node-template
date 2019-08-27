require('dotenv').config()

const app = require('./src')
const Config = require('./src/services/Config')
const { logger } = require('./src/utils/log')

app.listen(Config.server.PORT, () => {
  logger.info('Server started', 'port', Config.server.PORT)
})