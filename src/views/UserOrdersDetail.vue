<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios from "axios";
import {useRoute, useRouter} from "vue-router";

// 路由和响应数据
const route = useRoute();
const router = useRouter();
const orderId = route.params.out_trade_no; // 获取路由参数中的订单ID
const orderData = ref(null); // 用于存储订单数据

// 获取订单详情的请求
const fetchOrderDetails = async () => {
  try {
    const response = await axios.get(`/dingdan/order/${orderId}`);
    const {code, msg, data} = response.data;

    if (code === 1) {
      order.value = data;
    } else {
      console.error('获取订单详情失败:', msg || '未知错误');
    }
  } catch (error) {
    console.error('请求订单详情时出错:', error);
  }
};

// 页面加载时获取订单详情
onMounted(() => {
  console.log('订单ID:', orderId);
  fetchOrderDetails();
});


const order = ref({
  out_trade_no: '',
  propertyId: '',
  userId: '',
  subject: '',
  total_amount: '',
  description: '',
  createTime: '',
  startDate: '',
  endDate: '',
  timeout_express: '10m',
  product_code: 'FAST_INSTANT_TRADE_PAY'
});

const confirmOrder = async () => {
  try {
    const response = await axios.post('/dingdan/order/alipay', order.value);
    const responseData = response.data;

    if (responseData.code === 1) {
      // Handle successful order confirmation
      console.log('Order confirmed:', responseData.data);

      // 使用 _self 在当前窗口中打开新页面
      const paymentWindow = window.open('', '_self');

      if (paymentWindow) {
        // 在当前标签页中写入返回的 HTML
        paymentWindow.document.write(responseData.data);
        paymentWindow.document.close(); // 关闭文档流，确保内容加载
      } else {
        console.error('标签页打开失败，请检查浏览器设置');
      }
    } else {
      // Handle order confirmation failure
      console.error('Order confirmation failed:', responseData.msg);
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
              <span class="label">订单编号:</span><span>{{ order.out_trade_no }}</span>
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
          <el-col :span="5">
            <div class="order-detail-item">
              <span class="label">房源ID:</span>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="order-detail-item">
              <span>{{ order.propertyId }}</span>
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
              <span>{{ order.startDate }}</span>
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
              <span>{{ order.endDate }}</span>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="order-detail-item">
              <span class="label">总价:</span>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="order-detail-item">
              <span>{{ order.total_amount }}</span>
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

.order-id {
  width: 100%;
  height: 100%;
  padding: 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: rgba(213, 213, 213, 0.05);
}

.order-detail-global {
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