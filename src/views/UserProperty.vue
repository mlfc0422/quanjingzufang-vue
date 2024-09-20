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
        <p class="house-info">{{ house.houseType }} / {{ house.area }}㎡ / {{ house.direction }} / {{ house.building }}</p>
        <div class="house-tags">
          <el-tag type="primary">VR房源</el-tag>
          <el-tag type="success">随时看房</el-tag>
        </div>
      </el-col>

      <!-- 右侧价格和查看详情按钮 -->
      <el-col :xs="24" :sm="8" class="house-actions text-right">
        <div class="house-price">{{ house.price }} 万</div>
        <div class="house-price-unit">{{ house.pricePerUnit }} 元/平</div>
        <el-button type="primary" class="mt-3" @click="goViewPropertyDetails(house)">查看详情</el-button>
      </el-col>
    </el-row>

    <!-- 分页 -->
    <el-pagination
        background
        layout="prev, pager, next"
        :total="filteredHouses.length"
        :page-size="pageSize"
        v-model:current-page="currentPage"
        class="mt-4"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import router from "../router/router.ts";
import axios from "axios";
import { ElMessage } from 'element-plus'; // 确保引入消息提示

// 导航栏相关逻辑
const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const goUserMine = () => {
  router.push("/UserMine");
};

// 房源列表数据
interface House {
  id: number;
  title: string;
  rent: number;
  rentMethod: boolean;
  houseType: string;
  useArea: string;
  floor: string;
  orientation: string;
  pic: string;
  houseDesc: string;
  contact: string;
  mobile: string;
  time: number;
  created: Date;
  updated: Date;
  statusCode: boolean;
}

// 房源列表数据
const houses = ref<House[]>([]); // 存放房源数据
const searchQuery = ref(''); // 搜索内容
const currentPage = ref(1); // 当前页
const pageSize = 5; // 每页显示数量

const fetchHouseList = async () => {
  try {
    const response = await axios.get('/fangyuan/property/list');

    const { code, msg, data } = response.data;
    if (code === 1) {
      // 成功获取数据
      console.log('获取房源数据成功:', data);
      // 从 data 中提取 records 数组
      if (data && Array.isArray(data.records)) {
        houses.value = data.records; // 将数据存入 houses
      } else {
        console.error('数据格式不正确:', data);
        houses.value = []; // 确保 houses 是数组
      }
      console.log('房源数据:', houses.value);
    } else {
      // 处理错误信息
      console.error('获取房源数据失败:', msg);
      ElMessage.error(msg || '获取房源数据失败，请稍后重试。'); // 显示后端返回的错误消息
    }
  } catch (error) {
    console.error('Failed to fetch houses:', error);
    ElMessage.error('获取房源数据失败，请稍后重试。'); // 显示网络错误消息
  }
};



// 搜索过滤逻辑
const filteredHouses = computed(() => {
  if (!Array.isArray(houses.value)) {
    console.error('houses is not an array:', houses.value);
    return []; // 确保返回一个数组
  }
  if (!searchQuery.value) {
    return houses.value; // 如果没有搜索条件，返回所有房源
  }
  return houses.value.filter(house =>
      house.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      house.houseDesc.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// 分页逻辑
const paginatedHouses = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredHouses.value.slice(start, end);
});


// 页面挂载时获取房源数据
onMounted(() => {
  fetchHouseList();
});

// 跳转到房源详情页
const goViewPropertyDetails = (house: House) => {
  router.push(`/houseDetail/${house.id}`); // 使用房源 ID 跳转
};

// 搜索功能
const handleSearch = () => {
  currentPage.value = 1; // 搜索时重置到第一页
};
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
