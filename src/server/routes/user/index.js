import express from 'express';
import UserController from '../../controller/user';

const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('User Router Time : ', Date.now());
  next();
});
router.post('/login', UserController.login);
router.get('/logout', UserController.logout);
router.post('/list', UserController.list);
export default router;
