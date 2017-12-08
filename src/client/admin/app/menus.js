export default [
  {
    title: '用户', icon: 'user', children: [
      {path: '/user', title: '用户管理', component: 'user'},
      {path: '/manager', title: '管理员管理', component: 'manager'},
    ]
  }
]