import formidable from 'formidable';
import Bookmark from '../../models/bookmark/Bookmark';
import Result from '../../utils/Result';

class BookmarkController {
  save = async (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      let bookmark = await Bookmark.save(Object.assign({}, fields));
      return res.send(Result.success(bookmark, '保存成功'));
    });
    next();
  };

  list = async (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      const bookmarks = await Bookmark.find({});
      res.send(Result.success(bookmarks));
    });
  };
}

export default new BookmarkController();
