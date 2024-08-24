<template>
  <v-chart v-bind="props" :style="computedStyle" />
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart from "vue-echarts";
import type { VueEchartsProps } from "./types";

const props = withDefaults(defineProps<VueEchartsProps>(), {
  autoresize: true,
  theme: 'default',
  height: '400px'
})

const computedStyle = computed(() => {
  let style = {} as Record<string, any>
  if (props.theme && props.theme.startsWith('#')) {
    style = { backgroundColor: props.theme }
  }
  style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  return { ...style, ...props.style }
})

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])
</script>

<style scoped></style>
