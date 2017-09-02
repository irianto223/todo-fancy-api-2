const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())

mongoose.connect('mongodb://localhost/todofancyapi', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Database connected');
})

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/tasks', taskRouter)

app.listen(3000)
