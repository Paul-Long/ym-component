import express from 'express';
import bookmark from '../../controller/bookmark';

const router = express.Router();

router.route('/')
  .post(bookmark.save)
  .get(bookmark.list);

export default router;
