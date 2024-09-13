<template>
  <div id="login">
    <div class="global-container" >
      <el-form :model="userLoginForm" label-width="auto" style="max-width: 600px" >
        <div class="center-container">
          <h2 style="text-align: center;">
            全景租房用户登录
          </h2>

          <el-form-item label="">
            <el-input v-model="userLoginForm.account" placeholder="输入账号" clearable />
          </el-form-item>

          <el-form-item label="">
            <el-input v-model="userLoginForm.password" placeholder="输入密码" clearable show-password />
          </el-form-item>

          <el-form-item>
            <el-button style="width: 100%;" type="primary" @click="onSubmit() ; submitForm()" >登录</el-button>
          </el-form-item>

          <el-form-item>
            <el-button style="width: 100%;" @click="toUserRegister">点我去注册页面</el-button>
          </el-form-item>
        </div>


      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import router from "../router/router.ts";
import auth from "../utils/auth.ts";
import axios from "axios";


// do not use same name with ref
const userLoginForm = reactive({
  account: '',
  password: '',
})

const toUserRegister = () =>{
  console.log('UserRegister.vue')
  router.push("/userRegister");
}

const onSubmit = () => {
  console.log('submit!')
}

const submitForm = () => {
  axios.post('userLogin', userLoginForm)
      .then(res => {
        if (res.data.code === 1) {
          auth.userLogin();
          alert('登录成功');
          router.push('/userIndex/introduce');
        } else {
          alert('登录失败:' + res.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
      });
}




</script>

<style scoped>
@import "../style/UserLogin.css";
</style>