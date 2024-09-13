<script setup lang="ts">
import { ref } from 'vue';

interface OrdersDetail {
  id: number;
  user_id: number;
  house_resources_id: number;
  start_date: Date;
  end_date: Date;
  total_price: number;
}

const order = ref<OrdersDetail>({
  id: 1,
  user_id: 101,
  house_resources_id: 201,
  start_date: new Date('2023-01-01'),
  end_date: new Date('2023-01-10'),
  total_price: 1000,
});

const formatDate = (date: Date) => {
  return date.toLocaleDateString();
};
</script>



<template>
  <div class="ordersDetail-container">
    <el-card class="order-card">
      <div slot="header" class="clearfix">
        <span>订单编号: {{ order.id }}</span>
      </div>
      <el-row>
        <el-col :span="12">
          <div class="order-detail-item">
            <span class="label">用户ID:</span>
            <span>{{ order.user_id }}</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="order-detail-item">
            <span class="label">房源ID:</span>
            <span>{{ order.house_resources_id }}</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="order-detail-item">
            <span class="label">开始日期:</span>
            <span>{{ formatDate(order.start_date) }}</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="order-detail-item">
            <span class="label">结束日期:</span>
            <span>{{ formatDate(order.end_date) }}</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="order-detail-item">
            <span class="label">总价:</span>
            <span>{{ order.total_price }}</span>
          </div>
        </el-col>
      </el-row>
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
}

.order-detail-item {
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
  margin-right: 10px;
}
</style>

