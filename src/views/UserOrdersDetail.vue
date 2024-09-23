<script setup lang="ts">
import { onMounted, ref } from "vue";
import router from "../router/router";
import { useRoute } from "vue-router";
import axios from "axios"; // 引入 axios

const route = useRoute();
const orderId = route.params.out_trade_no; // 获取动态路由参数中的订单ID
const activeIndex = ref('1');
const activeNames = ref(['1']);
const orderDetail = ref({
  out_trade_no: '',
  startDate: '',
  endDate: '',
  price: 0,
  total_amount: 0,
  subject: '',
  propertyId: 0,
  status: '',
  createTime: ''
}); // 创建响应式变量存储订单详情

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const goUserMine = () => {
  router.push("/UserMine");
};

const handleChange = (val: string[]) => {
  console.log(val);
};

const fetchOrderDetails = async () => {
  try {
    const response = await axios.get(`/dingdan/order/${orderId}`);
    const { code, msg, data } = response.data; // 解构响应数据
    if (code === 1 && data) {
      orderDetail.value = data; // 赋值订单详情数据
    } else {
      console.error('获取订单详情失败:', msg || '未知错误');
    }

  } catch (error) {
    console.error('获取订单详情失败', error);
  }
};

onMounted(() => {

  console.log('订单ID:', orderId);
  fetchOrderDetails();
});
</script>

<template>
  <!-- 导航栏 -->
  <el-affix>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">
      <router-link to="/userIndex" style="text-decoration: none"><div class="logo">全景租房网</div></router-link>
      <el-menu-item index="2" @click="goUserMine">个人中心</el-menu-item>
      <el-menu-item index="1">订单详情</el-menu-item>
    </el-menu>
  </el-affix>

  <!-- 订单详情 -->
  <el-row style="
      padding: 20px;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1),
      0 0 15px rgba(0, 0, 0, 0.05);margin: 20px 20px 60px;">
    <el-row style="width: 100%;">
      <el-col :span="24" style="text-align: center">
        <el-image src="src/assets/轮播图1.jpg" style="width: 100%;height: 64vh;border-radius: 5px"></el-image>
      </el-col>
    </el-row>

    <el-row style="margin-top: 10px;padding: 15px;width: 100%">
      <el-col style="text-align: center;padding: 0">
        <span>房源描述-->待写入</span>
      </el-col>
    </el-row>

    <el-row style="width: 100%">
      <el-col style="text-align: right;padding: 15px">{{ orderDetail?.total_amount }}元</el-col> <!-- 展示价格 -->
    </el-row>

    <el-row style="width: 100%;">
      <el-col :span="24">
        <div class="demo-collapse">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="更多" name="1" style="padding: 0 15px;">
              <el-row style="width: 100%">
                <el-col :span="12" style="text-align: left"><span class="detail-font">订单编号</span></el-col>
                <el-col :span="12" style="text-align: right"><span class="detail-font">{{ orderDetail?.out_trade_no }}</span></el-col> <!-- 展示订单编号 -->
              </el-row>

              <el-row style="width: 100%">
                <el-col :span="12" style="text-align: left"><span class="detail-font">开始日期</span></el-col>
                <el-col :span="12" style="text-align: right"><span class="detail-font">{{ orderDetail?.startDate }}</span></el-col> <!-- 展示开始日期 -->
              </el-row>

              <el-row style="width: 100%">
                <el-col :span="12" style="text-align: left"><span class="detail-font">结束日期</span></el-col>
                <el-col :span="12" style="text-align: right"><span class="detail-font">{{ orderDetail?.endDate }}</span></el-col> <!-- 展示结束日期 -->
              </el-row>

              <el-row style="width: 100%">
                <el-col :span="12" style="text-align: left"><span class="detail-font">房源名称</span></el-col>
                <el-col :span="12" style="text-align: right"><span class="detail-font">{{ orderDetail?.subject }}</span></el-col> <!-- 展示房源名称 -->
              </el-row>

              <el-row style="width: 100%">
                <el-col :span="12" style="text-align: left"><span class="detail-font">房源编号</span></el-col>
                <el-col :span="12" style="text-align: right"><span class="detail-font">{{ orderDetail?.propertyId }}</span></el-col> <!-- 展示房源编号 -->
              </el-row>

              <el-row style="width: 100%">
                <el-col :span="12" style="text-align: left"><span class="detail-font">状态</span></el-col>
                <el-col :span="12" style="text-align: right"><span class="detail-font">{{ orderDetail?.status }}</span></el-col> <!-- 展示订单状态 -->
              </el-row>

              <el-row style="width: 100%">
                <el-col :span="12" style="text-align: left"><span class="detail-font">创建时间</span></el-col>
                <el-col :span="12" style="text-align: right"><span class="detail-font">{{ orderDetail?.createTime }}</span></el-col> <!-- 展示创建时间 -->
              </el-row>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
    </el-row>
  </el-row>

  <nav class="navbar navbar-light nav-bottom">
    <el-row style="padding: 0 15px">
      <el-col>
        <el-button type="danger" style="margin-right: 3px">删除订单</el-button>
      </el-col>
    </el-row>
  </nav>
</template>




<style scoped>
.logo {
  font-size: 24px;
  font-weight: bold;
  background-color: #409eff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 60px;
  color: white;
}
.nav-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 8px 0;
  display: flex;
  justify-content: flex-end; /* 确保内容靠右对齐 */
  align-items: center; /* 确保内容垂直居中 */
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  height: 60px;
}
.detail-font{
  font-size: 16px;
}
</style>