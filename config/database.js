const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection
connection.on('connected', () => {
  console.log(`MongoDB connected on ${connection.host}`)
})

module.exports = mongoose