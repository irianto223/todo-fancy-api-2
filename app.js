const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())

mongoose.connect('mongodb://irianto223:satekambing@cluster0-shard-00-00-obtyj.mongodb.net:27017,cluster0-shard-00-01-obtyj.mongodb.net:27017,cluster0-shard-00-02-obtyj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected');
  }
})

// mongoose.connect('mongodb://localhost/todo-test', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Database connected');
//   }
// })

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/tasks', taskRouter)

app.listen(process.env.PORT || '3000')
