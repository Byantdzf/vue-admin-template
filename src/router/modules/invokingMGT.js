import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    path: '/',
    component: Layout,
    redirect: '/invokingMGT',
    meta: { title: 'invokingMGT', icon: 'el-icon-place' },
    children: [
      {
        path: 'invokingMGT',
        component: createNameComponent(() => import('@/views/invokingMGT/index.vue')),
        meta: { title: '调用管理', icon: 'el-icon-place', hideClose: true }
      }
    ]
  }
]

export default route
