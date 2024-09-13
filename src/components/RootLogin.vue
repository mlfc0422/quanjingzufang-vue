<template>
  <div id="login">
    <div class="global-container" >
      <el-form :model="loginForm" label-width="auto" style="max-width: 600px" >
        <div class="center-container">
          <h2 style="text-align: center;">
            全景租房后台管理系统
          </h2>

          <el-form-item label="">
            <el-input v-model="loginForm.account" placeholder="输入账号" clearable />
          </el-form-item>

          <el-form-item label="">
            <el-input v-model="loginForm.password" placeholder="输入密码" clearable show-password />
          </el-form-item>

          <el-form-item>
            <el-button style="width: 100%;" type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>

        </div>

      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'


// do not use same name with ref
const loginForm = reactive({
  account: '',
  password: '',
})

const toRegister = () =>{
  console.log('UserRegister.vue')
}

const onSubmit = () => {
  console.log('submit!')
}



</script>

<style scoped>
@import "../style/RootLogin.css";
</style>