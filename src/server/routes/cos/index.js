import Cos from '../../controller/cos';
import express from 'express';

const router = express.Router();

router.route('/')
  .get(Cos.sign);

export default router;
