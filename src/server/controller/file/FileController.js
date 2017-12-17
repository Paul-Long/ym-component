import Cos from '../../coscloud';
import formidable from 'formidable';

class FileController {
  upload = async (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      console.log(files);
      const file = files[0];
      Cos.uploadFile((result) => console.log('success', result), (result) => console.log('error', result), (curr, sha1) => console.log('progressCallBack ', curr, sha1), 'houym', '/' + file.name, file, 0, function (taskId) {
        console.log(taskId);
      });
      res.send({a: 'a'});
    });
  };
}