let express = require('express');
const userControllers = require('../controllers/users');
const postControllers = require('../controllers/post');
const chatControllers = require('../controllers/chats');
let router = express.Router();

router.post('/register-user', userControllers.createNewUser);
router.post('/login', userControllers.login);
router.get('/get-users', userControllers.getUsers);
router.get('/check-email/:email', userControllers.checkEmail);
router.get('/get-seller-details/:email', userControllers.getSellerDetails);
router.get('/check-user-name/:userName', userControllers.checkUserName);
router.get('/check-phone/:phone', userControllers.checkPhone);
router.get('/check-if-seller/:email', userControllers.checkIfSeller);
router.post('/register-seller', userControllers.registerSeller);

// post routes
router.post('/add-post', postControllers.addPost);
router.post('/get-posts', postControllers.getPosts);
router.get('/get-post/:id', postControllers.getPost);
router.get('/get-trending-posts', postControllers.getTrendingPosts);

//chats routes
router.post('/add-new-chat', chatControllers.addNewChat);
router.post('/send-message', chatControllers.addMessage);
router.get('/get-chats/:id', chatControllers.getChats);
router.get('/get-messages/:id', chatControllers.getMessages);
router.get('/get-other-user/:userId/:chatId', chatControllers.getOtherUser);
module.exports = router;