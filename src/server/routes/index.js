import user from './user';
import account from './account';
import bookmark from './bookmark/BookmarkRouter';
import category from './mall/CategoryRouter';
import cos from './cos';

export default app => {
  app.use('/api/user', user);
  app.use('/api/account', account);
  app.use('/api/bookmark', bookmark);

  app.use('/api/mall/category', category);

  app.use('/api/cos', cos);
}