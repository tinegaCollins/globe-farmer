const express = require('express');
const userControllers = require('../controllers/users');

const router = express.Router();

router.post('/register-user', userControllers.createNewUser);
router.post('/login', userControllers.login);
router.get('/get-users', userControllers.getUsers);
router.get('/check-email/:email', userControllers.checkEmail);
router.get('/check-user-name/:userName', userControllers.checkUserName);
module.exports = router;