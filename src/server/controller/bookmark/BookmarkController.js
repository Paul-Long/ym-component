import formidable from 'formidable';
import Bookmark from '../../models/bookmark/Bookmark';
import Result from '../../utils/Result';

class BookmarkController {
  save = async (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      let bookmark = new Bookmark(Object.assign({}, fields));
      bookmark = await bookmark.save();
      res.send(Result.success(bookmark, '保存成功'));
    });
  };

  list = async (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      const bookmarks = await Bookmark.find({});
      res.send(Result.success(bookmarks));
    });
  };
  delete = async (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      await Bookmark.remove({'_id': fields._id});
      res.send(Result.success(null, '删除成功'));
    });
  }
}

export default new BookmarkController();
