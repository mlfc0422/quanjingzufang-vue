<script setup lang="ts">

import {ref} from "vue";
import router from "../router/router.ts";
import axios from "axios";

const order = ref({
  outTradeNo: '',
  propertyId: '',
  userId: '',
  subject: '',
  totalAmount: '',
  description: '',
  createTime: '',
  startDate: '',
  endDate: '',
  timeout_express: '10m',
  product_code: 'FAST_INSTANT_TRADE_PAY'
});

const confirmOrder = async () => {
  try {
    const response = await axios.post('/api/alipay', order.value);
    if (response.data.success) {
      // Handle successful order confirmation
      console.log('Order confirmed:', response.data);
      await router.push('/orderSuccess');
    } else {
      // Handle order confirmation failure
      console.error('Order confirmation failed:', response.data.message);
    }
  } catch (error) {
    console.error('Error confirming order:', error);
  }
};
</script>

<template>
  <div class="ordersDetail-container">
    <el-card class="order-card">
      <!--订单 详情-->
      <div class="order-detail-global">

            <el-row style="margin: 1px 0 0 0;border-top-left-radius: 6px;
                                          border-top-right-radius: 6px;
                                          background-color: rgba(218, 218, 218, 0.68);">
              <el-col>
                <div class="order-id">
                  <span class="label">订单编号:</span><span>{{ order.outTradeNo }}</span>
                </div>
              </el-col>
            </el-row>

            <el-row style="margin: 0;padding: 10px 20px 0 20px;border: 1px solid rgba(218, 218, 218, 0.68);">
              <el-col :span="5">
                <div class="order-detail-item">
                  <span class="label">用户昵称:</span>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="order-detail-item">
                  <span>{{ order.userId }}</span>
                </div>
              </el-col>
              <el-col :span="5" >
                <div class="order-detail-item">
                  <span class="label">房源ID:</span>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="order-detail-item">
                  <span>{{ order.propertyId}}</span>
                </div>
              </el-col>
            </el-row>
            <el-row style="margin: 0;padding: 10px 20px 0 20px;border: 1px solid rgba(218, 218, 218, 0.68);border-top: 0;">
              <el-col :span="5">
                <div class="order-detail-item">
                  <span class="label">订单创建日期:</span>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="order-detail-item">
                  <span>{{ order.createTime }}</span>
                </div>
              </el-col>
              <el-col :span="5">
                <div class="order-detail-item">
                  <span class="label">租赁开始日期:</span>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="order-detail-item">
                  <span>{{order.startDate}}</span>
                </div>
              </el-col>
            </el-row>
            <el-row style="margin: 0;padding: 10px 20px 0 20px;border: 1px solid rgba(218, 218, 218, 0.68);border-top: 0;">
              <el-col :span="5">
                <div class="order-detail-item">
                  <span class="label">租赁结束日期:</span>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="order-detail-item">
                  <span>{{order.endDate}}</span>
                </div>
              </el-col>
              <el-col :span="5">
                <div class="order-detail-item">
                  <span class="label">总价:</span>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="order-detail-item">
                  <span>{{ order.totalAmount }}</span>
                </div>
              </el-col>
            </el-row>
            <el-row style="margin: 0;border-bottom-left-radius: 6px;
                                          border: 1px solid rgba(218, 218, 218, 0.68);
                                          border-top: 0;
                                          border-bottom-right-radius: 6px;
                                          height: 50px">
              <el-col :span="24">
                <div class="confirm-button-col">
                  <el-button type="primary" @click="confirmOrder">确认订单</el-button>
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
}
.order-card {
  border-radius: 8px;
  height: 100%;
}

/*订单详情*/

.order-id{
  width: 100%;
  height: 100%;
  padding: 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: rgba(213, 213, 213, 0.05);
}

.order-detail-global{
  width: 90%;
  margin-left: 5%;
  border-radius: 4px;
}

.order-detail-item {
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
  margin-right: 10px;
}
.confirm-button-col {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%; /* 确保按钮垂直居中 */
  padding-right: 10px;
}
</style>