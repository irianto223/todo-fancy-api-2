const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true
}))
const userController = require('../controllers/user')

// router.get('/', userController.getAllData)

router.get('/:id', userController.getData)
router.put('/:id', userController.edit)
router.delete('/:id', userController.remove)
router.get('/me/tasks', userController.getTasks)
router.post('/me/addTask', userController.addTask)
router.delete('/:id/removeTask/:idTask', userController.removeTask)
router.patch('/:id/editTask/:idTask', userController.editTask)
router.get('/:id/getTask/:idTask', userController.getTask)
router.patch('/:id/switchStatus/:idTask', userController.switchStatus)

module.exports = router
