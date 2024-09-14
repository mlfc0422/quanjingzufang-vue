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
const filteredOrderList = ref<Order[]>([
  {
    id: 1,
    houseTitle: '美丽的别墅',
    userName: 'John Doe',
    amount: 1000,
    orderStatus: '已支付',
    booked: 3,
  },
  {
    id: 2,
    houseTitle: '温馨公寓',
    userName: 'Alice Smith',
    amount: 800,
    orderStatus: '待支付',
    booked: 1,
  },
  {
    id: 3,
    houseTitle: '海景别墅',
    userName: 'Michael Brown',
    amount: 1200,
    orderStatus: '已支付',
    booked: 2,
  },
  {
    id: 4,
    houseTitle: '山间小屋',
    userName: 'Emily Johnson',
    amount: 600,
    orderStatus: '已取消',
    booked: 0,
  },
  {
    id: 5,
    houseTitle: '美丽的别墅',
    userName: 'John Doe',
    amount: 1000,
    orderStatus: '已支付',
    booked: 3,
  },
  {
    id: 6,
    houseTitle: '温馨公寓',
    userName: 'Alice Smith',
    amount: 800,
    orderStatus: '待支付',
    booked: 1,
  },
  {
    id: 7,
    houseTitle: '海景别墅',
    userName: 'Michael Brown',
    amount: 1200,
    orderStatus: '已支付',
    booked: 2,
  },
  {
    id: 8,
    houseTitle: '山间小屋',
    userName: 'Emily Johnson',
    amount: 600,
    orderStatus: '已取消',
    booked: 0,
  },
  {
    id: 9,
    houseTitle: '美丽的别墅',
    userName: 'John Doe',
    amount: 1000,
    orderStatus: '已支付',
    booked: 3,
  },
  {
    id: 10,
    houseTitle: '温馨公寓',
    userName: 'Alice Smith',
    amount: 800,
    orderStatus: '待支付',
    booked: 1,
  },
  {
    id: 11,
    houseTitle: '海景别墅',
    userName: 'Michael Brown',
    amount: 1200,
    orderStatus: '已支付',
    booked: 2,
  },
  {
    id: 12,
    houseTitle: '山间小屋',
    userName: 'Emily Johnson',
    amount: 600,
    orderStatus: '已取消',
    booked: 0,
  },
  {
    id: 13,
    houseTitle: '美丽的别墅',
    userName: 'John Doe',
    amount: 1000,
    orderStatus: '已支付',
    booked: 3,
  },
  {
    id: 14,
    houseTitle: '温馨公寓',
    userName: 'Alice Smith',
    amount: 800,
    orderStatus: '待支付',
    booked: 1,
  },
  {
    id: 15,
    houseTitle: '海景别墅',
    userName: 'Michael Brown',
    amount: 1200,
    orderStatus: '已支付',
    booked: 2,
  },
  {
    id: 16,
    houseTitle: '山间小屋',
    userName: 'Emily Johnson',
    amount: 600,
    orderStatus: '已取消',
    booked: 0,
  },
  {
    id: 17,
    houseTitle: '现代公寓',
    userName: 'David Lee',
    amount: 950,
    orderStatus: '待支付',
    booked: 1,
  },
]);

onMounted(() => {
  getOrderList(); // 组件挂载时获取订单列表数据
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
  router.push('/rootIndex/rootOrdersDetail');
}

function handleSearch() {
  // 过滤订单列表
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
      <el-table-column prop="id" label="订单号" style="width: 18%"/>
      <el-table-column prop="houseTitle" label="房源标题" style="width: 18%"/>
      <el-table-column prop="userName" label="用户昵称" style="width: 18%"/>
      <el-table-column prop="amount" label="金额" style="width: 18%"/>
      <el-table-column prop="orderStatus" label="订单状态" style="width: 18%"/>
        <!--在这里添加详情信息按钮 -->
      <el-table-column label="操作" style="width: 10%">
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