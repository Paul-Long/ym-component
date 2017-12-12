import user from './user';
import account from './account';
import bookmark from './bookmark';

export default app => {
  app.use('/api/user', user);
  app.use('/api/account', account);
  app.use('/api/bookmark', bookmark);
}