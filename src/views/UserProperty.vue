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
  <div style="height: calc(100vh - 140px)" >
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
        <el-col :xs="24" :sm="6" class="house-image" style="text-align: center">
          <el-image
              style=" height: 100px; object-fit: cover;"
              :src="house.pic"
              alt="house-image"
          />
        </el-col>

        <!-- 中间的标题和信息 -->
        <el-col :xs="24" :sm="10" class="house-details">
          <h3 class="house-title">{{ house.title }}</h3>
          <p class="house-info">{{ house.houseType }} / {{ house.useArea }}㎡ / {{ house.orientation }}</p>
          <div class="house-tags">
            <el-tag type="primary">VR房源</el-tag>
            <el-tag type="success">随时看房</el-tag>
          </div>
        </el-col>

        <!-- 右侧价格和查看详情按钮 -->
        <el-col :xs="24" :sm="8" class="house-actions text-right">
          <div class="house-price">{{ house.rent }}元/月 </div>
          <el-button type="primary" class="mt-3" @click="goViewPropertyDetails(house)">查看详情</el-button>
        </el-col>
      </el-row>

    </div>
  </div>
  <!-- 分页 -->
  <el-affix position="bottom" :offset="-8000" style="height: 32px">
    <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="filteredHouses.length"
          :page-size="pageSize"
          v-model:current-page="currentPage"
          class="mt-4"
      />
    </div>
  </el-affix>
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
  id: number;               // 房屋ID
  title: string;            // 标题
  rent: number;             // 租金
  rentMethod: boolean;      // 租赁方式（true表示整租，false表示合租）
  houseType: string;        // 房屋类型
  useArea: string;          // 使用面积
  floor: string;            // 楼层
  orientation: string;      // 朝向
  pic: string;              // 图片
  houseDesc: string;        // 房屋描述
  contact: string;          // 联系人
  mobile: string;           // 联系电话
  time: number;             // 发布时间（时间戳）
}

// 房源列表数据
const houses = ref<House[]>([
  {
    id: 1,
    title: "温馨一居室",
    rent: 3000,
    rentMethod: true,
    houseType: "一居室",
    useArea: "50㎡",
    floor: "3/5",
    orientation: "南",
    pic: "src/assets/轮播图1.jpg",
    houseDesc: "适合单身或者情侣居住，交通便利，周边配套齐全。",
    contact: "张先生",
    mobile: "13800000001",
    time: Date.now(),
  },
  {
    id: 2,
    title: "现代合租房",
    rent: 1500,
    rentMethod: false,
    houseType: "合租房",
    useArea: "80㎡",
    floor: "2/6",
    orientation: "东",
    pic: "src/assets/轮播图1.jpg",
    houseDesc: "带阳台的合租房，适合年轻人居住，环境优雅。",
    contact: "李小姐",
    mobile: "13800000002",
    time: Date.now(),
  },
  {
    id: 3,
    title: "豪华三居室",
    rent: 6000,
    rentMethod: true,
    houseType: "三居室",
    useArea: "120㎡",
    floor: "5/10",
    orientation: "西",
    pic: "src/assets/轮播图1.jpg",
    houseDesc: "高档小区，配套设施齐全，适合家庭居住。",
    contact: "王先生",
    mobile: "13800000003",
    time: Date.now(),
  },
  {
    id: 4,
    title: "舒适两居室",
    rent: 4000,
    rentMethod: true,
    houseType: "两居室",
    useArea: "90㎡",
    floor: "1/8",
    orientation: "北",
    pic: "src/assets/轮播图1.jpg",
    houseDesc: "安静舒适，适合一家人，邻近公园。",
    contact: "赵女士",
    mobile: "13800000004",
    time: Date.now(),
  },
  {
    id: 5,
    title: "时尚共享空间",
    rent: 1800,
    rentMethod: false,
    houseType: "共享空间",
    useArea: "70㎡",
    floor: "4/6",
    orientation: "南",
    pic: "src/assets/轮播图1.jpg",
    houseDesc: "年轻人的聚集地，适合喜欢社交的朋友。",
    contact: "陈先生",
    mobile: "13800000005",
    time: Date.now(),
  },
  {
    id: 6,
    title: "时尚共享空间",
    rent: 1800,
    rentMethod: false,
    houseType: "共享空间",
    useArea: "70㎡",
    floor: "4/6",
    orientation: "南",
    pic: "src/assets/轮播图2.jpg",
    houseDesc: "年轻人的聚集地，适合喜欢社交的朋友。",
    contact: "陈先生",
    mobile: "13800000005",
    time: Date.now(),
  }
]); // 存放房源数据
const searchQuery = ref(''); // 搜索内容
const currentPage = ref(1); // 当前页
const pageSize = ref(1); // 每页显示数量

// 根据屏幕高度动态计算每页显示的条数
const calculatePageSize = () => {
  const availableHeight = window.innerHeight - 148; // 减去固定元素的高度
  const itemHeight = 150; // 每个房源项的高度
  const visibleItems = Math.floor(availableHeight / itemHeight); // 计算可以显示的房源数量
  pageSize.value = visibleItems > 1 ? visibleItems : 1; // 至少显示一条数据
};

// 监听窗口大小变化
window.addEventListener('resize', calculatePageSize);
// 分页逻辑
const paginatedHouses = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredHouses.value.slice(start, end);
});


onMounted(() => {
  fetchHouseList();
  calculatePageSize(); // 页面加载时计算一次
});

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



// 页面挂载时获取房源数据
onMounted(() => {
  fetchHouseList();
});

// 跳转到房源详情页
const goViewPropertyDetails = (house: House) => {
  router.push(`/UserPropertyDetails/${house.id}`); // 使用房源 ID 跳转
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
