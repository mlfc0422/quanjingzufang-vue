<template>
  <!-- Header Banner -->
  <div class="header-banner">
    <h1>成都馨柏公寓</h1>
    <p>分散式公寓，在成都市新城区，武侯区拥有100余套房源</p>
    <p>租金区间：500-1000元/月</p>
  </div>

  <!-- Filter Bar -->
  <div class="filter-bar container">
    <h5>待租房间</h5>

    <!-- 区域筛选 -->
    <div class="filter-group">
      <label>区域：</label>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="region" id="region1" value="不限">
        <label class="form-check-label" for="region1">不限</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="region" id="region2" value="南向">
        <label class="form-check-label" for="region2">南向</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="region" id="region3" value="新城区">
        <label class="form-check-label" for="region3">新城区</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="region" id="region4" value="武侯区">
        <label class="form-check-label" for="region4">武侯区</label>
      </div>
    </div>

    <!-- 厅室筛选 -->
    <div class="filter-group">
      <label>厅室：</label>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="room1" value="1室">
        <label class="form-check-label" for="room1">1室</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="room2" value="2室">
        <label class="form-check-label" for="room2">2室</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="room3" value="3室">
        <label class="form-check-label" for="room3">3室</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="room4" value="4室及以上">
        <label class="form-check-label" for="room4">4室及以上</label>
      </div>
    </div>

    <!-- 配置筛选 -->
    <div class="filter-group">
      <label>配置：</label>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="config1" value="独立卫生间">
        <label class="form-check-label" for="config1">独立卫生间</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="config2" value="阳台">
        <label class="form-check-label" for="config2">阳台</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="config3" value="厨房">
        <label class="form-check-label" for="config3">厨房</label>
      </div>
    </div>

    <!-- 你的条件 -->
    <div class="filter-group">
      <label>你的条件：</label>
      <div id="selected-filters">
        <!-- 动态添加的选项 -->
      </div>
    </div>
  </div>

  <!-- Property Listing -->
  <div class="container mt-4">
    <div class="row">
      <!-- Property Card -->
      <div class="col-md-3 col-sm-6">
        <div class="card property-card">
          <img src="image1.jpg" alt="房源图片" class="card-img-top">
          <div class="card-body">
            <h6>550元/月</h6>
            <p class="mb-1">高新区中和社区标准二居室-02房常住</p>
            <p class="text-muted">面积：13/32</p>
          </div>
        </div>
      </div>

      <!-- Property Card -->
      <div class="col-md-3 col-sm-6">
        <div class="card property-card">
          <img src="image2.jpg" alt="房源图片" class="card-img-top">
          <div class="card-body">
            <h6>750元/月</h6>
            <p class="mb-1">高新区中和社区标准二居室-02房常住</p>
            <p class="text-muted">面积：11/28</p>
          </div>
        </div>
      </div>

      <!-- Property Card -->
      <div class="col-md-3 col-sm-6">
        <div class="card property-card">
          <img src="image3.jpg" alt="房源图片" class="card-img-top">
          <div class="card-body">
            <h6>650元/月</h6>
            <p class="mb-1">高新区中和社区标准二居室-02房常住</p>
            <p class="text-muted">面积：6/22</p>
          </div>
        </div>
      </div>

      <!-- Property Card -->
      <div class="col-md-3 col-sm-6">
        <div class="card property-card">
          <img src="image3.jpg" alt="房源图片" class="card-img-top">
          <div class="card-body">
            <h6>650元/月</h6>
            <p class="mb-1">高新区中和社区标准二居室-02房常住</p>
            <p class="text-muted">面积：6/22</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-4">
    <div class="row">
      <!-- Property Card -->
      <div class="col-md-3 col-sm-6">
        <div class="card property-card">
          <img src="image1.jpg" alt="房源图片" class="card-img-top">
          <div class="card-body">
            <h6>550元/月</h6>
            <p class="mb-1">高新区中和社区标准二居室-02房常住</p>
            <p class="text-muted">面积：13/32</p>
          </div>
        </div>
      </div>

      <!-- Property Card -->
      <div class="col-md-3 col-sm-6">
        <div class="card property-card">
          <img src="image2.jpg" alt="房源图片" class="card-img-top">
          <div class="card-body">
            <h6>750元/月</h6>
            <p class="mb-1">高新区中和社区标准二居室-02房常住</p>
            <p class="text-muted">面积：11/28</p>
          </div>
        </div>
      </div>

      <!-- Property Card -->
      <div class="col-md-3 col-sm-6">
        <div class="card property-card">
          <img src="image3.jpg" alt="房源图片" class="card-img-top">
          <div class="card-body">
            <h6>650元/月</h6>
            <p class="mb-1">高新区中和社区标准二居室-02房常住</p>
            <p class="text-muted">面积：6/22</p>
          </div>
        </div>
      </div>

      <!-- Property Card -->
      <div class="col-md-3 col-sm-6">
        <div class="card property-card">
          <img src="image3.jpg" alt="房源图片" class="card-img-top">
          <div class="card-body">
            <h6>650元/月</h6>
            <p class="mb-1">高新区中和社区标准二居室-02房常住</p>
            <p class="text-muted">面积：6/22</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<!-- JavaScript to handle dynamic filters -->
<script>
// 动态更新 "你的条件" 的显示
function updateSelectedFilters() {
  const selectedFiltersDiv = document.getElementById('selected-filters');
  selectedFiltersDiv.innerHTML = '';

  // 获取选择的区域
  const selectedRegion = document.querySelector('input[name="region"]:checked');
  if (selectedRegion) {
    addFilter(selectedRegion.value);
  }

  // 获取选择的厅室
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
    addFilter(checkbox.value);
  });
}

// 添加条件到 "你的条件" 部分
function addFilter(filterText) {
  const selectedFiltersDiv = document.getElementById('selected-filters');
  const badge = document.createElement('span');
  badge.classList.add('badge', 'badge-success', 'mr-2', 'badge-removable');
  badge.textContent = filterText;
  badge.innerHTML += ' <span class="badge badge-light">x</span>';

  badge.addEventListener('click', function () {
    removeFilter(filterText);
  });

  selectedFiltersDiv.appendChild(badge);
}

// 取消已选的条件
function removeFilter(filterText) {
  // 取消区域选择
  document.querySelectorAll('input[name="region"]').forEach(radio => {
    if (radio.value === filterText) {
      radio.checked = false;
    }
  });

  // 取消厅室和配置选择
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    if (checkbox.value === filterText) {
      checkbox.checked = false;
    }
  });

  // 更新 "你的条件" 部分
  updateSelectedFilters();
}

// 监听筛选条件的变化
document.querySelectorAll('input[name="region"], input[type="checkbox"]').forEach(input => {
  input.addEventListener('change', updateSelectedFilters);
});
</script>

<style scoped>
/* 自定义样式 */
.header-banner {
  background: url('###') no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center;
  padding: 60px 20px;
}

.header-banner h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.header-banner p {
  font-size: 1.2rem;
}

/* 自定义 Filter Bar 样式 */
.filter-bar {
  background-color: #f7f8fa;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}

.filter-bar h5 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.filter-group {
  margin-bottom: 20px;
}

.filter-group label {
  font-weight: bold;
  margin-right: 10px;
  color: #555;
  font-size: 1rem;
}

/* 单选按钮 */
.form-check-inline .form-check-input {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #ccc;
  transition: all 0.3s;
}

.form-check-inline .form-check-input:checked {
  background-color: #007bff;
  border-color: #007bff;
}

.form-check-inline .form-check-input:checked::before {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
}

/* 复选框 */
.form-check-input[type="checkbox"] {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 2px solid #ccc;
  transition: all 0.3s;
}

.form-check-input[type="checkbox"]:checked {
  background-color: #28a745;
  border-color: #28a745;
}

.form-check-input[type="checkbox"]:checked::before {
  content: '✔';
  display: block;
  font-size: 14px;
  color: white;
  position: absolute;
  top: 2px;
  left: 3px;
}

/* 选中条件显示区域 */
#selected-filters {
  margin-top: 10px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 滤镜按钮的悬停效果 */
.form-check-label {
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.form-check-label:hover {
  color: #007bff;
}

.filter-bar {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.filter-bar:hover {
  background-color: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .filter-bar {
    padding: 15px;
  }

  .filter-bar h5 {
    font-size: 1.2rem;
  }

  .filter-group label {
    font-size: 0.9rem;
  }
}


.property-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(135deg, #f9f9f9 0%, #e8e8e8 100%);
  transition: transform 0.3s, box-shadow 0.3s;
}

.property-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.property-card img {
  width: 100%;
  height: auto;
  transition: opacity 0.3s;
}

.property-card:hover img {
  opacity: 0.9;
}

.property-card .card-body {
  padding: 15px;
  background-color: #fff;
}

.property-card h6 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #007bff;
}

.property-card p {
  margin-bottom: 5px;
}

.property-card p.text-muted {
  font-size: 0.875rem;
}

.badge-removable {
  cursor: pointer;
}

@media (max-width: 768px) {
  .header-banner h1 {
    font-size: 1.8rem;
  }

  .header-banner p {
    font-size: 1rem;
  }

  .filter-bar h5 {
    font-size: 1rem;
  }

  .property-card h6 {
    font-size: 0.9rem;
  }
}
</style>