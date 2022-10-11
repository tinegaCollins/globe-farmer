const express = require('express');
const userControllers = require('../controllers/users');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/register-user', userControllers.createNewUser);
router.post('/login', userControllers.login);
router.get('/get-users', authenticateToken, userControllers.getUsers);
module.exports = router;