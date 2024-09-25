<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios from "axios";
import router from "../router/router.ts";


// 定义行数据的接口
interface Users {
  id: number;
  userName: string;
  account: number;
  phone:number;
  createTime: Date;
}

const usersList = ref<Users[]>([]);
const keyword = ref();
const filteredUsersList = ref<Users[]>([
  {
    id: 1,
    userName: '测试用户1',
    account: 123456,
    phone: 13800138000,
    createTime: new Date('2024-09-25T08:00:00')
  },
  {
    id: 2,
    userName: '测试用户2',
    account: 654321,
    phone: 13800138001,
    createTime: new Date('2024-09-25T09:00:00')
  }
]);

onMounted(() => {
  getUsersList(); // 组件挂载时获取用户列表数据
});

function getUsersList() {
  axios.get('users/list')
      .then(res => {
        usersList.value = res.data.data;
        filteredUsersList.value = res.data.data.slice();
      })
      .catch(err => {
        console.log(err);
      });
}

function deleteInformation() {
  router.push('/rootIndex/rootUsersDetail');
}

function handleSearch() {
  // 过滤用户列表
  filteredUsersList.value = usersList.value.filter((users) => {
    console.log("key的值"+keyword.value);
    return users.userName.includes(keyword.value);
  });
}
</script>

<template>
  <div id="order">
    <el-input v-model="keyword" @input="handleSearch" placeholder="输入关键字搜索用户" clearable></el-input>
    <el-table :data="filteredUsersList" height="100%" style="width: 100%">
      <el-table-column prop="id" label="用户ID" style="width: 18%"/>
      <el-table-column prop="houseTitle" label="用户昵称" style="width: 18%"/>
      <el-table-column prop="userName" label="账号" style="width: 18%"/>
      <el-table-column prop="amount" label="手机号" style="width: 18%"/>
      <el-table-column prop="orderStatus" label="创建时间" style="width: 18%"/>
      <!--在这里添加删除按钮 -->
      <el-table-column label="操作" style="width: 10%">
        <template v-slot="">
          <el-button type="primary" @click="deleteInformation()">查看详情</el-button>
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