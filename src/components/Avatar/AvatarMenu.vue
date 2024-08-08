<template>
  <el-dropdown v-bind="props" @command="handleCommand">
    <div class="flex items-center">
      <!-- 用户头像 -->
      <el-avatar :size="avatarSize" :src="src" :alt="alt" :fit="fit" :src-set="srcSet" :shape="shape" :icon="icon">
        {{ username ? username[0].toUpperCase() : '' }}
      </el-avatar>
      <span v-if="username" class="ml-2">{{ username }}</span>
    </div>
    <!-- dropdown menu -->
    <template #dropdown>
      <el-dropdown-menu>
        <template v-for="(menu, index) in data" :key="index">
          <el-dropdown-item v-if="(typeof menu === 'object'
            && menu?.key ? menu.key : menu) !== 'divider'" :command="typeof menu === 'object'
              && menu?.key ? menu.key : menu">{{ typeof menu === 'object'
                && menu?.value ? menu.value : menu
            }}</el-dropdown-item>
          <el-divider v-else class="my-0!"></el-divider>
        </template>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang='ts'>
import type { AvatarMenuProps } from './types';

const props = withDefaults(defineProps<AvatarMenuProps>(), {
  //触发方式
  trigger: 'click',
  data: () => [],
  username: '',
  size: 'small'
})

const emits = defineEmits<{
  command: [arg: string | number | object]
}>()

const handleCommand = (command: string | number | object) => emits('command', command)
</script>
<style scoped></style>