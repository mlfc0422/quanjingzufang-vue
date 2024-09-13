<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios from "axios";
import router from "../router/router.ts";

// 定义行数据的接口
interface Order {
  id: number;
  houseTitle: string;
  userName: string;
  amount:number;
  orderStatus: string;
  booked:number;
}




const orderList = ref<Order[]>([]);
const keyword = ref();
const filteredOrderList = ref<Order[]>([]);

onMounted(() => {
  getOrderList(); // 组件挂载时获取课程列表数据
});

function getOrderList() {
  axios.get('order/list')
      .then(res => {
        orderList.value = res.data.data;
        filteredOrderList.value = res.data.data.slice();
      })
      .catch(err => {
        console.log(err);
      });
}

function detailsInformation() {
  router.push('/orderDetails')
}

function handleSearch() {
  // 过滤课程列表
  filteredOrderList.value = orderList.value.filter((order) => {
    console.log("key的值"+keyword.value);
    return order.userName.includes(keyword.value) || order.houseTitle.includes(keyword.value) || order.orderStatus.includes(keyword.value);
  });
}
</script>

<template>
  <div id="order">
    <el-input v-model="keyword" @input="handleSearch" placeholder="输入关键字搜索订单" clearable></el-input>
    <el-table :data="filteredOrderList" height="100%" style="width: 100%">
      <el-table-column prop="id" label="订单号" width="180"/>
      <el-table-column prop="houseTitle" label="房源标题" width="180"/>
      <el-table-column prop="userName" label="用户昵称" width="180"/>
      <el-table-column prop="amount" label="金额" width="180"/>
      <el-table-column prop="orderStatus" label="订单状态" width="180"/>
        <!--在这里添加详情信息按钮 -->
      <el-table-column label="操作" width="100">
        <template v-slot="">
          <el-button type="primary" @click="detailsInformation()">详情信息</el-button>
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