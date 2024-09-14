<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios from "axios";


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
const filteredPropertyList = ref<Property[]>([]);

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
      <el-table-column prop="id" label="ID" width="180"/>
      <el-table-column prop="title" label="标题" width="180"/>
      <el-table-column prop="userId" label="用户ID" width="180"/>
      <el-table-column prop="userStatus" label="状态" width="180"/>
      <el-table-column prop="createTime" label="创建时间" width="180"/>
      <el-table-column prop="updateTime" label="更新时间" width="180"/>
      <!--在这里添加详情信息按钮 -->
      <el-table-column label="操作" width="100">
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