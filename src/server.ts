import express from 'express'
import payload from 'payload'


require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  // ...
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   next();
  // });


  app.listen(1337)
  
}

start()
