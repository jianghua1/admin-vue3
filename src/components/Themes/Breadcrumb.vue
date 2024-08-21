<!-- <template>
  <el-breadcrumb>
    <el-breadcrumb-item :to="{ path: '/' }" v-for="(item, index) in breadcrumnData" :key="item.fullPath">
      <span>
        {{ item.meta?.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang='ts'>
import { useRoute, useRouter } from 'vue-router/auto'
//获取页面路由
const route = useRoute()
//控制页面路由
const router = useRouter()

const breadcrumnData = ref<any>([])

function getBreadcrumnData() {
  breadcrumnData.value = route.matched.filter(item => item.name && item.meta && item.meta.title)
}

watch(route, () => {
  getBreadcrumnData()
}, { immediate: true })
</script>
<style scoped></style> -->