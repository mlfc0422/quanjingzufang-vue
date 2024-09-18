<template>
  <div class="common-layout">
    <el-container style="height: 100vh;padding: 2px; overflow: hidden;">
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
        <el-aside style="border-bottom-left-radius: 6px;width: 18%;background-color: rgba(218,218,218,0.58)">
          <el-menu style="padding: 6px 0 0 0;border-right: 0;background-color: rgba(218,218,218,0.58)">

            <router-link to="/rootIndex/rootProperty" class="navigate-a" active-class="active-link">
              <el-menu-item index="1" class="navigate" style="padding: 0 0 0 30px;">
                <span class="navigate-font">
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"></path></svg>                  房源管理
                </span>
              </el-menu-item>
            </router-link>

            <router-link to="/rootIndex/rootOrders" class="navigate-a " active-class="active-link">
              <el-menu-item index="2" class="navigate" style="margin-top: 6px;padding: 0 0 0 30px;">
                <span class="navigate-font">
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"></path><path fill="currentColor" d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path></svg>
                  订单管理
                </span>
              </el-menu-item>
            </router-link>

            <router-link to="/rootIndex/rootUsers" class="navigate-a " active-class="active-link">
              <el-menu-item index="3" class="navigate" style="margin-top: 6px;padding: 0 0 0 30px;">
                <span class="navigate-font">
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                    <path fill="currentColor" d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"></path>
                  </svg>
                  用户管理
                </span>
              </el-menu-item>
            </router-link>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main style="height: calc(100vh - 60px); overflow: hidden;">
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
  background: linear-gradient(
      70deg,
      rgba(0, 19, 81, 0.89) 0%,
      rgba(7, 34, 112, 0.86) 20%,
      rgba(12, 50, 163, 0.86),
      rgba(33, 70, 181, 0.86),
      rgb(54, 113, 237),
      rgb(108, 155, 255) 90%,
      rgb(220, 230, 251) 100%
  );
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
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  padding: 2px 15px;
  background: linear-gradient(45deg, #6b8cff, #a3bffa);
  border-radius: 4px;
  margin-right: 5px;
  transition: background 0.3s; /* 将 transition 放在这里 */
}
.nav-header-logout:hover {
  background: linear-gradient(45deg, rgba(175, 45, 45, 0.58), rgba(175, 45, 45, 0.58)); /* 修改为 background */
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
  transition: background-color 0.3s, transform 0.15s;
  transform: scale(1.03);
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
  font-size: 1rem;
}

/* 图标样式 */
.icon {
  font-size: 1.2rem; /* 调整图标大小 */
  vertical-align: middle; /* 垂直对齐 */
  margin-right: 5px; /* 图标和文字之间的间距 */
  height: 20px;
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
