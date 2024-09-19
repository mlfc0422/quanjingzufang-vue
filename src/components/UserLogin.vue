<script setup lang="ts">
import { reactive, ref } from 'vue';
import axios from 'axios';
import router from "../router/router.ts";

const form = reactive({
  id: '',
  account: '',
  password: '',
});

// 用于存储错误消息
const errorMessage = ref('');

// 跳转到忘记密码页面
const goToForgotPassword = () => {
  router.push('/UserRegister');
};

// 跳转到注册页面
const goToRegister = () => {
  router.push('/UserRegister');
};
// 提交表单的函数
const onSubmit = async () => {

  try {
    const response = await axios.post('/yonghu/user/login', {
      account: form.account,
      password: form.password
    });

    // 假设返回的数据结构为 Rest<T>
    const { code, msg, data } = response.data;

    if (code === 1) {
      // 登录成功，处理成功逻辑，例如保存 token 和用户信息
      const {user} = data; // 假设 token 和 user 都在 data 中
      localStorage.setItem('jwt_token', data.token);
      localStorage.setItem('id', user.id);

      // 登录成功后，可以进行页面跳转
      console.log('登录成功:', user);
      await router.push('/userIndex');
    } else {
      // 登录失败，使用后端返回的消息
      errorMessage.value = msg;
    }
  } catch (error) {
    // 处理错误，例如显示错误消息
    if (axios.isAxiosError(error) && error.response) {
      errorMessage.value = error.response.data.msg || '登录失败，请重试';
    } else {
      errorMessage.value = '发生未知错误，请重试';
    }
  }
};
</script>


<template>
  <div class="main">
    <!-- 主容器 -->
    <div class="container d-flex justify-content-center align-items-center">
      <div class="login-main">
        <div class="card shadow-sm p-4">
          <div class="card-header">登录到您的账户</div>
          <form id="login-form" @submit.prevent="onSubmit" autocomplete="off">
            <div class="form-group mb-3"> <!-- 添加 mb-3 类以增加底部间距 -->
              <label for="account">账号</label>
              <input type="text" class="form-control" id="account" placeholder="请输入账号" v-model="form.account" required />
            </div>
            <div class="form-group mb-3"> <!-- 添加 mb-3 类以增加底部间距 -->
              <label for="password">
                <i class="iconfont icon-suo"></i> 密码
              </label>
              <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="请输入密码"
                  v-model="form.password"
                  name="password"
                  required
              />
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <button type="submit" class="btn btn-primary">登录</button>
              <div>
                <a class="small clickable" @click.prevent="goToForgotPassword">忘记密码？</a>
                <span>|</span>
                <a class="small clickable" @click.prevent="goToRegister">立即注册</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  background: linear-gradient(to right, #af6bf7, #9fb8e2) no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  user-select: none;
}

.login-main {
  max-width: 500px;
  width: 100%;
}

.card {
  border: none;
  border-radius: 10px;
}

.card-header {
  background-color: #ffffff;
  border-bottom: none;
  text-align: center;
  font-size: 1.5rem;
  color: #6a11cb;
}

.form-control {
  border-radius: 20px;
}

.btn-primary {
  border-radius: 20px;
  background-color: #6a11cb;
  border-color: #6a11cb;
  padding: 10px 20px;
  font-size: 1.2rem;
}

.btn-primary:hover {
  background-color: #2575fc;
  border-color: #2575fc;
}

.small {
  color: #6a11cb;
}

.small:hover,
.clickable {
  color: #2575fc;
  cursor: pointer;
  text-decoration: underline;
}

/* 增加底部间距的样式 */
.mb-3 {
  margin-bottom: 1rem; /* 可以根据需要调整间距 */
}
</style>

