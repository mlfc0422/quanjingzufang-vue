<script setup lang="ts">
import {ElMessage} from "element-plus";
import router from "../router/router.ts";
import {onMounted, ref} from "vue";
import axios from "axios";

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

const handleBackHome = () => {
  ElMessage({
    message: '返回主页',
    type: 'success',
  });
  router.push('/userIndex');
};

onMounted(async () => {

  const urlParams = new URLSearchParams(window.location.search);
  order.value.out_trade_no = urlParams.get('out_trade_no');
  const response = await axios.put('/dingdan/order/alipay/return', order.value);
  const responseData = response.data;
  if (responseData.code === 1) {
    ElMessage({
      message: '支付成功',
      type: 'success',
    });
  } else {
    ElMessage({
      message: '支付失败',
      type: 'error',
    });
  }

});
</script>

<template>
  <div class="container-fluid d-flex justify-content-center align-items-center min-vh-100">
    <div class="card text-center p-5 shadow-lg">
      <div class="card-body">
        <h1 class="card-title text-success mb-4">支付成功</h1>
        <p class="card-text mb-4">感谢您的支付，订单已成功处理。</p>
        <el-button type="primary" @click="handleBackHome">返回主页</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {

  background: linear-gradient(to right, #f77781, #fce9cd);
}

.card {
  border-radius: 15px;
  background-color: #ffffff;
}

.card-title {
  font-size: 2rem;
}

.card-text {
  font-size: 1.2rem;
}
</style>