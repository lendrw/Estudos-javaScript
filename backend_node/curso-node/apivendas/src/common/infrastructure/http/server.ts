import { env } from '../env'
import { dataSource } from '../typeorm'
import { app } from './app'
import '@/common/infrastructure/container'

dataSource
  .initialize()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`Server is runnig on port ${env.PORT}`)
      console.log(`API docs avaliable at GET /docs`)
    })
  })
  .catch(error => {
    console.error('Error during Data Source initialization', error)
  })
