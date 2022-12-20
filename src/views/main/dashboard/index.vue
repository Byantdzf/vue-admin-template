<template>
  <div class="box">
    <el-button @click="checkForm">
      测试接口
    </el-button>
    <el-button @click="checkFormV2">
      名言警句
    </el-button>

    <el-button @click="increment">Count is: {{ count }}</el-button>

    <h3>Mouse position is at: {{ x }}, {{ y }}</h3>
    <el-dialog v-model="visible" :show-close="false">
      <h1> {{ M_text }}</h1>
    </el-dialog>
  </div>
</template>

<script>
  import request from '@/utils/system/request'
  import axios from 'axios'
  import {defineComponent, onMounted, onUnmounted, ref} from 'vue'
  import {ElMessage} from "_element-plus@1.0.2-beta.71@element-plus";

  export default defineComponent({
    data() {
      return {
        count: 0,
        visible: false,
        M_text: ''
      }
    },
    setup() {
      const x = ref(0)
      const y = ref(0)
      const visible = ref(false)

      function update(event) {
        x.value = event.pageX
        y.value = event.pageY
      }

      onMounted(() => window.addEventListener('mousemove', update))
      onUnmounted(() => window.removeEventListener('mousemove', update))
      let data = {
        mobile: "15707534403",
        password: "a15707534403"
      }
      const checkForm = () => {
        return request({
          url: '/login/?new_admin=1',
          method: 'post',
          data
        }).then(res => {
          ElMessage.success({
            message: '调用成功',
            type: 'success',
            showClose: true,
            duration: 1000
          })
        })
      }
      return {
        x,
        y,
        visible,
        update,
        onMounted,
        onUnmounted,
        checkForm
      }
    },
    methods: {
      checkFormV2(done) {
        let vm = this
        console.log('1')
        axios.post('https://api.xygeng.cn/one', {headers: {'Content-Type': 'multipart/form-data'}}
        ).then((response) => {
          if (response.status === 200) {
            let {data} = response.data
            console.log(response)
            console.log(data)
            vm.visible = true
            vm.M_text = data.content
          } else {

          }
        })
      },
      increment() {
        this.count++
        console.log(this.count++)
      }
    },
    mounted() {
      console.log(`The initial count is ${this.count}.`)
    }
  })

</script>

<style lang="scss" scoped>
.box {
  padding: 15px;
}

button {
  font-weight: bold;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>
