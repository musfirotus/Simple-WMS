const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/usersController')

router.get('/', UsersController.getUsers)

module.exports = router;