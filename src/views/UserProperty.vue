<template>

  <el-header class="header">
    <div class="logo">全景租房网</div>

    <!-- 响应式菜单按钮 (移动端显示) -->
    <el-button class="menu-button" icon="el-icon-menu" @click="toggleMenu"></el-button>

    <!-- 导航菜单 -->
    <el-menu class="menu" :default-active="activeMenu" mode="horizontal" :collapse="isMobile">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">房源列表</el-menu-item>
      <el-menu-item index="3">关于我们</el-menu-item>
      <el-menu-item index="4">联系</el-menu-item>
    </el-menu>
  </el-header>

  <div class="house-list">
    <el-row
        v-for="(house, index) in houses"
        :key="index"
        class="house-item"
        :gutter="20"
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
        <el-button type="primary" @click="viewDetails(house)">查看详情</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 设置当前激活的菜单项
const activeMenu = ref('1');

// 控制菜单在移动端是否显示
const isMobile = ref(false);

// 切换菜单显示状态（用于移动设备）
const toggleMenu = () => {
  isMobile.value = !isMobile.value;
};

// 定义房源对象的类型
interface House {
  image: string;
  title: string;
  info: string;
  price: number;
}

// 房源列表数据
const houses = ref<House[]>([
  {
    image: 'https://example.com/image1.jpg',
    title: '房源1',
    info: '这是一套不错的房子，靠近地铁，设施齐全。',
    price: 1200000,
  },
  {
    image: 'https://example.com/image2.jpg',
    title: '房源2',
    info: '环境优美，附近有公园，适合居住。',
    price: 980000,
  },
  {
    image: 'https://example.com/image3.jpg',
    title: '房源3',
    info: '全新装修，现代风格，交通便利。',
    price: 1500000,
  },
  {
    image: 'https://example.com/image4.jpg',
    title: '房源4',
    info: '老城区核心地带，历史悠久，周边配套完善。',
    price: 850000,
  },
  {
    image: 'https://example.com/image5.jpg',
    title: '房源5',
    info: '大户型，南北通透，视野开阔。',
    price: 2000000,
  },
  {
    image: 'https://example.com/image6.jpg',
    title: '房源6',
    info: '安静社区，邻里友好，生活便利。',
    price: 1100000,
  },
  {
    image: 'https://example.com/image7.jpg',
    title: '房源7',
    info: '临近商圈，购物方便，交通发达。',
    price: 1300000,
  },
  {
    image: 'https://example.com/image8.jpg',
    title: '房源8',
    info: '带花园，适合家庭居住，环境宜人。',
    price: 1700000,
  },
  {
    image: 'https://example.com/image9.jpg',
    title: '房源9',
    info: '小区内绿化好，配套设施完善，适合投资。',
    price: 950000,
  },
  {
    image: 'https://example.com/image10.jpg',
    title: '房源10',
    info: '豪华装修，高档小区，居住舒适。',
    price: 2500000,
  },
  // 你可以继续添加更多房源数据
]);

// 查看详情的函数
const viewDetails = (house: House) => {
  alert(`查看详情: ${house.title}`);
};
</script>

<style scoped>

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #409eff;
  padding: 0 20px;
  height: 60px;
  color: white;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.menu {
  flex-grow: 1;
  margin-left: 30px;
}

/* 隐藏移动端菜单按钮 */
.menu-button {
  display: none;
  color: white;
}

/* 响应式布局：移动端下隐藏菜单并显示折叠按钮 */
@media (max-width: 768px) {
  .menu {
    display: none;
  }

  .menu-button {
    display: inline-block;
  }

  /* 当菜单折叠时显示菜单 */
  .menu[aria-hidden='false'] {
    display: block;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #409eff;
  }
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

/* 全局样式：设置页面宽度适应并隐藏水平滚动条 */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* 隐藏水平滚动条 */
}

@media (max-width: 768px) {
  .house-price {
    text-align: left; /* 在较小屏幕上，价格和按钮可以垂直排列 */
  }
}
</style>
