<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import router from "../router/router.ts";

const form = ref({
  userName: '',
  account: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  agree: false,
})

const dialogVisible = ref(false)

const showAgreement = () => {
  console.log('用户服务协议链接被点击');
  dialogVisible.value = true; // 显示模态框
  form.value.agree = true; // 自动勾选复选框
  console.log(dialogVisible.value);
}


const validatePhone = (phone: string) => {
  const phonePattern = /^1[3-9]\d{9}$/
  return phonePattern.test(phone)
}

const register = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert('密码与确认密码不一致！')
    return
  }

  if (!validatePhone(form.value.phone)) {
    alert('手机号格式不正确！')
    return
  }

  try {
    const response = await axios.post('/yonghu/user/register', form.value)
    if (response.data.code === 1) {
      // 注册成功，处理成功逻辑，例如跳转到登录页面
      alert('注册成功！')
      await router.push('/UserLogin')
    } else {
      // 注册失败，处理错误信息
      alert(response.data.msg)
    }
  } catch (error) {
    // 处理请求错误
    alert('注册失败，请重试。')
    console.error(error)
  }
}
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="register-main">
        <div class="card shadow-sm">
          <div class="card-header">创建您的账户</div>
          <form @submit.prevent="register" id="register-form" autocomplete="off">
            <div class="form-group">
              <label for="userName">用户名</label>
              <input type="text" class="form-control" v-model="form.userName" placeholder="请输入用户名" required>
            </div>
            <div class="form-group">
              <label for="account">账号</label>
              <input type="text" class="form-control" v-model="form.account" placeholder="请输入账号" required>
            </div>
            <div class="form-group">
              <label for="phone">手机号</label>
              <input type="tel" class="form-control" v-model="form.phone" placeholder="请输入手机号" pattern="^1[3-9]\d{9}$" required>
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="form.password" placeholder="请输入密码" required>
            </div>
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input type="password" class="form-control" v-model="form.confirmPassword" placeholder="请再次输入密码" required>
            </div>
            <div class="form-check">
              <button type="submit" class="btn btn-primary btn-block">注册</button>
              <input type="checkbox" class="form-check-input" v-model="form.agree" required>
              <label class="form-check-label" for="agree">
                已阅读并同意
              </label>
              <a class="agreement-link" @click="showAgreement">《用户服务协议》</a>
            </div>

            <p class="text-center mt-3 small" style="margin-bottom: -16px;">
              已有账户？ <router-link to="/UserLogin">登录</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>

    <el-dialog v-model="dialogVisible" title="用户服务协议" width="50%">
      <div class="dialog-content">
        <p>欢迎使用基于Dubbo与SpringBoot的综合智能租房平台服务！在使用我们的服务之前，请您仔细阅读以下用户服务协议。</p>
        <p><strong>1. 服务内容</strong></p>
        <p>本平台致力于为用户提供房东与租户之间的智能匹配服务。我们的服务包括但不限于以下内容：</p>
        <ul>
          <li>提供房源信息的发布和管理功能。</li>
          <li>为租户提供多条件筛选、精准推荐和匹配最优房源的服务。</li>
          <li>支持租赁合同的在线签订和管理。</li>
          <li>实现租赁过程的动态跟踪和实时数据更新。</li>
          <li>保障用户数据的安全存储与隐私保护。</li>
        </ul>

        <p><strong>2. 用户责任</strong></p>
        <p>用户应对其账户下的所有活动负责，包括但不限于：</p>
        <ul>
          <li>妥善保管账户信息和密码，防止未经授权的访问。</li>
          <li>确保在平台发布的房源信息真实、准确、合法。</li>
          <li>遵守国家相关法律法规和平台的使用规定，不进行任何非法或不正当的活动。</li>
        </ul>

        <p><strong>3. 隐私保护</strong></p>
        <p>我们将严格遵守相关法律法规，保护您的个人隐私信息。在未获得您的授权或法律要求的情况下，我们不会将您的个人信息提供给第三方。</p>

        <p><strong>4. 变更和终止</strong></p>
        <p>我们保留在任何时候修改本用户服务协议或终止部分或全部服务的权利。若有重大变更，我们将提前通知用户。</p>

        <p><strong>5. 免责声明</strong></p>
        <p>本平台不对因用户提供虚假信息或任何不当行为造成的损失负责。对于因系统维护、升级或其他不可抗力导致的服务中断，我们不承担责任。</p>

        <p>如有疑问，请通过本平台提供的联系方式联系我们的客服。</p>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">确认</el-button>
  </span>
    </el-dialog>


  </div>
</template>

<style scoped>
.main {
  background: linear-gradient(to right, #f77781, #fce9cd) no-repeat;
  background-size: cover;
  min-height: 100vh;
  /* 确保页面高度至少为视口高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  user-select: none;
}

.register-main {
  max-width: 550px;
  width: 100%;
  margin: auto;
}

.card {
  border: none;
  border-radius: 10px;
  padding: 20px;
  /* 减少卡片内边距 */
}

.card-header {
  background-color: #ffffff;
  border-bottom: none;
  text-align: center;
  font-size: 1.5rem;
  color: #ff5f6d;
}

.form-control {
  border-radius: 20px;
  margin-bottom: 15px;
  /* 减少表单元素间距 */
}

.btn-primary {
  border-radius: 20px;
  background-color: #ff5f6d;
  border-color: #ff5f6d;
  width: 20%;
}

.btn-primary:hover {
  background-color: #ffc371;
  border-color: #ffc371;
}

.small {
  color: #ff5f6d;
}

.small:hover,
.agreement-link {
  color: #ffc371;
  cursor: pointer;
  text-decoration: underline;
}

.form-check {
  display: flex;
  align-items: center;
  margin-bottom: 15px; /* 减少复选框间距 */
}

.form-check-input {
  margin-left: 10px; /* 调整复选框和按钮之间的间距 */
}

.form-check-label {
  margin-left: 10px; /* 调整复选框标签和复选框之间的间距 */
}

.agreement-link {
  margin-left: 10px; /* 调整链接和复选框标签之间的间距 */
}

/* 去除p元素的下边框 */
p.text-center {
  border-bottom: none;
}

.dialog-content {
  max-height: 400px; /* 设置最大高度 */
  overflow-y: auto; /* 启用垂直滚动条 */
}

.form-group label {
  margin-bottom: 5px; /* 调整标签和输入框之间的间距 */
}

.form-group input {
  margin-top: 5px; /* 调整输入框和标签之间的间距 */
}
</style>