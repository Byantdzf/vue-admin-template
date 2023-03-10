import axios from 'axios'
import store from '@/store'
import {ElMessage} from 'element-plus'

const baseURL = import.meta.env.VITE_BASE_URL

const service = axios.create({
    baseURL: baseURL,
    timeout: 8000,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json'
    }
})

// 请求前的统一处理
service.interceptors.request.use(
    (config) => {
        // JWT鉴权处理
        // if (store.getters['user/token']) {
        //   config.headers['token'] = store.state.user.token
        // }

        const token = store.state.user.token
        // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        config.headers['Authorization'] = 'Bearer ' + token
        return config
    },
    (error) => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        const res = response.data
        if (res.code === 0) {
            return res
        } else {
            showError(res)
            return Promise.reject(res)
        }
    },

    (error) => {
        console.log(error) // for debug
        const badMessage = error.message || error
        const code = parseInt(badMessage.toString().replace('Error: Request failed with status code ', ''))
        // showError({ code, message: badMessage })
        return Promise.reject(error)
    }
)

function showError(error) {
    // console.log(error)
    // debugger
    if (error.code === 2) {
        // to re-login
        store.dispatch('user/loginOut')
    } else {
        ElMessage({
            message: error.msg || error.message || '服务异常',
            type: 'error',
            duration: 3 * 1000
        })
    }
}

export default service
