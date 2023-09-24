import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorLogger } from './shared/logger'

async function connection() {
  try {
    await mongoose.connect(config.database_url as string),
      logger.info('Connect successfully!!!')
    app.listen(config.port, () => {
      logger.info(`Application app listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Connect failure!!!', err)
  }
}

connection()
