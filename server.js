const express = require('express')
const cors = require('cors')

const booksRouter = require('./routes/books')

const app = express()

require('dotenv').config();
require('./config/database');

app.use('/books', booksRouter)

app.listen(process.env.PORT || 3001, () => {
  console.log('Connected, server listening on port 3001...')
})