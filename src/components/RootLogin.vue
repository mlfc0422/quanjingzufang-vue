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
import {reactive, ref} from 'vue'
import axios from "axios";
import router from "../router/router.ts";


const loginForm = reactive({
  account: '',
  password: '',
})

const errorMessage = ref('');

const onSubmit = async () => {
  if (!loginForm.account || !loginForm.password) {
    errorMessage.value = '请输入账号和密码';
    return;
  }

  try {
    const response = await axios.post('/yongHu/root/login', {
      account: loginForm.account,
      password: loginForm.password,
    });
    const { code, msg} = response.data;

    if (code === 1) {
      await router.push('/rootIndex/rootProperty');
    } else {
      alert('登录失败:' + msg);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
@import "../style/RootLogin.css";
</style>