<template>
  <div id="login">
    <div class="global-container" >
      <el-form :model="UserRegisterForm" label-width="auto" style="max-width: 600px" >
        <div class="center-container">
          <h2 style="text-align: center;">
            注册新用户
          </h2>

          <el-form-item label="">
            <el-input v-model="UserRegisterForm.account" placeholder="输入账号" clearable />
          </el-form-item>

          <el-form-item label="">
            <el-input v-model="UserRegisterForm.password" placeholder="输入密码" clearable show-password />
          </el-form-item>

          <el-form-item label="">
            <el-input v-model="UserRegisterForm.name" placeholder="输入昵称" clearable />
          </el-form-item>

          <el-form-item label="">
            <el-input v-model="UserRegisterForm.phone" placeholder="输入手机号" clearable />
          </el-form-item>

          <el-form-item>
            <el-button style="width: 100%;" type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>

          <el-form-item>
            <el-button style="width: 100%;" @click="toUserLogin">点我回登录页面</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import router from "../router/router.ts";


// do not use same name with ref
const UserRegisterForm = reactive({
  account: '',
  password: '',
  name:'',
  phone:'',
})

const toUserLogin = () =>{
  console.log('UserLogin.vue')
  router.push("/userLogin")
}

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped>
@import "../style/UserRegister.css";
</style>