import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    path: '/',
    component: Layout,
    redirect: '/merchantMGT',
    meta: { title: 'merchantMGT', icon: 'el-icon-user' },
    children: [
      {
        path: 'merchantMGT',
        component: createNameComponent(() => import('@/views/merchantMGT/index.vue')),
        meta: { title: '商家管理', icon: 'el-icon-user', hideClose: true }
      }
    ]
  }
]

export default route
