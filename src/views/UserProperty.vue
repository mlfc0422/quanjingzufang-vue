<template>
  <el-affix>
    <!--导航栏-->
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
      <router-link to="UserIndex" style="text-decoration: none">
        <div class="logo">全景租房网</div>
      </router-link>
      <el-menu-item index="2" @click="goUserMine">个人中心</el-menu-item>
      <el-menu-item index="1">房源列表</el-menu-item>
    </el-menu>
    <div class="h-6" />
  </el-affix>

  <!-- 搜索框 -->
  <div class="search-bar container mt-4">
    <el-input
        v-model="searchQuery"
        placeholder="请输入房源标题或地址进行搜索"
        clearable
        prefix-icon="el-icon-search"
        @input="handleSearch"
    />
  </div>

  <!--列表内容-->
  <div class="house-list container mt-4">
    <el-row
        v-for="(house, index) in paginatedHouses"
        :key="index"
        class="house-item"
        :gutter="20"
    >
      <!-- 左侧图片 -->
      <el-col :xs="24" :sm="6" class="house-image">
        <el-image
            style="width: 100%; height: auto; object-fit: cover;"
            :src="house.image"
            alt="house-image"
        />
      </el-col>

      <!-- 中间的标题和信息 -->
      <el-col :xs="24" :sm="10" class="house-details">
        <h3 class="house-title">{{ house.title }}</h3>
        <p class="house-info">{{ house.roomType }} / {{ house.area }}㎡ / {{ house.direction }} / {{ house.building }}</p>
        <div class="house-tags">
          <el-tag type="primary">VR房源</el-tag>
          <el-tag type="success">随时看房</el-tag>
        </div>
      </el-col>

      <!-- 右侧价格和查看详情按钮 -->
      <el-col :xs="24" :sm="8" class="house-actions text-right">
        <div class="house-price">{{ house.price }} 万</div>
        <div class="house-price-unit">{{ house.pricePerUnit }} 元/平</div>
        <el-button type="primary" class="mt-3" @click="goViewPropertyDetails">查看详情</el-button>
      </el-col>
    </el-row>

    <!-- 分页 -->
    <el-pagination
        background
        layout="prev, pager, next"
        :total="filteredHouses.length"
        :page-size="pageSize"
        v-model:currentPage="currentPage"
        class="mt-4"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import router from "../router/router.ts";

// 导航栏相关逻辑
const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const goViewPropertyDetails = () => {
  router.push("/UserPropertyDetails");
};

const goUserMine = () => {
  router.push("/UserMine");
};

// 房源列表数据
interface House {
  image: string;
  title: string;
  roomType: string;
  area: number;
  direction: string;
  building: string;
  price: number;
  pricePerUnit: number;
}

const houses = ref<House[]>([
  {
    image: 'src/assets/login.jpg',
    title: '位于海口市主干道滨海大道，位置好。',
    roomType: '1室1厅',
    area: 35.36,
    direction: '南',
    building: '国信大厦',
    price: 41,
    pricePerUnit: 11596,
  },
  {
    image: 'src/assets/img01.jpg',
    title: '临近市中心，交通便利。',
    roomType: '2室1厅',
    area: 75.5,
    direction: '东',
    building: '怡景园',
    price: 100,
    pricePerUnit: 13274,
  },
  {
    image: 'src/assets/login.jpg',
    title: '安静社区，适合家庭居住。',
    roomType: '3室2厅',
    area: 90.0,
    direction: '西',
    building: '绿地小区',
    price: 150,
    pricePerUnit: 16667,
  },
  {
    image: 'src/assets/img01.jpg',
    title: '靠近学校，学区房。',
    roomType: '1室1厅',
    area: 45.0,
    direction: '北',
    building: '学府大厦',
    price: 65,
    pricePerUnit: 14444,
  },
  {
    image: 'src/assets/login.jpg',
    title: '新装修，现代风格。',
    roomType: '2室1厅',
    area: 80.0,
    direction: '南',
    building: '海滨花园',
    price: 120,
    pricePerUnit: 15000,
  },
  {
    image: 'src/assets/img01.jpg',
    title: '步行可达超市，生活便利。',
    roomType: '1室1厅',
    area: 38.0,
    direction: '东南',
    building: '东城小区',
    price: 50,
    pricePerUnit: 13158,
  },
  {
    image: 'src/assets/login.jpg',
    title: '靠近公园，环境优美。',
    roomType: '2室2厅',
    area: 85.0,
    direction: '西南',
    building: '幸福苑',
    price: 130,
    pricePerUnit: 15294,
  }
  // 其他房源数据...
]);

// 搜索功能相关逻辑
const searchQuery = ref('');
const handleSearch = () => {
  currentPage.value = 1;  // 搜索时重置到第一页
};

const filteredHouses = computed(() => {
  if (!searchQuery.value) {
    return houses.value;
  }
  return houses.value.filter((house) =>
      house.title.includes(searchQuery.value) ||
      house.building.includes(searchQuery.value)
  );
});

// 分页功能相关逻辑
const currentPage = ref(1);//当前页
const pageSize = 3;// 每页显示的房源数量
const paginatedHouses = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredHouses.value.slice(start, end);
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

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

.house-item {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.house-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.house-info {
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
}

.house-tags {
  margin-top: 5px;
}

.house-price {
  font-size: 24px;
  color: #ff5722;
  font-weight: bold;
}

.house-price-unit {
  font-size: 12px;
  color: #888;
}

.house-actions {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.search-bar {
  max-width: 600px;
}

@media (max-width: 768px) {
  .house-item {
    flex-wrap: wrap;
  }

  .house-actions {
    align-items: flex-start;
    margin-top: 10px;
  }
}
</style>
