<template>
  <el-affix>
    <!--导航栏-->
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
      <div class="logo">全景租房网</div>
      <el-menu-item index="2">首页</el-menu-item>
      <el-menu-item index="1">房源详情</el-menu-item>
    </el-menu>
    <div class="h-6" />
  </el-affix>

  <div class="container my-4">
    <div class="row">
      <!-- 房源图片 -->
      <div class="col-md-6">
        <img
            class="img-fluid rounded shadow-sm"
            :src="currentHouse.image"
            alt="house-image"
        />
      </div>
      <div class="col-md-6">
        <!-- 房源详情 -->
        <div class="house-info p-3 bg-light rounded shadow-sm">
          <h3 class="mb-3">{{ currentHouse.title }}</h3>
          <p class="info">{{ currentHouse.info }}</p>
          <p class="price">价格: {{ currentHouse.price }} 元</p>
          <p class="address">地址: {{ currentHouse.address }}</p>
          <p class="score">评分: {{ currentHouse.score }}</p>
          <p class="details">详情：{{ currentHouse.details }}</p>
          <p class="review">用户评价: {{ currentHouse.userReview }}</p>

          <!-- 地图展示 -->
          <div v-if="currentHouse.map" class="map-container mt-3">
            <h4>地图:</h4>
            <div class="map p-2 bg-light rounded">{{ currentHouse.map }}</div>
          </div>

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
import { ref } from 'vue'
import { useRouter } from 'vue-router' // 引入 vue-router

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 使用 Vue Router
const router = useRouter()
const goBack = () => {
  router.go(-1) // 返回上一页
}

interface Property {
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
}

// 当前房源对象
const currentHouse = ref<Property>({
  image: 'src/assets/login.jpg',
  title: '房源1',
  info: '这是一套不错的房子，靠近地铁，设施齐全。',
  price: 1200000,
  address: "海口市美兰区琼山大道65号",
  details: "欢迎来到我们的房源介绍！这套房产位于繁华的市中心，交通便利，距离地铁站仅需步行五分钟，周围环境宁静，绿化率高，附近有大型公园和健身场所。房屋总面积约120平方米，采用开放式布局，客厅宽敞明亮，现代化厨房配备高端家电和充足的储物空间。每个卧室配有独立衣橱和空调，卫生间设计现代，配有浴缸和淋浴，整套房源还配备高速网络和智能家居系统。附近有多所知名学校和幼儿园，超市、购物中心和餐饮娱乐设施齐全，方便日常生活。售价120万元，随着城市发展，该区域房产价值持续上升，是自住和投资的理想选择。",
  score: "5.0",
  userReview: "很满意",
  map: "地图链接"
})

// 下单功能
const placeOrder = () => {
  console.log("已下单房源: ", currentHouse.value.title);
  // 这里可以进一步实现下单逻辑，如弹出确认对话框或发送请求
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
