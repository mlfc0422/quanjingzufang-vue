<script setup lang="ts">
import { ref } from 'vue';

interface OrdersDetail {
  id: number;
  userId: number;
  houseResourcesId: number;
  createTime: Date;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
}

const order = ref<OrdersDetail>({
  id: 1,
  userId: 101,
  houseResourcesId: 201,
  createTime:new Date('2020-11-13'),
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-01-10'),
  totalPrice: 1000,
});

const formatDate = (date: Date) => {
  return date.toLocaleDateString();
};
</script>



<template>
  <div class="ordersDetail-container">
    <el-card class="order-card">
      <!--返 回-->
      <el-row  style="margin: 0">
        <el-col :span="2">
          <router-link to="/rootIndex/rootOrders" class="order-getBack-link">
            <div class="order-detail-item order-getBack">
              <span class="order-getBack-font">返回</span>
            </div>
          </router-link>
        </el-col>
      </el-row>
      <!--订单 详情-->
      <div class="order-detail-global">
        <el-row style="margin: 1px 0 0 0">
          <el-col :span="11" :offset="3">
            <div class="order-detail-item">
              <span class="label">订单编号:</span>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="order-detail-item">
              <span>{{ order.id }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin: 5px 0 0 0">
          <el-col :span="11" :offset="3">
            <div class="order-detail-item">
              <span class="label">用户昵称:</span>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="order-detail-item">
              <span>{{ order.userId }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin: 5px 0 0 0">
          <el-col :span="11" :offset="3">
            <div class="order-detail-item">
              <span class="label">房源名:</span>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="order-detail-item">
              <span>{{ order.houseResourcesId }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin: 5px 0 0 0">
          <el-col :span="11" :offset="3">
            <div class="order-detail-item">
              <span class="label">订单创建日期:</span>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="order-detail-item">
              <span>{{ formatDate(order.createTime) }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin: 5px 0 0 0">
          <el-col :span="11" :offset="3">
            <div class="order-detail-item">
              <span class="label">租赁开始日期:</span>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="order-detail-item">
              <span>{{ formatDate(order.startDate) }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin: 5px 0 0 0">
          <el-col :span="11" :offset="3">
            <div class="order-detail-item">
              <span class="label">租赁结束日期:</span>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="order-detail-item">
              <span>{{ formatDate(order.endDate) }}</span>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin: 5px 0 0 0">
          <el-col :span="11" :offset="3">
            <div class="order-detail-item">
              <span class="label">总价:</span>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="order-detail-item">
              <span>{{ order.totalPrice }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.ordersDetail-container {
  width: 100%;
  height: 100%;
  padding: 2px;
}

.order-card {
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: rgba(218, 218, 218, 0.68);
}

/* 返回 */
.order-getBack{
  background-color: rgba(205, 205, 205, 0.72);
  padding: 3px 15px 3px 15px;
  border-radius: 4px;
  width: 100%;
  display: flex; /* 新增-返回垂直水平居中 */
  align-items: center; /* 新增 */
  justify-content: center; /* 新增 */
}

.order-getBack-font{
  color:black;
}

.order-getBack-link{
  text-decoration:none;
  width: 100%;
}

.order-getBack-link:hover{
  text-decoration:none;
}

.order-getBack-link:hover .order-getBack{
  /* background-color: rgba(170, 153, 153, 0.9);  原色  */
  background: linear-gradient(45deg, rgba(175, 45, 45, 0.58), rgba(170, 153, 153, 0.9), rgba(175, 45, 45, 0.58));
  transition: background-color 0.15s;
}

.order-getBack-link:hover .order-getBack-font{
  /*color: #7e4040; 原色 */
  color: #ffffff;
}

/*订单详情*/
.order-detail-global{
  background-color: white;
  border-radius: 4px;
  padding: 20px 0 10px 0;
}

.order-detail-item {
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
  margin-right: 10px;
}
</style>

