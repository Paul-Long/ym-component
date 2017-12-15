import express from 'express';
import bookmark from '../../controller/bookmark/BookmarkController';

const router = express.Router();

router.route('/')
  .get(bookmark.list)
  .post(bookmark.save);

export default router;
