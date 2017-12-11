import user from './user';
import account from './account';

export default app => {
  app.use('/api/user', user);
  app.use('/api/account', account)
}