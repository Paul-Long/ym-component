import express from 'express';
import formidable from 'formidable'

const router = express.Router();

async function list(req, res, next) {
  console.log('About birds');
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    console.log(err, fields, files);
    res.send({
      status: 0,
      type: 'GET_ERROR_PARAM',
      message: 'About birds',
    });
  });
}

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('User Router Time : ', Date.now());
  next();
});
router.get('/list', list);
router.post('/login', (req, res) => {

});
export default router;
