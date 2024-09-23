<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// 当前选中的菜单项
const activeIndex = ref('1');

// 订单列表
interface Order {
  id: string;
  out_trade_no: string;
  status: string;
  imageUrl: string;
  subject: string;
  total_amount: number;
  createTime: string;
}

const orders = ref<Order[]>([]);


// Vue Router 实例
const router = useRouter();

const UserId = localStorage.getItem('userId');

// 获取订单数据的函数
const fetchOrders = async () => {
  try {
    // 从后端API获取订单数据，传递 userId
    console.log('UserId:', UserId);
    // 使用反引号来支持模板字符串
    const response = await axios.get(`/dingdan/order/list/${UserId}`);
    const { code, data } = response.data;
    if (code === 1) {
      orders.value = data; // 将订单数据赋值给 orders
    } else {
      console.error('获取订单失败');
    }
  } catch (error) {
    console.error('请求订单数据时出错:', error);
  }
};


// 查看订单详情的处理函数
const handleView = (order: any) => {
  // 假设订单详情页面的路由路径为 /orderDetail/:id
  router.push(`/orderDetail/${order.id}`);
};

// 导航到个人中心
const goUserMine = () => {
  router.push('/userMine');
};

// 处理菜单选择
const handleSelect = (key: string) => {
  activeIndex.value = key;
};

// 页面加载时获取订单数据
onMounted(() => {
  // 添加一条测试数据
  orders.value.push({
    id: 'test-id',
    out_trade_no: '1234567890',
    status: '已完成',
    imageUrl: 'https://via.placeholder.com/100',
    subject: '测试订单',
    total_amount: 100,
    createTime: '2024-09-23 10:00:00'
  });

  fetchOrders();
});
</script>


<template>
  <div class="order-list container-fluid">
    <div class="row">
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
      >
        <router-link to="/userIndex" style="text-decoration: none">
          <div class="logo">全景租房网</div>
        </router-link>
        <el-menu-item index="2" @click="goUserMine">个人中心</el-menu-item>
        <el-menu-item index="1">我的订单</el-menu-item>
      </el-menu>
      <div class="col-12" style="padding: 15px;">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4" v-for="order in orders" :key="order.id">
            <el-row class="order-item">
              <el-row style="width: 100%;">
                <el-col :span="12">
                  <span>订单号：{{ order.out_trade_no }}</span>
                </el-col>
                <el-col :span="12" style="text-align: right">
                  <span :style="{ color: order.status === '已完成' ? '#28a745' : '#b80000' }">{{ order.status }}</span>
                </el-col>
              </el-row>
              <el-row style="padding: 10px 0 0 0;">
                <el-col :span="6">
                  <el-image
                      style="height: 100px; border-radius: 5px; overflow: hidden;"
                      :src="order.imageUrl"
                      :fit="'cover'">
                  </el-image>
                </el-col>
                <el-col :span="18">
                  <el-row>
                    <el-col :span="18" style="padding: 0 5px;">
                      <span style="font-size: 16px; font-weight: bold;">{{ order.subject }}</span> <!-- 订单标题 -->
                    </el-col>
                    <el-col :span="6" class="custom-col">
                      <div class="price-container">
                        <span class="price">{{ order.total_amount }}</span>
                        <span class="currency">元</span> <!-- 订单金额单位 -->
                      </div>
                    </el-col>
                  </el-row>
                  <el-row style="margin-top: 5px; display: flex; align-items: flex-end;height: 65%">
                    <el-col :span="20" style="display: flex; align-items: flex-end;">
                      <span style="font-size: 12px; color: #999;padding: 0 0 0 5px">订单时间：{{ order.createTime }}</span> <!-- 订单时间 -->
                    </el-col>
                    <el-col :span="4" style="display: flex; align-items: flex-end; justify-content: flex-end;">
                      <el-button @click="handleView(order)" size="small" class="custom-button">查看</el-button>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

.order-list {
  background-color: #f5f5f5;
}

.order-item {
  padding: 15px;
  margin-top: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.order-item:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.custom-col {
  position: relative;
}

.price-container {
  display: flex;
  align-items: center;
}

.price {
  font-size: 16px;
  font-weight: bold;
}

.currency {
  font-size: 16px; /* 和价格相同的字体大小 */
  margin-left: 5px; /* 为元字增加左边距 */
}


@media (max-width: 768px) {
  .custom-header h2 {
    font-size: 1.5rem;
  }

  .order-item {
    padding: 10px;
    margin-top: 10px;
  }

  .custom-col {
    height: auto; /* 根据需要调整高度 */
  }

  .price {
    font-size: 0.9rem;
  }

  .custom-button {
    font-size: 0.9rem;
    padding: 5px 10px;
  }
}
</style>


