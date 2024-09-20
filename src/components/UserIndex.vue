<template>
  <!-- 搜索栏 -->
  <link href="http://at.alicdn.com/t/c/font_4684069_c53nimhz4za.css" rel="stylesheet">

  <div class="main">
    <div class="container">
      <div class="search-bar">
        <input type="text" class="search-input" placeholder="搜索房源...">
        <button class="btn btn-primary">搜索</button>
      </div>
    </div>

    <!-- 轮播图 -->
    <div id="propertyCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img01.jpg" class="d-block w-100" alt="Property 1">
        </div>
        <div class="carousel-item">
          <img src="#" class="d-block w-100" alt="Property 2">
        </div>
        <div class="carousel-item">
          <img src="#" class="d-block w-100" alt="Property 3">
        </div>
      </div>
      <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- 图标按钮部分 -->
    <div class="container icon-buttons">
      <div class="row text-center">
        <!-- 图标按钮都放在一行 -->
        <div class="col-4">
          <div class="icon-button" style="background-color: #fb6639;">
            <i class="fas fa-building"></i>
          </div>
          <div class="icon-text">新房</div>
        </div>
        <div class="col-4">
          <div class="icon-button" style="background-color: #FFC107;">
            <i class="fas fa-sign-out-alt"></i>
          </div>
          <div class="icon-text">租房</div>
        </div>
        <div class="col-4">
          <div class="icon-button" style="background-color: #FF9800;">
            <i class="fas fa-map"></i>
          </div>
          <div class="icon-text">地图找房</div>
        </div>
      </div>
    </div>

    <!-- 好客资讯部分 -->
    <div class="container news-section">
      <div class="news-title">好客资讯</div>
      <div class="news-item">限购 • 房企半年度销售业绩...</div>
      <div class="news-item">限购 • 上半年土地市场两重...</div>
    </div>

    <!-- 底部导航栏 -->
    <nav class="navbar navbar-light nav-bottom">
    <ul class="nav w-100">

        <li class="nav-item">
          <router-link to="/userIndex" style="text-decoration: none">
            <a class="nav-link">
              <i class="icon-zhuye iconfont nav-icon"></i>主页
            </a>
          </router-link>
        </li>
      <li class="nav-item">
        <router-link to="/userProperty" style="text-decoration: none">
          <a class="nav-link">
            <i class=" iconfont icon-fangyuantuijian nav-icon"></i>房源
          </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/userChatting" style="text-decoration: none">
          <a class="nav-link">
            <i class="iconfont icon-weiliao nav-icon"></i>微聊
          </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/userMine" style="text-decoration: none">
          <a class="nav-link">
            <i class="iconfont icon-wode nav-icon"></i>我的
          </a>
        </router-link>
      </li>
    </ul>
  </nav>
  </div>
</template>


<style scoped>
.main {
  background: linear-gradient(120deg, #f6d365 0%, #f8a58e 100%);
  font-family: 'Arial', sans-serif;
}

.search-bar {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-input {
  width: 80%;
  border: none;
  border-radius: 30px;
  padding: 12px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  transition: box-shadow 0.3s;
}

.search-input:focus {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  outline: none;
}

.btn-primary {
  background-color: #ff7f50;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #ff6347;
}

.carousel-inner img {
  max-height: 350px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.icon-buttons {
  margin: 40px 0;
}

.icon-button {
  background-color: #4CAF50;
  background-image: url('../assets/2-首页.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  margin: 0 auto;
  transition: transform 0.3s;
}

.icon-button:hover {
  transform: scale(1.1);
}

.icon-text {
  text-align: center;
  font-size: 0.9rem;
  margin-top: 10px;
}

.nav-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 8px 0;
  display: flex;
  justify-content: space-around;
  text-align: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  height: 60px;
}

.nav-item {
  flex: 1;
}

.nav-link {
  color: #ff7f50;
  font-weight: bold;
  transition: color 0.3s;
  font-size: 0.9rem;
  line-height: 1.2;
}

.nav-icon {
  font-size: 1.5rem;
  /* 增大字体大小 */
  display: block;
  margin-bottom: -3px;
}

.news-section {
  background-color: white;
  padding: 20px;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.news-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.news-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  transition: background-color 0.2s;
}

.news-item:hover {
  background-color: #f9f9f9;
}

.footer {
  background-color: #fff;
  padding: 10px 0;
  margin-top: 30px;
  text-align: center;
  font-size: 0.9rem;
  color: #777;
}

</style>
<script setup lang="ts">
</script>