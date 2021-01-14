const express = require('express')
const cors = require('cors')

const booksRouter = require('./routes/books')

const app = express()
const port = process.env.PORT || 3001

require('dotenv').config();
require('./config/database');

app.use(cors())
app.use(express.json())

app.use('/books', booksRouter)

app.listen(port, () => {
  console.log('Connected, server listening on port 3001...')
})