<template>
  <LoginForm :login-items="loginItems" @submit="handleSubmit"></LoginForm>
</template>

<script setup lang='ts'>
definePage({
  meta: {
    title: '登录注册',
    hideMenu: true,
    layout: 'single-page',
    position: 'left',
    backgroundImage: 'https://media.istockphoto.com/id/1700548351/photo/businessman-and-businesswoman-in-the-office.jpg?s=2048x2048&w=is&k=20&c=q0GEioLtJtELq01mTxhl-P2_6lnKrwhsimVf3GDS_t4='
  }
})


const loginItems = [
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

const handleSubmit = (from: any) => {

}

</script>
<style scoped>
:deep(.el-form-item__content) {
  margin-left: 0px !important;
}
</style>