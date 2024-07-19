<template>
  <el-badge :value="value" :max="10000" :style="{
    '--tomic-notice-bg-color': color || 'var(--el-color-danger)',
    '--tomic-notice-font-size': size + 'px'
  }">
    <slot>
      <Icon icon="ep:bell" class="text-3xl"
        :style="{ color: iconColor ?? '#456123', fontSize: iconSize ? `${iconSize}px` : '18px' }" />
    </slot>

  </el-badge>
</template>

<script setup lang='ts'>
import { Icon, type IconifyIcon } from '@iconify/vue'
import { BadgeProps } from 'element-plus'
//若我们的泛型上的值不是必须传的可以添加Partial
interface Notification extends Partial<BadgeProps> {
  icon: string | IconifyIcon
  size: number
  color: string
  // 之所以是可选的是因为默认可以是黑白的
  iconSize?: number
  iconColor?: string
}
//初始化组件参数
withDefaults(defineProps<Notification>(), {
  icon: 'ep:bell',
  size: 18,
  color: ''
})
</script>
<style lang="scss" scoped>
$color: var(--tomic-notice-bg-color);
$size: var(--tomic-notice-font-size);

//深度选择器
:deep(.el-badge__content) {
  background-color: $color;
  font-size: $size;
}
</style>