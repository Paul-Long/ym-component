export default [
  {path: '/', title: '简介', component: 'home'},
  {
    title: '基础组件', children: [
    {path: '/button', title: 'Button', component: 'button'},
    {path: '/menu', title: 'Menu', component: 'menu'},
    {path: '/icon', title: 'Icon', component: 'icon'},
    {path: '/input', title: 'Input', component: 'input'},
  ]
  },
  {
    title: '数据组件', children: [
    {path: '/table', title: 'Table', component: 'table'},
    {path: '/checkbox', title: 'Checkbox', component: 'checkbox'},
    {path: '/radio', title: 'Radio', component: 'radio'},
  ]
  },
  {
    title: '布局组件', children: [
    {path: '/layout', title: 'Layout', component: 'layout'},
    {path: '/iframe', title: 'IFrame', component: 'iframe'}
  ]
  }
]