<template>
  <div class="common-layout">
    <el-container style="height: 100vh;padding: 2px">
      <el-header style="padding: 0">
        <div class="nav-header">
          <span class="nav-header-font">全景租房后台管理系统</span>
          <router-link to="/RootLogin" class="logout-link">
            <div class="nav-header-logout">
              <span class="nav-header-logout-font">登出</span>
            </div>
          </router-link>
        </div>
      </el-header>
      <el-container>
        <el-aside width="300px;" style="border-bottom-left-radius: 6px;">
          <el-menu style="padding: 2px 2px 2px 0;background-color: rgba(205,205,205,0.27)">
        
            <el-menu-item index="1" class="navigate" style="padding: 0 0 0 30px;">
              <router-link to="/rootIndex/property" class="navigate-a" active-class="active-link">
                <span class="navigate-font">房源管理</span>
              </router-link>
            </el-menu-item>

            <el-menu-item index="2" class="navigate" style="margin-top: 2px;padding: 0 0 0 30px;">
              <router-link to="/rootIndex/orders" class="navigate-a " active-class="active-link">
                <span class="navigate-font">订单管理</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="3" class="navigate" style="margin-top: 2px;padding: 0 0 0 30px;">
              <router-link to="/rootIndex/users" class="navigate-a " active-class="active-link">
                <span class="navigate-font">用户管理</span>
              </router-link>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">

</script>

<style scoped>


/*标题*/
.nav-header {
  width: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  height:60px;
  background: linear-gradient(to right, rgb(3, 23, 81), rgb(218, 218, 218)); /* 渐变背景 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  position: relative; /* 新增--用于登出 */
}

.nav-header-font {
  font-size: 1.8rem;
  color: white;
}

/*登出*/
.logout-link {
  text-decoration: none;
}

.nav-header-logout {
  color: white;
  position: absolute; /* 修改 */
  right: 20px; /* 根据需要调整 */
  top: 50%;
  transform: translateY(-50%);
  padding: 2px 15px 2px 15px;
  background-color: rgba(73, 123, 181, 0.58);
  border-radius: 4px;
  margin-right: 5px;
}
.nav-header-logout:hover{
  background-color: rgba(175, 45, 45, 0.58);
  transition: background-color 0.3s;
}

.nav-header-logout-font {
  text-decoration: none;
}

/*导航*/
.navigate {
  background-color: rgba(218, 218, 218, 0.58);
  height: 46px;
  border-radius: 2px;
}

.navigate:hover {
  background: linear-gradient(to right, rgb(18, 40, 112), rgba(218, 218, 218, 0.58)); /* 渐变背景 */
  transition: background-color 0.3s;
}

.navigate-a:hover .navigate-font{
  color: white;
  transition: background-color 0.3s;
}

.navigate-a {
  text-decoration: none;
  color: black;
}

.navigate-a:hover {
  text-decoration: none;
  transition: background-color 0.3s;
}
.navigate-a:visited .navigate{
  color: black;
}

/* 激活链接 */
.active-link .navigate {
  background: linear-gradient(to right, rgb(18, 40, 112), rgba(218, 218, 218, 0.58)); /* 渐变背景 */
}
.active-link .navigate-font{
  color: white;
}

.navigate-a .navigate .navigate-font{
  font-size: 1.2rem;
}

/*
  非人力
*/
.common-layout {
  height: 100vh;
  background-color: white;
}

el-aside {
  background-color: #d3dce6;
}
el-main {
  padding: 20px;
}


</style>
