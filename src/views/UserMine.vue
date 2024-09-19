<script setup lang="ts">

import router from "../router/router.ts";

function goOrders(){
  router.push("/userOrders")
}
function goCollection(){
  router.push("/userCollection")
}

</script>

<template>
  <!-- 个人资料部分 -->
  <div class="main">
    <div class="profile-header">
      <img src="#" alt="用户头像">
      <h5>hao <span class="gender-icon">♂</span></h5>
    </div>

    <!-- 快捷功能按钮 -->
    <div class="container">
      <div class="shortcut-buttons d-flex justify-content-around flex-wrap">
        <button class="btn btn-custom-like" @click="goOrders">
          <i class="iconfont icon-like"></i>
          <span>我的订单</span>
        </button>
        <button class="btn btn-custom-favorite" @click="goCollection">
          <i class="iconfont icon-favorite"></i>
          <span>我的收藏</span>
        </button>
        <button class="btn btn-custom-publish">
          <i class="iconfont icon-edit"></i>
          <span>我的发布</span>
        </button>
        <button class="btn btn-custom-edit">
          <i class="iconfont icon-edit-info"></i>
          <span>个人信息</span>
        </button>
      </div>
    </div>


    <!-- 更多服务部分 -->
    <div class="container more-services mt-4">
      <h6 class="mb-3">更多服务</h6>
      <div class="row text-center">
        <div class="col-4 service-item">
          <i class="iconfont icon-jiaoyin"></i>
          <span>浏览记录</span>
        </div>
        <div class="col-4 service-item">
          <i class="iconfont icon-yijianfankui"></i>
          <span>意见反馈</span>
        </div>
        <div class="col-4 service-item">
          <i class="iconfont icon-guanyuwomen"></i>
          <span>关于我们</span>
        </div>
        <div class="col-4 service-item mt-4">
          <i class="iconfont icon-6zaixiankefu"></i>
          <span>在线客服</span>
        </div>
        <div class="col-4 service-item mt-4">
          <i class="iconfont icon-kuaijiefangshi1"></i>
          <span>快捷方式</span>
        </div>
        <div class="col-4 service-item mt-4">
          <i class="iconfont icon-icon-xiugai"></i>
          <span>房源审核</span>
        </div>
      </div>
    </div>

    <!-- 底部导航栏 -->
    <nav class="navbar navbar-light nav-bottom">
      <ul class="nav w-100">
        <li class="nav-item">
          <a class="nav-link" href="main-index.html">
            <i class="fas fa-home nav-icon"></i><br>主页
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-info-circle nav-icon"></i><br>房源列表
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-comments nav-icon"></i><br>微聊
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="mine.html">
            <i class="fas fa-user nav-icon"></i><br>我的
          </a>
        </li>
      </ul>
    </nav>

  </div>

</template>



<style scoped>
.main {
  background-color: #f5f5f5;
}

.profile-header {
  background: linear-gradient(to right, #6bf7a8, #9fb8e2);
  padding: 50px;
  border-radius: 0 0 15px 15px;
  text-align: center;
  margin-bottom: 20px;
  /* 添加下方边距 */
}

.profile-header img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.profile-header h5 {
  margin: 0;
  color: #fff;
}

.profile-header .gender-icon {
  font-size: 1.2rem;
  margin-left: 5px;
  color: #ffffff;
}

.shortcut-buttons {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
  /* 调整顶部边距 */
  margin-bottom: 20px;
  /* 调整底部边距 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.shortcut-buttons .btn {
  width: 80px;
  height: 80px;
  margin: 10px;
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}

.more-services {
  margin-top: 30px;
  /* 增加顶部边距 */
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.more-services .service-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
}

/* 底部导航栏样式 */
.nav-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to right, #6bf7a8, #87aae7);
  /* 渐变背景色 */
  padding: 12px 0;
  display: flex;
  justify-content: space-around;
  text-align: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.15);
  /* 阴影效果 */
  border-radius: 15px 15px 0 0;
  /* 圆角边框 */
  z-index: 10;
  /* 保证导航栏在最前 */
}

.nav-item {
  flex: 1;
}

.nav-link {
  color: #fff;
  /* 白色文字 */
  font-size: 0.85rem;
  transition: color 0.3s, transform 0.3s;
  /* 颜色和缩放过渡效果 */
}

.nav-link:hover {
  color: #f1f1f1;
  transform: scale(1.1);
  /* 悬停时的放大效果 */
}

.nav-icon {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 5px;
  transition: transform 0.3s;
  /* 图标的缩放过渡效果 */
}

.nav-link:hover .nav-icon {
  transform: scale(1.2);
  /* 悬停时的图标放大效果 */
}


.service-item i {
  font-size: 1.2rem;
  /* 设置图标字体大小 */
}


/* 自定义按钮样式 */
.btn-custom-like {
  background-color: #ff6b6b;
  /* 自定义“我的点赞”按钮背景色 */
  color: white;
  border: none;
  border-radius: 15px;
  width: 80px;
  height: 80px;
  margin: 10px;
}

.btn-custom-like:hover {
  background-color: #ff5252;
  /* 悬停时的颜色 */
}

.btn-custom-favorite {
  background-color: #ffa726;
  /* 自定义“我的收藏”按钮背景色 */
  color: white;
  border: none;
  border-radius: 15px;
  width: 80px;
  height: 80px;
  margin: 10px;
}

.btn-custom-favorite:hover {
  background-color: #ff9800;
  /* 悬停时的颜色 */
}

.btn-custom-publish {
  background-color: #42a5f5;
  /* 自定义“我的发布”按钮背景色 */
  color: white;
  border: none;
  border-radius: 15px;
  width: 80px;
  height: 80px;
  margin: 10px;
}

.btn-custom-publish:hover {
  background-color: #1e88e5;
  /* 悬停时的颜色 */
}

.btn-custom-edit {
  background-color: #66bb6a;
  /* 自定义“信息编辑”按钮背景色 */
  color: white;
  border: none;
  border-radius: 15px;
  width: 80px;
  height: 80px;
  margin: 10px;
}

.btn-custom-edit:hover {
  background-color: #43a047;
  /* 悬停时的颜色 */
}
</style>