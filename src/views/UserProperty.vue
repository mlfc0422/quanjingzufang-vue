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
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">房源列表</el-menu-item>
    </el-menu>
    <div class="h-6" />
  </el-affix>


<!--列表内容-->
  <div class="house-list" style="width: 100%">
    <el-row
        v-for="(house, index) in houses"
        :key="index"
        class="house-item"
        :gutter="20"
        style="width: 100%"
    >
      <!-- 左侧图片 -->
      <el-col :xs="24" :sm="8" :md="6" :lg="4">
        <el-image
            style="width: 100%; height: 100%; object-fit: cover;"
            :src="house.image"
            alt="house-image"
        />
      </el-col>

      <!-- 右侧标题和信息 -->
      <el-col :xs="24" :sm="16" :md="12" :lg="12">
        <div class="house-details">
          <h3 class="house-title">{{ house.title }}</h3>
          <p class="house-info">{{ house.info }}</p>
        </div>
      </el-col>

      <!-- 金额 -->
      <el-col :xs="12" :sm="8" :md="4" :lg="4">
        <div class="house-price">
          <span>{{ house.price }} 元</span>
        </div>
      </el-col>

      <!-- 详情按钮 -->
      <el-col :xs="12" :sm="8" :md="4" :lg="4">
        <el-button type="primary" @click="goViewPropertyDetails">查看详情</el-button>
      </el-col>
    </el-row>
  </div>



</template>

<script lang="ts" setup>
//导航栏
import { ref } from 'vue'
import router from "../router/router.ts";
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}



const goViewPropertyDetails = () => {
  router.push("/ViewPropertyDetails")

}

//列表内容方法
// 定义房源对象的类型
interface House {
  //简介内容和详细内容
  image: string;
  title: string;
  info: string;
  price: number;
  //详细内容
  address: string;
  details: string;
  score: string;
  userReview: string;
  map: any;
}

// 房源列表数据
const houses = ref<House[]>([
  {
    image: 'src/assets/login.jpg',
    title: '房源1',
    info: '这是一套不错的房子，靠近地铁，设施齐全。',
    price: 1200000,
    address:"",
    details:"",
    score:"",
    userReview:"",
    map:"",

  },
  {
    image: 'https://example.com/image2.jpg',
    title: '房源2',
    info: '环境优美，附近有公园，适合居住。',
    price: 980000,
    address:"",
    details:"",
    score:"",
    userReview:"",
    map:"",
  },
  {
    image: 'https://example.com/image3.jpg',
    title: '房源3',
    info: '全新装修，现代风格，交通便利。',
    price: 1500000,
    address:"",
    details:"",
    score:"",
    userReview:"",
    map:"",
  },
  {
    image: 'https://example.com/image4.jpg',
    title: '房源4',
    info: '老城区核心地带，历史悠久，周边配套完善。',
    price: 850000,
    address:"",
    details:"",
    score:"",
    userReview:"",
    map:"",
  },
  {
    image: 'https://example.com/image5.jpg',
    title: '房源5',
    info: '大户型，南北通透，视野开阔。',
    price: 2000000,
    address:"",
    details:"",
    score:"",
    userReview:"",
    map:"",
  },
  {
    image: 'https://example.com/image6.jpg',
    title: '房源6',
    info: '安静社区，邻里友好，生活便利。',
    price: 1100000,
    address:"",
    details:"",
    score:"",
    userReview:"",
    map:"",
  },
  {
    image: 'https://example.com/image7.jpg',
    title: '房源7',
    info: '临近商圈，购物方便，交通发达。',
    price: 1300000,
    address:"",
    details:"",
    score:"",
    userReview:"",
    map:"",
  },
  {
    image: 'https://example.com/image8.jpg',
    title: '房源8',
    info: '带花园，适合家庭居住，环境宜人。',
    price: 1700000,
    address:"",
    details:"",
    score:"",
    userReview:"",
    map:"",
  },
  {
    image: 'https://example.com/image9.jpg',
    title: '房源9',
    info: '小区内绿化好，配套设施完善，适合投资。',
    price: 950000,
    address:"",
    details:"",
    score:"",
    userReview:"",
    map:"",
  },
  {
    image: 'https://example.com/image10.jpg',
    title: '房源10',
    info: '豪华装修，高档小区，居住舒适。',
    price: 2500000,
    address:"",
    details:"",
    score:"",
    userReview:"",
    map:"",
  },
  // 你可以继续添加更多房源数据
]);





</script>
<style>
.logo {
  font-size: 24px;
  font-weight: bold;
  background-color: #409eff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  color: white;
}

.house-item {
  margin-bottom: 20px;
  border: 1px solid #eaeaea;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* 允许换行以实现响应式布局 */
}

.house-title {
  font-size: 18px;
  margin-bottom: 5px;
}

.house-info {
  color: #666;
  font-size: 14px;
}

.house-price {
  font-size: 16px;
  font-weight: bold;
  color: #e91e63;
  text-align: right;
}

</style>
