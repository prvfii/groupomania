const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const uploadController = require('../controllers/upload.controller');
const multer = require('../middleware/multer-config')


//auth
router.post('/signup', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);

// user display : block

router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.patch('/follow/:id', userController.follow);
router.patch('/unfollow/:id', userController.unfollow);

//upload

router.post('/upload'/* , upload.single('file') */, multer, uploadController.uploadProfil);



module.exports = router;