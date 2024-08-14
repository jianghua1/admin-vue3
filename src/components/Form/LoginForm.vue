<template>
  <!-- <div class="self-center bg-white shadow rounded p-4"> -->
  <!-- title -->
  <div class="text-2xl mb-10"> {{ title }}</div>
  <!-- 表单 -->
  <el-form :model="form" class="min-w-[450px]">
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
  <!-- </div> -->
</template>

<script setup lang='tsx'>
import Iconify from '../Icon/Iconify.vue'
import type { LoginFormProps, LoginItem } from './types';

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

const emits = defineEmits(['clickIcon', 'submit'])

function getIcon(icon: string) {
  return () => <Iconify icon={icon} > </Iconify>
}

const handleClickItem = (item: LoginItem) => {
  // window.open(url)
  emits('clickIcon', item.url)
}

const onSubmit = (form: any) => {
  emits('submit', form)
}
</script>
<style scoped></style>