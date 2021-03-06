import express from 'express';
import bookmark from '../../controller/bookmark/BookmarkController';

const router = express.Router();

router.route('/')
  .get(bookmark.list)
  .post(bookmark.save)
  .delete(bookmark.delete);

export default router;
