<template>
  <ul class="flex flex-wrap border rounded">
    <li @click="handleClick(i)" :class="['border-b border-r flex flex-col justify-center items-center cursor-pointer ',
      itemClass]" v-for="(i, index) in iconData" :key="index">
      <component :is="Icon" :icon="`${collection}:${i}`" :class="iconClass"></component>
      <div>{{ i }}</div>
    </li>
  </ul>
</template>
<script setup lang='ts'>

import data from './icon-ep.json';
import { loadIcons, Icon } from '@iconify/vue';

// import json from '@iconify/json/json/ep.json';
// console.log(Object.keys(json))
// const iconsKeyAndValue = json.icons;
// console.log(Object.keys(iconsKeyAndValue))

interface IconListType {
  iconData: string[]
  collection: string
  showText: boolean
  itemClass: string
  iconClass: string
}


const props = withDefaults(defineProps<IconListType>(), {
  iconData: () => data,
  // collection: 'ep',
  showText: false,
  itemClass: 'hover:bg-sky-200 w-1/8 py-4',
  iconClass: 'text-3xl mt-3'
})


onBeforeMount(async () => {
  await loadIcons(props.iconData)
})

//回调钩子
const emits = defineEmits<{
  'click': [iconName: string]
}>()

//点击事件
async function handleClick(iconName: string) {
  emits('click', iconName)
}

</script>
<style scoped></style>