import userRouter from './user';
export default app => {
  // app.use('/api/user', userRouter);
  app.use('/birds', userRouter);
}