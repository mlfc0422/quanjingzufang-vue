<template>
  <el-affix>
    <!--导航栏-->
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
      <router-link to="UserIndex" style="text-decoration: none"><div class="logo">全景租房网</div></router-link>
      <el-menu-item index="2" @click="goUserMine">个人中心</el-menu-item>
      <el-menu-item index="1">我的发布</el-menu-item>
    </el-menu>
    <div class="h-6" />
  </el-affix>

  <div class="container my-4">
    <!-- 标题和发布新房源按钮 -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>我的发布</h2>
      <el-button type="primary" @click="addNewListing">发布新房源</el-button>
    </div>

    <!-- 房源列表 -->
    <div class="row">
      <div class="col-md-4 mb-4" v-for="house in userListings" :key="house.id">
        <el-card shadow="always" class="house-card">
          <img :src="house.image" alt="house-image" class="img-fluid rounded mb-2" />
          <h3>{{ house.title }}</h3>
          <p>价格: {{ house.price }} 元/月</p>
          <p>地址: {{ house.address }}</p>
          <p class="text-truncate">描述: {{ house.description }}</p>
          <div class="d-flex justify-content-between mt-3">
            <el-button type="success" size="small" @click="editListing(house.id)">编辑</el-button>
            <el-button type="danger" size="small" @click="deleteListing(house.id)">删除</el-button>
          </div>
        </el-card>
      </div>
    </div>


  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

//导航栏
import router from "../router/router.ts";
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const goUserMine = () => {
  router.push("/UserMine")
}

interface Listing {
  id: number;
  image: string;
  title: string;
  price: number;
  address: string;
  description: string;
}

const userListings = ref<Listing[]>([
  {
    id: 1,
    image: 'src/assets/login.jpg',
    title: '精装一居室出租',
    price: 5000,
    address: '北京市朝阳区',
    description: '靠近地铁，配套设施齐全。'
  },
  {
    id: 2,
    image: 'src/assets/img01.jpg',
    title: '两室一厅带阳台',
    price: 8000,
    address: '上海市浦东新区',
    description: '采光充足，附近有超市、学校。'
  },
  {
    id: 3,
    image: 'src/assets/img01.jpg',
    title: '三室两厅精装',
    price: 12000,
    address: '广州市天河区',
    description: '环境优美，交通便利。'
  },
  {
    id: 4,
    image: 'src/assets/login.jpg',
    title: '单身公寓出租',
    price: 3000,
    address: '深圳市福田区',
    description: '配备家电，临近地铁站。'
  },
  {
    id: 5,
    image: 'src/assets/img01.jpg',
    title: '温馨两居室',
    price: 6500,
    address: '杭州市西湖区',
    description: '适合家庭，靠近公园。'
  },
  {
    id: 6,
    image: 'src/assets/login.jpg',
    title: '豪华复式公寓',
    price: 15000,
    address: '南京市建邺区',
    description: '视野开阔，设施完善。'
  },
  {
    id: 7,
    image: 'src/assets/img01.jpg',
    title: '经济型一居室',
    price: 4000,
    address: '武汉市江汉区',
    description: '租金合理，交通方便。'
  },
  // 添加更多房源数据
])



const editListing = (id: number) => {
  console.log(`编辑房源: ${id}`)
}

const deleteListing = (id: number) => {
  console.log(`删除房源: ${id}`)
}

const addNewListing = () => {
  console.log('发布新房源')
}


</script>

<style scoped>

.house-card {
  background-color: #f9f9f9;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.text-truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
