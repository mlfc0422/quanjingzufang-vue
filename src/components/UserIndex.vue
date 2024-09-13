<template>
  <!-- 搜索栏 -->
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
        <img src="property1.jpg" class="d-block w-100" alt="Property 1">
      </div>
      <div class="carousel-item">
        <img src="property2.jpg" class="d-block w-100" alt="Property 2">
      </div>
      <div class="carousel-item">
        <img src="property3.jpg" class="d-block w-100" alt="Property 3">
      </div>
    </div>
    <a class="carousel-control-prev" href="#propertyCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#propertyCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <!-- 图标按钮部分 -->
  <div class="container icon-buttons">
    <div class="row text-center">
      <!-- 第一行图标按钮 -->
      <div class="col-4">
        <div class="icon-button">
          <i class="fas fa-home"></i>
        </div>
        <div class="icon-text">二手房</div>
      </div>
      <div class="col-4">
        <div class="icon-button" style="background-color: #FF5722;">
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
    </div>
    <div class="row text-center mt-4">
      <!-- 第二行图标按钮 -->
      <div class="col-4">
        <div class="icon-button" style="background-color: #2196F3;">
          <i class="fas fa-globe"></i>
        </div>
        <div class="icon-text">海外</div>
      </div>
      <div class="col-4">
        <div class="icon-button" style="background-color: #FF9800;">
          <i class="fas fa-map"></i>
        </div>
        <div class="icon-text">地图找房</div>
      </div>
      <div class="col-4">
        <div class="icon-button" style="background-color: #F44336;">
          <i class="fas fa-calculator"></i>
        </div>
        <div class="icon-text">计算器</div>
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
        <a class="nav-link" href="#">
          <i class="fas fa-home nav-icon"></i><br>主页
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-info-circle nav-icon"></i><br>资讯
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-comments nav-icon"></i><br>微聊
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fas fa-user nav-icon"></i><br>我的
        </a>
      </li>
    </ul>
  </nav>

</template>


<!-- 引入Bootstrap和JavaScript -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
<!-- 引入FontAwesome图标库 -->
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

<style scoped>
body {
  background-color: #f5f5f5;
}

.search-bar {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-input {
  width: 80%;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
}

.carousel-inner img {
  max-height: 350px;
  object-fit: cover;
}

.icon-buttons {
  margin: 30px 0;
}


.icon-button {
  background-color: #4CAF50;
  background-image: url('src/assets/2-首页.png');
  background-size: cover;
  background-position: center;
  /* 居中显示背景图片 */
  width: 100%;
  max-width: 80px;
  /* 控制最大宽度 */
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  margin: 0 auto;
  /* 居中对齐 */
}

.icon-text {
  text-align: center;
  font-size: 0.9rem;
  margin-top: 10px;
  width: 100%;
}

.nav-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  text-align: center;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
}

.nav-item {
  flex: 1;
  /* 使每个导航项目占据相同的宽度 */
}


.news-section {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.news-title {
  font-size: 1.1rem;
  font-weight: bold;
}

.news-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.news-item:last-child {
  border-bottom: none;
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