<template>
<div class="main">
  <!-- 主容器 -->
  <div class="container d-flex justify-content-center align-items-center">
    <div class="password-main">
      <div class="card shadow-sm p-4">
        <div class="card-header">重置密码</div>
        <form id="reset-password-form" autocomplete="off">
          <!-- 输入手机号 -->
          <div class="form-group">
            <label for="phoneNumber"><i class="iconfont icon-shouji"></i> 手机号码</label>
            <input type="text" class="form-control" id="phoneNumber" placeholder="请输入手机号码" name="phoneNumber" required>
          </div>

          <!-- 输入验证码 -->
          <div class="form-group">
            <label for="verificationCode"><i class="iconfont icon-yanzhengma"></i> 验证码</label>
            <div class="input-group">
              <input type="text" class="form-control" id="verificationCode" placeholder="请输入验证码" name="verificationCode"
                     required>
              <div class="input-group-append">
                <button type="button" class="get-code-btn" id="getCodeBtn">获取验证码</button>
              </div>
            </div>
          </div>

          <!-- 输入新密码 -->
          <div class="form-group">
            <label for="newPassword"><i class="iconfont icon-mima"></i> 新密码</label>
            <input type="password" class="form-control" id="newPassword" placeholder="请输入新密码" name="newPassword"
                   required>
          </div>

          <!-- 确认新密码 -->
          <div class="form-group">
            <label for="confirmPassword"><i class="iconfont icon-querenmima"></i> 确认新密码</label>
            <input type="password" class="form-control" id="confirmPassword" placeholder="请确认新密码" name="confirmPassword"
                   required>
          </div>

          <!-- 提交按钮 -->
          <div class="mb-3">
            <button type="submit" class="btn btn-primary w-100">提交</button>
          </div>

          <!-- 返回登录页面的链接 -->
          <div class="links-container">
            <a href="login.html" class="small">返回登录页面</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">

</script>
<script setup>
// document.getElementById("reset-password-form").addEventListener("submit", function (event) {
//   event.preventDefault(); // 阻止表单默认提交行为
//
//   const phoneNumber = document.getElementById("phoneNumber").value;
//   const verificationCode = document.getElementById("verificationCode").value;
//   const newPassword = document.getElementById("newPassword").value;
//   const confirmPassword = document.getElementById("confirmPassword").value;
//
//   if (!phoneNumber || !verificationCode) {
//     alert("请填写手机号码和验证码！");
//     return;
//   }
//
//   if (newPassword !== confirmPassword) {
//     alert("两次输入的密码不一致！");
//     return;
//   }
//
//   // 这里可以添加验证码验证逻辑以及密码重置逻辑
//   alert("密码重置成功！");
//   // location.href = 'login.html'; // 重定向到登录页面
// });
//
// // 模拟获取验证码功能
// document.getElementById("getCodeBtn").addEventListener("click", function () {
//   const phoneNumber = document.getElementById("phoneNumber").value;
//   if (!phoneNumber) {
//     alert("请先输入手机号码！");
//     return;
//   }
//
//   // 模拟验证码发送成功
//   alert("验证码已发送至您的手机！");
// });
</script>

<style scoped>
.main {
  background: linear-gradient(to right, #af6bf7, #9fb8e2);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.password-main {
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

.links-container {
  text-align: center;
  margin-top: 10px;
}

.links-container a {
  margin: 0 10px;
}

.get-code-btn {
  background-color: #6a11cb;
  border-color: #6a11cb;
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 15px;
  color: white;
}

.get-code-btn:hover {
  background-color: #2575fc;
  border-color: #2575fc;
}
</style>
