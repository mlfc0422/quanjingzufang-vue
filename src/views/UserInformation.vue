<template>
  <el-affix>
    <!--导航栏-->
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
      <router-link to="UserIndex" style="text-decoration: none"><div class="logo">全景租房网</div></router-link>
      <el-menu-item index="2" @click="goUserMine">个人中心</el-menu-item>
      <el-menu-item index="1">个人信息</el-menu-item>
    </el-menu>
    <div class="h-6" />
  </el-affix>

  <div class="container my-4">
    <el-card class="mb-4" shadow="hover">
      <!-- 用户信息顶部区域：头像、用户名、按钮 -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <!-- 头像和用户名 -->
        <div class="d-flex align-items-center">
          <el-avatar
              :src="userInfo.avatar"
              size="large"
              class="mr-3 avatar"
          ></el-avatar>
          <h2 class="mb-0">{{ userInfo.name }}</h2>
        </div>
        <!-- 编辑按钮 -->
        <el-button type="primary" class="ml-auto" @click="isEditing = !isEditing">
          {{ isEditing ? '取消' : '编辑' }}
        </el-button>
      </div>

      <!-- 用户个人信息表单 -->
      <el-form :model="userInfo" label-width="100px" :rules="rules" ref="userForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="userInfo.name" :disabled="!isEditing"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userInfo.email" :disabled="!isEditing"></el-input>
        </el-form-item>

        <el-form-item label="电话" prop="phone">
          <el-input v-model="userInfo.phone" :disabled="!isEditing"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="gender">
          <el-select v-model="userInfo.gender" placeholder="请选择性别" :disabled="!isEditing">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
          </el-select>
        </el-form-item>

        <!-- 保存按钮，编辑状态下显示 -->
        <el-form-item v-if="isEditing">
          <el-button type="primary" @click="saveUserInfo">保存</el-button>
          <el-button @click="isEditing = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

//导航栏
import router from "../router/router.ts";
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const goUserMine = () => {
  router.push("/UserMine")
}


interface UserInfo {
  avatar: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
}

const userInfo = ref<UserInfo>({
  avatar: 'src/assets/head.jpg',
  name: '阿波连',
  email: 'zhangsan@example.com',
  phone: '12345678901',
  gender: 'male',
})

const isEditing = ref(false)

const rules = {
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
  ],
  phone: [
    { required: true, message: '请输入电话号码', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的电话号码', trigger: 'blur' }
  ],
}

const saveUserInfo = () => {
  ElMessage.success('用户信息已保存')
  isEditing.value = false
}
</script>

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

.container {
  max-width: 800px;
}

.avatar {
  cursor: pointer;
  margin-right: 20px;
}


</style>
