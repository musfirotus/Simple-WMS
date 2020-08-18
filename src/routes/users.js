const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/usersController')

router
  .get('/', UsersController.getUsers)
  .get('/:id', UsersController.getUser)
  .post('/', UsersController.saveUser)
  .put('/:id', UsersController.updateUser)
  .delete('/:id', UsersController.deleteUser)

module.exports = router;