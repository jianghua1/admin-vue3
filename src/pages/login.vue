<template>
  <div class="">
    <!-- title -->
    <h3 class="mb-5"> {{ title }}</h3>
    <!-- 表单 -->
    <el-form :model="form" label-width="120px" class="min-w-[450px]">
      <el-form-item>
        <el-input v-model="form.username" placeholder="请输入手机号/账号" :prefix-icon="getIcon('ep:user')" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="请输入密码" :prefix-icon="getIcon('ep:lock')" />
      </el-form-item>
      <el-row class="items-center justify-between">
        <el-form-item>
          <el-checkbox label="记住我" name="type" v-model="form.remeber"></el-checkbox>
        </el-form-item>
        <el-link type="primary">注册账号</el-link>
      </el-row>
      <!-- 登录 -->
      <el-form-item>
        <el-button type="primary" class="w-full mt-4" click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
    <!-- 第三方登录 -->
  </div>
</template>

<script setup lang='tsx'>
import type { IconifyIcon } from '@iconify/vue'
import Iconify from '@/components/Icon/Iconify.vue'
import Layouts from 'vite-plugin-vue-layouts';

definePage({
  meta: {
    layout: 'single-page'
  }
})

function getIcon(icon: string) {
  return () => <Iconify icon={icon} ></Iconify>
}
/**
 * 适用于第三方登录
 */
interface LoginItem {
  icon: IconifyIcon | string
  url: string
}
/**
 * 表单数据模型
 */
interface LoginFormProps {
  position: 'left' | 'center' | 'right'
  title?: string
  loginItems: LoginItem[]
}

defineProps<LoginFormProps>()

const form = reactive({
  username: '',
  password: '',
  repassword: '',
  phone: '',
  email: '',
  code: '',
  remeber: false
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
<style scoped></style>