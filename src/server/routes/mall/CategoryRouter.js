import express from 'express';
import category from '../../controller/mall/CategoryController';

const router = express.Router();


router.route('/')
  .get(category.list)
  .post(category.save)
  .delete(category.delete);

export default router;