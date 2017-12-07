import express from 'express';
import UserController from '../../controller/user';

const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('User Router Time : ', Date.now());
  next();
});
router.post('/login', UserController.login);
export default router;
