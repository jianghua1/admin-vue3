<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useRegisterSW } from 'virtual:pwa-register/vue'

const intervalMS = 60 * 60 * 1000

useRegisterSW({
  onRegisteredSW(r) {
    r && setInterval(() => {
      r.update()
    }, intervalMS)
  }
})

</script>
<style scoped></style>
