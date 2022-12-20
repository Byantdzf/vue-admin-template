<template>
  <div class="layout-container">
    <div class="layout-container-form alignment_right">
      <div class="layout-container-form-search">
        <el-input v-model="query.input" placeholder="请输入关键词进行检索" @change="getTableData(true)"></el-input>
        <el-button type="primary" icon="el-icon-search" class="search-btn" @click="getTableData(true)">搜索</el-button>
      </div>
    </div>
    <div class="layout-container-table">
      <Table ref="table" :page="page" v-loading="loading" :showIndex="false" :showSelection="false" :data="list" @getTableData="getTableData">
        <el-table-column label="图片内容" align="center">
          <template #default="scope">
            <el-image class="ui-table-image" :src="scope.row.url" fit="fit" />
          </template>
        </el-table-column>
        <el-table-column prop="number" label="识别结果" align="center" />
        <el-table-column prop="name" label="调用商家" align="center" />
        <el-table-column prop="radio" label="调用时间" align="center" />
        <el-table-column label="操作" align="center" fixed="right" width="200">
          <template #default="scope">
            <el-button link type="primary" size="small">充值</el-button>
          </template>
        </el-table-column>
      </Table>
    </div>
  </div>
</template>

<script setup>
import request from '@/utils/system/request'
import {ref, onMounted, reactive} from 'vue'
import Table from '@/components/table/index.vue'
import { getData } from '@/api/table'

const loading = ref(true)
let timer = ref(null)
const list = ref([]) // 列表数据
const query = reactive({input: ''}) // 条件搜索Key
const page = reactive({index: 1, size: 15, total: 0}) // 列表当前页、条数、总数

const getTableData = (init) => {
  loading.value = true
  if (init) {
    page.index = 1
  }
  let params = {
    page: page.index,
    pageSize: page.size,
    ...query
  }
  getData(params).then(res => {
    list.value = res.data.list
    list.value.forEach((item)=>{
      item.url = 'https://image.fulllinkai.com/202212/20/8fbfda923ed5a969143144bfc4a73853.jpeg'
    })
    page.total = Number(res.data.pager.total)
  }).catch(error => {
    list.value = []
    page.index = 1
    page.total = 0
  }).finally(() => {
    loading.value = false
  })
}
// 分页相关：监听页码切换事件
const handleCurrentChange = (val) => {
  console.log(timer.value, val, '877')
  if (timer.value) {
    page.index = 1
  } else {
    page.index = val
    getTableData()
  }
}
// 分页相关：监听单页显示数量切换事件
const handleSizeChange = (val) => {
  timer.value = 'work'
  setTimeout(() => {
    timer.value = null
  }, 100)
  page.size = val
  getTableData(true)
}
getTableData(true)
onMounted(()=>{
})
</script>

<style lang="scss" scoped>
</style>
