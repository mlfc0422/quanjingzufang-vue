<script setup lang="ts">
import { ref } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "../router/router.ts";

const orders = ref([
  { id: 1, name: '订单1', date: '2024-09-19', status: '已完成' },
  { id: 2, name: '订单2', date: '2024-09-18', status: '进行中' },
  { id: 1, name: '订单1', date: '2024-09-19', status: '已完成' },
  { id: 2, name: '订单2', date: '2024-09-18', status: '进行中' },
  { id: 1, name: '订单1', date: '2024-09-19', status: '已完成' },
  { id: 2, name: '订单2', date: '2024-09-18', status: '进行中' },
  // 其他订单数据
]);
function handleView(order:any) {
  console.log('查看订单', order);
}
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const goUserMine = () => {
  router.push("/UserMine")
}
</script>

<template>
  <div class="order-list container-fluid">
    <div class="row">
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
      >
        <router-link to="/userIndex" style="text-decoration: none"><div class="logo">全景租房网</div></router-link>
        <el-menu-item index="2" @click="goUserMine">个人中心</el-menu-item>
        <el-menu-item index="1">我的订单</el-menu-item>
      </el-menu>
      <div class="col-12" style="padding: 0 15px;">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4" v-for="order in orders" :key="order.id">
            <el-row class="order-item">
              <el-row style="width: 100%;">
                <el-col :span="12"><span>订单号： {{order.id}}</span></el-col>
                <el-col :span="12" style="text-align: right"><span style="color: #b80000">{{order.status}}</span></el-col>
              </el-row>
              <el-row style="padding: 4px 0">
                <el-col :span="6"><el-image style="height: 100%" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :fit="'cover'"></el-image></el-col>
                <el-col :span="18">
                  <el-row>
                    <el-col :span="18" style="padding: 0 5px">
                      <span style="font-size: 14px">这是一套位于市中心的现代化两居室公寓，交通便利，周边配套设施齐全。</span>
                    </el-col>
                    <el-col :span="6" class="custom-col">
                      <span class="price">222元</span>
                      <el-button @click="handleView(order)" size="small" class="custom-button">查看</el-button>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-list {
  background-color: #f5f5f5;
}

.order-item {
  padding: 10px;
  margin-top: 15px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-col {
  position: relative;
  height: 100px; /* 根据需要调整高度 */
}

.price {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px; /* 根据需要调整边距 */
}

.custom-button {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px; /* 根据需要调整边距 */
}

@media (max-width: 768px) {
  .custom-header h2 {
    font-size: 1.5rem;
  }

  .order-item {
    padding: 5px;
    margin-top: 10px;
  }

  .custom-col {
    height: 80px; /* 根据需要调整高度 */
  }

  .price {
    font-size: 0.8rem;
  }

  .custom-button {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
}
</style>
