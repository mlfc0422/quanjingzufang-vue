<template>
  <el-affix>
    <!-- 导航栏 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="logo">全景租房网</div>
      <el-menu-item index="2" @click="goHome">个人中心</el-menu-item>
      <el-menu-item index="1">房源详情</el-menu-item>
    </el-menu>
    <div class="h-6" />
  </el-affix>

  <div class="container my-4">
    <!-- 房源图片 -->
    <div class="row">
      <div class="col-12">
        <!--           1500ms       鼠标在图片上时显示箭头   走马灯容器高度-->
        <el-carousel :interval="1500" arrow="hover" height="600px" >
          <!-- 使用 v-for 循环图片数组 -->
          <el-carousel-item v-for="(image, index) in images" :key="index">
            <img :src="image" alt="Carousel Image" class="carousel-image" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- 房源详情 -->
    <div class="row mt-4">
      <div class="col-12">
        <div class="house-info p-3 bg-light rounded shadow-sm">
          <h3 class="mb-3">{{ house.title }}</h3>
          <p class="info">{{ house.houseDesc }}</p>
          <p class="price">价格: {{ house.rent }} 元/月</p>
          <p class="details">房屋类型: {{ house.houseType }}</p>
          <p class="floor">楼层: {{ house.floor }}</p>
          <p class="useArea">使用面积: {{ house.useArea }}</p>
          <p class="orientation">朝向: {{ house.orientation }}</p>
          <p class="contact">联系人: {{ house.contact }}</p>
          <p class="mobile">联系电话: {{ house.mobile }}</p>
          <p class="houseDesc">房屋描述: {{ house.houseDesc }}</p>

          <!-- 租赁方式 -->
          <p class="rent-method">租赁方式: {{ house.rentMethod ? '整租' : '合租' }}</p>

          <!-- 看房时间 -->
          <p class="viewing-time">看房时间: {{ formatViewingTime(house.time) }}</p>

          <!-- 新增下单按钮 -->
          <div class="order-btn mt-4">
            <el-button type="success" @click="placeOrder">确认下单</el-button>
          </div>
          <!-- 新增收藏按钮 -->
          <div class="order-btn mt-4">
            <el-button type="success" @click="">加入收藏</el-button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div id="container"></div>
    </div>
    <!-- 返回上一页按钮 -->
    <div class="mt-4 text-center">
      <el-button type="primary" @click="goBack">返回上一页</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios'; // 引入 axios
import AMapLoader from '@amap/amap-jsapi-loader';

// 导航栏相关逻辑
const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

// 获取当前房源 ID
const route = useRoute();
const router = useRouter();
const houseId = route.params.id; // 获取动态路由参数中的房源ID
const userId = localStorage.getItem('userId'); // 获取用户ID
const house = ref({
  id: '',
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
  statusCode: false,
  urls: [],
  address: '海南师范大学', // 地址
});
const images = ref([]);

// 经纬度相关
const lnglat = ref('');
let map = null;
let geocoder = null;
let marker = null;

const fetchHouseDetails = async (id: string) => {
  console.log(`请求房源详情，ID: ${id}`);
  try {
    const response = await axios.get(`/fangyuan/property/${id}`, {
      params: {
        UserId: userId,
      }
    });
    console.log('响应数据:', response.data);
    const { code, msg, data } = response.data;

    if (code === 1 && data) {
      house.value = data.property;
      images.value = data.urls;
      // 使用地址进行经纬度转换
      geoCode(); // 获取经纬度
    } else {
      console.error('获取房源详情失败:', msg || '未知错误');
    }
  } catch (error) {
    console.error('请求房源详情时发生错误:', error);
  }
};

onMounted(() => {
  fetchHouseDetails(String(houseId));

  // 加载高德地图
  window._AMapSecurityConfig = {
    securityJsCode: '919b72e2406397582c5a6a56a2f7f5cb',
  };
  AMapLoader.load({
    key: '716d2d104b91d6199612161379983172',
    version: '2.0',
    plugins: ['AMap.Geocoder'],
  }).then((AMap) => {
    map = new AMap.Map('container', {
      resizeEnable: true,
    });

    geocoder = new AMap.Geocoder({
      city: '0898',
    });

    marker = new AMap.Marker();
  }).catch((e) => {
    console.error(e);
  });
});

onUnmounted(() => {
  map?.destroy();
});

const geoCode = () => {
  geocoder.getLocation(house.value.address, (status, result) => {
    if (status === 'complete' && result.geocodes.length) {
      const lnglatVal = result.geocodes[0].location;
      lnglat.value = `${lnglatVal.lng}, ${lnglatVal.lat}`;
      marker.setPosition(lnglatVal);
      map.add(marker);
      map.setFitView(marker);
    } else {
      console.error('根据地址查询位置失败');
    }
  });
};

// 返回上一页
const goBack = () => {
  router.go(-1);
};

// 返回首页
const goHome = () => {
  router.push('/UserMine');
};

// 订单相关逻辑
const placeOrder = async () => {
  const orderData = {
    propertyId: houseId,
    userId: localStorage.getItem('userId'),
    total_amount: house.value.rent,
    subject: house.value.title,
  };

  const response = await axios.post('/dingdan/order/add', orderData);
  const { code, msg, data } = response.data;
  if (code === 1) {
    console.log('新增订单成功:', data);
    await router.push(`/userConfirmationPayment/${data.out_trade_no}`);
  } else {
    console.error('新增订单失败:', msg || '未知错误');
  }
};

// 看房时间格式化
const timeMapping: { [key: number]: string } = {
  1: '上午',
  2: '中午',
  3: '下午',
  4: '晚上',
  5: '全天',
};
function formatViewingTime(time: number): string {
  return timeMapping[time] || '未知';
}
</script>


<style scoped>
body {
  background-color: #f0f4f8;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  background-color: #3b82f6;
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
  margin: auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 确保轮播图的图片始终充满容器 */
.carousel-image {
  width: 100%;
  height: 600px; /* 根据需要设置图片高度 */
  object-fit: cover; /* 保持图片比例，裁剪溢出部分 */
}

.house-info {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.house-info h3 {
  font-size: 28px;
  color: #333;
  font-weight: bold;
  margin-bottom: 15px;
}

.house-info p {
  margin-bottom: 10px;
  color: #666;
  font-size: 16px;
}

.house-info .houseDesc {
  margin-top: 20px;
  color: #555;
  font-size: 15px;
}


.price {
  font-weight: bold;
  color: #e74c3c;
}

.order-btn .el-button:hover {
  background-image: linear-gradient(45deg, #3b82f6, #6a5acd);
}

.mt-4 .el-button {
  background-color: #3b82f6;
  color: white;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
}

.mt-4 .el-button:hover {
  background-color: #2563eb;
}

.info, .price, .address, .details, .floor, .useArea, .orientation, .contact, .mobile {
  display: flex;
  align-items: center;
}

.info::before, .price::before, .address::before, .details::before, .floor::before,
.useArea::before, .orientation::before, .contact::before, .mobile::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-size: contain;
}

#container {
  height: 400px;
  width: 100%;
}
</style>
