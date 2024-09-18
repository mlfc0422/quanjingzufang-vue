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
  createTime: new Date('2020-11-13'),
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
      <div class="order-detail-global">
        <el-row class="order-header">
          <h2 class="order-title">订单详情</h2>
          <div class="order-getBack-wrapper">
            <router-link to="/rootIndex/rootOrders" class="order-getBack-link">
              <div class="order-getBack">
                <span class="order-getBack-font">返回</span>
              </div>
            </router-link>
          </div>
        </el-row>
        <hr class="gradient-hr" />
        <el-row class="order-row">
          <el-col :span="5">
            <span class="label">订单编号:</span>
          </el-col>
          <el-col :span="7">{{ order.id }}</el-col>
          <el-col :span="5">
            <span class="label">用户昵称:</span>
          </el-col>
          <el-col :span="7">{{ order.userId }}</el-col>
        </el-row>
        <el-row class="order-row">
          <el-col :span="5">
            <span class="label">房源名:</span>
          </el-col>
          <el-col :span="7">{{ order.houseResourcesId }}</el-col>
          <el-col :span="5">
            <span class="label">订单创建日期:</span>
          </el-col>
          <el-col :span="7">{{ formatDate(order.createTime) }}</el-col>
        </el-row>
        <el-row class="order-row">
          <el-col :span="5">
            <span class="label">租赁开始日期:</span>
          </el-col>
          <el-col :span="7">{{ formatDate(order.startDate) }}</el-col>
          <el-col :span="5">
            <span class="label">租赁结束日期:</span>
          </el-col>
          <el-col :span="7">{{ formatDate(order.endDate) }}</el-col>
        </el-row>
        <el-row class="order-row">
          <el-col :span="5">
            <span class="label">总价:</span>
          </el-col>
          <el-col :span="7">{{ order.totalPrice }}</el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.ordersDetail-container {
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #f0f4f8, #d9e6f6);
  padding: 20px;
}

.order-card {
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}

.order-title {
  font-size: 1.6rem;
  color: #4a90e2;
  font-weight: bold;
}

.order-getBack-wrapper {
  display: flex;
  align-items: center;
}

.order-getBack {
  background: #4a90e2;
  padding: 8px 20px;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.order-getBack:hover {
  background: #357ab7;
}

.order-detail-global {
  padding: 20px;
}

.order-row {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.label {
  font-weight: bold;
  color: #333;
  margin-right: 5px;
}

.gradient-hr {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #4a90e2, #ffffff, #4a90e2);
  border: none;
  margin: 15px 0;
}

/* 增加自适应支持 */
@media (max-width: 768px) {
  .order-card {
    padding: 15px;
  }

  .order-title {
    font-size: 1.4rem;
  }

  .order-getBack {
    padding: 6px 15px;
    font-size: 0.9rem;
  }
}
</style>
