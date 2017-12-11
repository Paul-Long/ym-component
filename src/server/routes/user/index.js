import express from 'express';
import user from '../../controller/user';

const router = express.Router();

router.get('/', user.list);
router.post('/', user.save);
router.put('/', user.update);
router.delete('/', user.delete);

export default router;
