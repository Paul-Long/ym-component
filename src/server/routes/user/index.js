import express from 'express';
import user from '../../controller/user';

const router = express.Router();


router.route('/')
  .get(user.list)
  .post(user.save)
  .put(user.update)
  .delete(user.delete);

export default router;
