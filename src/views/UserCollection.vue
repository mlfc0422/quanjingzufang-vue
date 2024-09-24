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
      <el-menu-item index="2" @click="goUserMine">个人中心</el-menu-item>
      <el-menu-item index="1">我的收藏</el-menu-item>
    </el-menu>
    <div class="h-6" />
  </el-affix>

  <div class="container my-4">
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
            <el-button type="danger" size="small" @click="deleteListing(house.id)">取消收藏</el-button>
            <el-button type="success" size="small" @click="goPropertyDetails(house.id)">查看详情</el-button>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import router from "../router/router.ts";
import axios from "axios";

const userId = localStorage.getItem('userId')
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

const userListings = ref<Listing[]>([])
const deleteListing = (id: number) => {
  console.log(`取消收藏: ${id}`)
const userListings = ref<Listing[]>([])
const deleteListing = async (id: number) => {
  try {
    // 调用API删除收藏的房源
    const response = await fetch(`/listings/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      // 更新userListings列表
      userListings.value = userListings.value.filter(house => house.id !== id);
      console.log(`取消收藏: ${id}`);
    } else {
      console.error(`删除房源失败: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`删除房源失败: ${error}`);
  }
}

const goPropertyDetails = (id: number) => {
  router.push({ name: 'UserPropertyDetails', params: { id } });
  console.log(`查看详情: ${id}`);
}

onMounted(() => {
  axios.get(`/fangyuan/property/favorite/${userId}`)
      .then(response => {
        const { code, msg, data } = response.data;
        if (code === 1 && data) {
          userListings.value = data;
        } else {
          console.error('获取房源列表失败:', msg || '未知错误');
        }
      })
      .catch(error => {
        console.error('获取房源列表时发生错误:', error);
      });
})
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
