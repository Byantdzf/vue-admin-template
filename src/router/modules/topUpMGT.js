import Layout from '@/layout/index.vue'
import {createNameComponent} from '../createNode'

const route = [
    {
        path: '/',
        component: Layout,
        redirect: '/topUpMGT',
        meta: {title: 'topUpMGT', icon: 'el-icon-soccer'},
        children: [
            {
                path: 'topUpMGT',
                component: createNameComponent(() => import('@/views/topUpMGT/index.vue')),
                meta: {title: '充值管理', icon: 'el-icon-soccer', hideClose: true}
            }
        ]
    }
]

export default route
