import express from 'express';
import account from '../../controller/account';

const router = express.Router();

router.post('/login', account.login);
router.get('/logout', account.logout);
router.post('/changePassword', account.changePassword);

export default router;
