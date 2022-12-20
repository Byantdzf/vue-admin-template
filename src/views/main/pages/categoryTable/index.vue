<template>
  <div class="full">
    第二个页面
  </div>
</template>

<script>
import { defineComponent, ref, provide } from 'vue'
export default defineComponent({
  name: 'categoryTable',
  components: {
  },
  setup() {
    let active = ref({})
    provide('active', active)
  }
})
</script>

<style lang="scss" scoped>
  .full {
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    .left {
      width: 250px;
    }
    .content {
      flex: 1;
      width: calc(100% - 250px);
      height: 100%;
    }
  }
</style>
