let express = require('express');
const userControllers = require('../controllers/users');
const postControllers = require('../controllers/post');
let router = express.Router();

router.post('/register-user', userControllers.createNewUser);
router.post('/login', userControllers.login);
router.get('/get-users', userControllers.getUsers);
router.get('/check-email/:email', userControllers.checkEmail);
router.get('/check-user-name/:userName', userControllers.checkUserName);
router.get('/check-phone/:phone', userControllers.checkPhone);
router.get('/check-if-seller/:email', userControllers.checkIfSeller);
router.post('/register-seller', userControllers.registerSeller);
router.post('/add-post', postControllers.addPost);
router.post('/get-posts', postControllers.getPosts);
module.exports = router;