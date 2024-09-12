<template>
  <div class="global">
    <div class="common-layout">
      <el-container>
        <!-- Aside -->
        <el-aside class="aside-global"><div class="aside"><Sidebar/></div></el-aside>
        <el-container>
          <!-- Header -->
          <el-header class="header-global"><div class="header"><Header/></div></el-header>
          <!-- Main -->
          <div class="main-global"><el-main><div class="main"><Main/></div></el-main></div>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '../views/Header.vue';
import Main from '../views/Main.vue';
import Sidebar from '../views/Sidebar.vue';

export default {
  name:'Index',
  components:{Sidebar,Header,Main}
}
</script>

<style scoped>
@import "src/style/style.css";
</style>
