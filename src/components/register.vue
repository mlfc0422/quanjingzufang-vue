<template>
  <!-- 主容器 -->
  <div class="container">
    <div class="register-main">
      <div class="card shadow-sm">
        <div class="card-header">创建您的账户</div>
        <form id="register-form" autocomplete="off">
          <!-- 表单内容 -->
          <div class="form-group">
            <label for="username">用户名</label>
            <input type="text" class="form-control" id="username" placeholder="请输入用户名" name="username" required>
          </div>
          <div class="form-group">
            <label for="account">账号</label>
            <input type="text" class="form-control" id="account" placeholder="请输入账号" name="account" required>
          </div>
          <div class="form-group">
            <label for="phone">手机号</label>
            <input type="tel" class="form-control" id="phone" placeholder="请输入手机号" name="phone" pattern="^1[3-9]\d{9}$"
                   required>
          </div>
          <div class="form-group">
            <label for="password">密码</label>
            <input type="password" class="form-control" id="password" placeholder="请输入密码" name="password" required>
          </div>
          <div class="form-group">
            <label for="confirm-password">确认密码</label>
            <input type="password" class="form-control" id="confirm-password" placeholder="请再次输入密码"
                   name="confirm-password" required>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="agree" name="agree" required>
            <label class="form-check-label" for="agree">
              已阅读并同意
              <a href="user-agreement.html" target="_blank">《用户服务协议》</a>
            </label>
          </div>
          <button type="submit" class="btn btn-primary btn-block">注册</button>
          <p class="text-center mt-3 small" style="margin-bottom: -16px;">已有账户？ <a href="login.html">登录</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<!-- 引入Bootstrap和JavaScript -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- 自定义JavaScript -->
<script>
let attemptCount = 0; // 尝试计数器
const maxAttempts = 3; // 最大尝试次数

document.getElementById("register-form").addEventListener("submit", function (event) {
  event.preventDefault(); // 阻止表单默认提交行为

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const agree = document.getElementById("agree").checked;
  const phone = document.getElementById("phone").value;

  if (!agree) {
    alert("请阅读并同意《用户服务协议》！");
    return;
  }

  if (!/^1[3-9]\d{9}$/.test(phone)) {
    alert("请输入有效的手机号！");
    return;
  }

  if (password.length < 8) {
    alert("密码长度应不少于8位！");
    attemptCount++;
    if (attemptCount >= maxAttempts) {
      alert("密码错误次数已达最大限制，请稍后再试！");
      document.getElementById("register-form").reset();
      return;
    }
    return;
  }

  if (password !== confirmPassword) {
    alert("两次输入的密码不一致！");
    attemptCount++;
    if (attemptCount >= maxAttempts) {
      alert("密码错误次数已达最大限制，请稍后再试！");
      document.getElementById("register-form").reset();
      return;
    }
    return;
  }

  // 如果所有验证都通过，提交表单
  alert("注册成功！");
  this.submit(); // 提交表单
});
</script>

<style scoped>
body {
  background: linear-gradient(to right, #f77781, #fce9cd);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  /* 确保页面高度至少为视口高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.register-main {
  max-width: 480px;
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
}

.btn-primary:hover {
  background-color: #ffc371;
  border-color: #ffc371;
}

.small {
  color: #ff5f6d;
}

.small:hover {
  color: #ffc371;
}

.form-check-label {
  font-size: 0.9rem;
  color: #ff5f6d;
}

.form-check {
  margin-bottom: 15px;
  /* 减少复选框间距 */
}

/* 去除p元素的下边框 */
p.text-center {
  border-bottom: none;
}
</style>