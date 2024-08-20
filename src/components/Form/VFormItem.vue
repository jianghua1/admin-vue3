<template>
  <el-form-item v-bind="props">
    <el-input v-if="type === 'input'" v-model="modelValue" />

    <el-select v-else-if="type === 'select'" v-model="modelValue" placeholder="please select your zone">
      <el-option label="Zone one" value="shanghai" />
      <el-option label="Zone two" value="beijing" />
    </el-select>
    <el-date-picker v-else-if="type === 'date-picker'" v-model="modelValue" type="date" placeholder="Pick a date"
      style="width: 100%" />
    <!-- <el-col :span="11">
      <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
    </el-col>
    <el-col :span="2" class="text-center">
      <span class="text-gray-500">-</span>
    </el-col>
    <el-col :span="11">
      <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
    </el-col> -->
    <el-time-picker v-else-if="type === 'time-picker'" v-model="modelValue" placeholder="Pick a time"
      style="width: 100%" />
    <el-switch v-else-if="type === 'switch'" v-model="modelValue" />
    <el-checkbox-group v-else-if="type === 'checkbox-group'" v-model="modelValue">
      <el-checkbox label="Online activities" name="type" />
      <el-checkbox label="Promotion activities" name="type" />
      <el-checkbox label="Offline activities" name="type" />
      <el-checkbox label="Simple brand exposure" name="type" />
    </el-checkbox-group>
    <el-radio-group v-else-if="type === 'radio-group'" v-model="modelValue">
      <el-radio label="Sponsor" />
      <el-radio label="Venue" />
    </el-radio-group>
  </el-form-item>
</template>

<script setup lang='ts'>
import type { FormItemProp } from "./types"

const props = withDefaults(defineProps<FormItemProp>(), {

})

const modelValue = defineModel()

</script>
<style scoped></style>