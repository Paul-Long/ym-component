export default [
  {
    title: '用户', icon: 'user', children: [
      {path: '/user', title: '用户管理', component: 'user'},
      {path: '/manager', title: '管理员管理', component: 'manager'},
    ],
  },
  {
    title: '商城', icon: 'skin', children: [
      {path: '/mall/ad', title: '轮播管理', component: 'mall/ad'},
      {path: '/mall/product', title: '产品管理', component: 'mall/product'},
      {path: '/mall/category', title: '类目管理', component: 'mall/category'}
    ],
  }
]