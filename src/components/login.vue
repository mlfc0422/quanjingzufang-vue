<template>
  <!-- 主容器 -->
  <div class="container d-flex justify-content-center align-items-center">
    <div class="login-main">
      <div class="card shadow-sm p-4">
        <div class="card-header">登录到您的账户</div>
        <form id="login-form" autocomplete="off">
          <div class="form-group">
            <label for="username"><i class="iconfont icon-zhanghao"></i> 用户名称/手机号码</label>
            <input type="text" class="form-control" id="username" placeholder="请输入用户名称/手机号码" name="username" required>
          </div>
          <div class="form-group">
            <label for="password"><i class="iconfont icon-suo"></i> 密码</label>
            <input type="password" class="form-control" id="password" placeholder="请输入密码" name="password" required>
          </div>
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="agree" name="agree">
            <label class="form-check-label" for="agree">
              已阅读并同意
              <a href="user-agreement.html" target="_blank">《用户服务协议》</a>
            </label>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <button type="submit" class="btn btn-primary">登录</button>
            <div>
              <a href="#" class="small">忘记密码？</a>
              <span>|</span>
              <a href="register.html" class="small">免费注册</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- 自定义JavaScript -->
<script>
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // 阻止表单默认提交行为

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const agree = document.getElementById("agree").checked;

  if (!agree) {
    alert("请阅读并同意《用户服务协议》！");
    return;
  }

  // 假设用户名和密码为以下值用于测试
  const validUsername = "testuser";
  const validPassword = "password123";

  if (username !== validUsername || password !== validPassword) {
    alert("用户名或密码错误！");
    return;
  }

  // 如果所有验证都通过，提交表单
  alert("登录成功！");
  // 这里可以添加代码来处理成功登录后的操作，例如重定向
  // location.href = 'main.html'; // 重定向到主页面
});
</script>

<style scoped>
body {
  background: linear-gradient(to right, #af6bf7, #9fb8e2);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.login-main {
  max-width: 400px;
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

.small:hover {
  color: #2575fc;
}

.form-check-label {
  font-size: 0.9rem;
  color: #6a11cb;
}
</style>