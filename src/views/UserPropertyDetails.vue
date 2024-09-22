<template>
  <el-affix>
    <!-- 导航栏 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="logo">全景租房网</div>
      <el-menu-item index="2" @click="goHome">首页</el-menu-item>
      <el-menu-item index="1">房源详情</el-menu-item>
    </el-menu>
    <div class="h-6" />
  </el-affix>

  <div class="container my-4">
    <div class="row">
      <!-- 房源图片 -->
      <div class="col-md-6">
        <img class="img-fluid rounded shadow-sm" :src="house.pic" alt="house-image" />
      </div>
      <div class="col-md-6">
        <!-- 房源详情 -->
        <div class="house-info p-3 bg-light rounded shadow-sm">
          <h3 class="mb-3">{{ house.title }}</h3>
          <p class="info">{{ house.houseDesc }}</p>
          <p class="price">价格: {{ house.rent }} 元</p>
          <p class="address">地址: {{ house.useArea }}</p>
          <p class="details">详情：{{ house.houseType }}</p>

          <!-- 新增下单按钮 -->
          <div class="order-btn mt-4">
            <el-button type="success" @click="placeOrder">确认下单</el-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 返回上一页按钮 -->
    <div class="mt-4">
      <el-button type="primary" @click="goBack">返回上一页</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from "axios"; // 引入路由

// 获取当前房源 ID
const route = useRoute();
const router = useRouter();
const houseId = route.params.id; // 获取动态路由参数中的房源ID

// 模拟房源数据（可替换为从后端获取数据的逻辑）
const house = ref({
  id: 0,
  title: '',
  rent: 0,
  rentMethod: false,
  houseType: '',
  useArea: '',
  floor: '',
  orientation: '',
  pic: '',
  houseDesc: '',
  contact: '',
  mobile: '',
  time: 0,
  created: new Date(),
  updated: new Date(),
  statusCode: false
});

// 使用 axios 请求房源详情
const fetchHouseDetails = async (id: number) => {
  try {
    const response = await axios.get(`/fangyuan/property/${id}`); // 发送 GET 请求，根据实际的后端 API 路径修改

    const { code, msg, data } = response.data; // 解构响应数据
    if (code === 1 && data) {
      house.value = data; // 赋值房源详情数据
    } else {
      console.error('获取房源详情失败:', msg || '未知错误');
    }
  } catch (error) {
    console.error('请求房源详情时发生错误:', error);
  }
};

onMounted(() => {
  // 获取房源详细信息
  fetchHouseDetails(Number(houseId));
});

// 返回上一页
const goBack = () => {
  router.go(-1);
};

// 返回首页
const goHome = () => {
  router.push('/');
};

// 下单操作
const placeOrder = () => {
  console.log('确认下单');
};
</script>


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

/* 页面整体布局 */
.container {
  max-width: 1200px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.house-info {
  background-color: #f9f9f9;
}

.price {
  font-weight: bold;
  color: #e74c3c;
}

.map-container {
  margin-top: 20px;
}

.map {
  background-color: #eef3f7;
}

.order-btn {
  display: flex;
  justify-content: flex-start;
}
</style>
