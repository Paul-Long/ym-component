import formidable from 'formidable';
import Bookmark from '../../models/bookmark';
import Result from '../../utils/Result';

class BookmarkController {
  constructor() {
    this.save.bind(this);
    this.list.bind(this);
  }

  async save(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      let bookmark = await Bookmark.save(Object.assign({}, fields));
      return res.send(Result.success(bookmark, '保存成功'));
    });
    next();
  }

  async list(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      const bookmarks = await Bookmark.find({});
      console.log(bookmarks);
      res.send(Result.success(bookmarks));
    });
  }
}

export default new BookmarkController();
