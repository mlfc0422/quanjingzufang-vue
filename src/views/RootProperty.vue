<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios from "axios";
import router from "../router/router.ts";


// 定义行数据的接口
interface Property {
  id: number;
  title: string;
  userId: number;
  userStatus: String;
  createTime: Date;
  updateTime: Date;

}

const propertyList = ref<Property[]>([]);
const keyword = ref();
const filteredPropertyList = ref<Property[]>([
  {
    id: 1,
    title: '测试房源1',
    userId: 101,
    userStatus: '已发布',
    createTime: new Date('2024-09-25T08:00:00'),
    updateTime: new Date('2024-09-25T10:00:00')
  },
  {
    id: 2,
    title: '测试房源2',
    userId: 102,
    userStatus: '待审核',
    createTime: new Date('2024-09-25T09:00:00'),
    updateTime: new Date('2024-09-25T11:00:00')
  },
  {
    id: 3,
    title: '测试房源3',
    userId: 103,
    userStatus: '已下架',
    createTime: new Date('2024-09-25T10:00:00'),
    updateTime: new Date('2024-09-25T12:00:00')
  }
]);

onMounted(() => {
  getPropertyList(); // 组件挂载时获取房源列表数据
});

function getPropertyList() {
  axios.get('property/list')
      .then(res => {
        propertyList.value = res.data.data;
        filteredPropertyList.value = res.data.data.slice();
      })
      .catch(err => {
        console.log(err);
      });
}

function deleteInformation() {
  router.push('/rootIndex/rootOrdersDetail');
}

function handleSearch() {
  // 过滤房源列表
  filteredPropertyList.value = propertyList.value.filter((property) => {
    console.log("key的值"+keyword.value);
    return property.title.includes(keyword.value) || property.userStatus.includes(keyword.value);
  });
}
</script>

<template>
  <div id="order">
    <el-input v-model="keyword" @input="handleSearch" placeholder="输入关键字搜索房源" clearable></el-input>
    <el-table :data="filteredPropertyList" height="100%" style="width: 100%">
      <el-table-column prop="id" label="ID" style="width: 5%"/>
      <el-table-column prop="title" label="标题" style="width: 10%"/>
      <el-table-column prop="userId" label="用户ID" style="width: 5%"/>
      <el-table-column prop="userStatus" label="状态" style="width: 10%"/>
      <el-table-column label="创建时间" style="width: 30%">
        <template v-slot="scope">
          {{ new Date(scope.row.createTime).toLocaleString() }}
        </template>
      </el-table-column>
      <el-table-column label="更新时间" style="width: 30%">
        <template v-slot="scope">
          {{ new Date(scope.row.updateTime).toLocaleString() }}
        </template>
      </el-table-column>
      <!--在这里添加详情信息按钮 -->
      <el-table-column label="操作" style="width: 10%">
        <template v-slot="">
          <el-button type="primary" @click="deleteInformation()">详情信息</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
#order {
  width: 100%;
}
</style>