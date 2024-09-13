<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <el-header style="padding: 0">
        <div class="nav-header">
          <span class="nav-header-font">全景租房后台管理系统</span>
        </div>
      </el-header>
      <el-container style="height: 100%">
        <el-aside width="300px">
          <el-menu>
            <el-menu-item index="1" class="navigate">
              <router-link to="" class="navigate-a ">
                <span class="navigate-font">房源管理</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="2" class="navigate">
              <router-link to="" class="navigate-a ">
                <span class="navigate-font">订单管理</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="3" class="navigate">
              <router-link to="" class="navigate-a ">
                <span class="navigate-font">用户管理</span>
              </router-link>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">

</script>

<style scoped>


/*导航*/
.navigate {
  background-color: white;
  height: 46px;
  border-radius: 8px;
}
.navigate:hover {
  background-color: black;
  transition: background-color 0.3s;
}

.navigate:hover .navigate-a {
  color: white;
  transition: background-color 0.3s;
}
.navigate-a {
  text-decoration: none;
  color: black;
}
.navigate-a:hover{
  text-decoration:none;
  transition: background-color 0.3s;
}
.navigate .navigate-a .navigate-font{
  font-size: 1.2rem;
  top:50%;
  transform: translateY(-50%);

}

/*标题*/
.nav-header{
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height:60px;
  background-color: rgba(0, 0, 0, 0.86);
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.nav-header-font{
  font-size: 1.8rem;
  color: white;
}
/*
  非人力
*/
.common-layout {
  height: 100vh;
  background-color: white;
  border-radius: 10px;
}
el-aside {
  background-color: #d3dce6;
}
el-main {
  padding: 20px;
}



</style>
