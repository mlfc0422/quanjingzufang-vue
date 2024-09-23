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
          <p class="details">房屋类型: {{ house.houseType }}</p>
          <p class="floor">楼层: {{ house.floor }}</p>
          <p class="useArea">使用面积: {{ house.useArea }}</p>
          <p class="orientation">朝向: {{ house.orientation }}</p>
          <p class="contact">联系人: {{ house.contact }}</p>
          <p class="mobile">联系电话: {{ house.mobile }}</p>
          <p class="houseDesc">房屋描述: {{ house.houseDesc }}</p>

          <!-- 租赁方式 -->
          <p class="rent-method">
            租赁方式: {{ house.rentMethod ? '整租' : '合租' }}
          </p>

          <!-- 看房时间 -->
          <p class="viewing-time">
            看房时间: {{ formatViewingTime(house.time) }}
          </p>

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


// 导航栏相关逻辑
const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

// 获取当前房源 ID
const route = useRoute();
const router = useRouter();
const houseId = route.params.id; // 获取动态路由参数中的房源ID

// 模拟房源数据（可替换为从后端获取数据的逻辑）
const house = ref({
  id: 0,               // 房屋ID
  title: '',           // 标题
  rent: 0,             // 租金
  rentMethod: false,   // 租赁方式（false表示合租，true表示整租）
  houseType: '',       // 房屋类型
  useArea: '',         // 使用面积
  floor: '',           // 楼层
  orientation: '',     // 朝向
  pic: '',             // 图片
  houseDesc: '',       // 房屋描述
  contact: '',         // 联系人
  mobile: '',          // 联系电话
  time: 0,             // 看房时间
  created: new Date(), // 创建时间
  updated: new Date(), // 更新时间
  statusCode: false    // 状态码（false表示无效，true表示有效）
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


//为用户展示看房时间的方法数据
const timeMapping: { [key: number]: string } = {
  1: '上午',
  2: '中午',
  3: '下午',
  4: '晚上',
  5: '全天',
}
const placeOrder = async () => {
  const orderData = {
    propertyId: houseId,
    userId: localStorage.getItem('userId'),
    total_amount: house.value.rent, // 订单总金额
    subject: house.value.title, // 订单标题
  };

  // 发送新增订单的请求
  const response = await axios.post('/dingdan/order/add', orderData);
  const { code, msg ,data} = response.data; // 解构响应数据
  if (code === 1) {
    // 订单创建成功，跳转到用户订单详情页面
    console.log('新增订单成功:', data);
    await router.push(`/userConfirmationPayment/${data.out_trade_no}`);
  } else {
    console.error('新增订单失败:', msg || '未知错误');
  }
};
//为用户展示看房时间的方法
// 为参数 'time' 指定类型
function formatViewingTime(time: number): string {
  return timeMapping[time] || '未知';
}

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
