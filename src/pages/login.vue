<template>
  <div class="self-center lg:self-end bg-white lt-xl2:shadow rounded p-4">
    <!-- title -->
    <div class="text-2xl mb-10"> {{ title }}</div>
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
          <el-checkbox label="记住账号" name="type" v-model="form.remeber"></el-checkbox>
        </el-form-item>
        <el-link type="primary">注册账号</el-link>
      </el-row>
      <!-- 登录 -->
      <el-form-item>
        <el-button type="primary" class="w-full mt-4" click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
    <!-- 第三方登录 -->
    <!-- 第三方登录的做法就是贴图标，然后图标上绑定跳转连接就可以了 -->
    <el-divider direction="horizontal" class="mt-10">
      <span class="text-gray-500">其他登录方式</span>
    </el-divider>
    <div class="flex justify-around">
      <Iconify :icon="item.icon" class="cursor-pointer text-2xl text-gray-200 hover:text-sky-500"
        v-for="(item, index) in loginItems" :key="index" @click="handleClickItem(item.url)"></Iconify>
    </div>
  </div>
</template>

<script setup lang='tsx'>
import type { IconifyIcon } from '@iconify/vue'
import Iconify from '@/components/Icon/Iconify.vue'

definePage({
  meta: {
    layout: 'single-page',
    hideMenu: true,
    title: '登录注册',
    position: 'left',
    backgroundImage: 'https://media.istockphoto.com/id/1700548351/photo/businessman-and-businesswoman-in-the-office.jpg?s=2048x2048&w=is&k=20&c=q0GEioLtJtELq01mTxhl-P2_6lnKrwhsimVf3GDS_t4='
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

withDefaults(defineProps<LoginFormProps>(), {
  title: '欢迎登录',
  loginItems: () => [
    {
      icon: 'ic:baseline-wechat',
      url: 'https://mp.weixin.qq.com'
    },
    {
      icon: 'icon-park:tencent-qq',
      url: 'https://mp.weixin.qq.com'
    },
    {
      icon: 'bi:sina-weibo',
      url: 'https://mp.weixin.qq.com'
    }, {
      icon: 'mdi-github',
      url: 'https://mp.weixin.qq.com'
    }
  ]
})

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

const handleClickItem = (url: string) => {
  // 跳转到第三方登录
  window.open(url)
}
</script>
<style scoped>
:deep(.el-form-item__content) {
  margin-left: 0px !important;
}
</style>