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
}



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
