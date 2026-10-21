import express from 'express';
import userController from '../controlles/userControllers.js';

var router = express.Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.post('/login', userController.login);

export default router;