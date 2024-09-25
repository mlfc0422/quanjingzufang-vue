<template>
  <el-affix>
    <!--导航栏-->
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
      <router-link to="UserIndex" style="text-decoration: none">
        <div class="logo">全景租房网</div>
      </router-link>
      <el-menu-item index="2" @click="goHome">个人中心</el-menu-item>
      <el-menu-item index="1">个人信息</el-menu-item>
    </el-menu>
    <div class="h-6"/>
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
          <h2 class="mb-0">{{ userInfo.userName }}</h2>
        </div>
        <!-- 编辑按钮 -->
        <el-button type="primary" class="ml-auto" @click="isEditing = !isEditing">
          {{ isEditing ? '取消' : '编辑' }}
        </el-button>
      </div>

      <!-- 用户个人信息表单 -->
      <el-form :model="userInfo" label-width="100px" :rules="rules" ref="userForm">
        <el-form-item label="头像" prop="avatar">
          <el-upload
              class="avatar-uploader"
              action="#"
              :show-file-list="false"
              :disabled="!isEditing"
              :before-upload="handleAvatarChange"
          >
            <el-button size="small" type="primary" :disabled="!isEditing">更换头像</el-button>
          </el-upload>
        </el-form-item>

        <el-form-item label="用户名" prop="userName">
          <el-input v-model="userInfo.userName" :disabled="!isEditing"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userInfo.email" :disabled="!isEditing"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phoneNumber">
          <el-input v-model="userInfo.phoneNumber" :disabled="!isEditing"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select v-model="userInfo.gender" :disabled="!isEditing">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="userInfo.age" type="number" :disabled="!isEditing"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="account">
          <el-input v-model="userInfo.account" :disabled="!isEditing"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="realName">
          <el-input v-model="userInfo.realName" :disabled="!isEditing"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="userInfo.address" :disabled="!isEditing"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idNumber">
          <el-input v-model="userInfo.idNumber" :disabled="!isEditing"></el-input>
        </el-form-item>

        <!-- 保存按钮 -->
        <el-form-item v-if="isEditing">
          <el-button type="primary" @click="saveUserInfo">保存</el-button>
          <el-button @click="isEditing = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>


<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';
import router from "../router/router.ts";

// 定义用户信息接口
interface UserInfo {
  id: string;
  avatar: File | null; // 修改为 File 类型以便上传
  userName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  age: number;
  account: string;
  realName: string;
  address: string;
  idNumber: string;
}

// 表单数据
const userInfo = reactive<UserInfo>({
  id: '',
  avatar: null, // 初始为空
  userName: '',
  email: '',
  phoneNumber: '',
  gender: '',
  age: 0,
  account: '',
  realName: '',
  address: '',
  idNumber: ''
});

// 导航栏相关逻辑
const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const goHome = () => {
  router.push('/UserMine');
};

// 是否编辑状态
const isEditing = ref(false);
const userId = localStorage.getItem('userId');



// 表单验证规则
const rules = {
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
  phoneNumber: [{ required: true, message: '请输入电话', trigger: 'blur' }],
  gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
  realName: [{ required: true, message: '请输入真实姓名', trigger: 'blur' }],
  age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
  address: [{ required: true, message: '请输入地址', trigger: 'blur' }],
  idNumber: [{ required: true, message: '请输入身份证号', trigger: 'blur' }]
};

// 模拟获取用户信息数据
const fetchUserInfo = async () => {
  try {
    const response = await axios.get(`/yonghu/user/${userId}`); // 假设接口返回用户信息
    if (response.data.code === 1) {
      Object.assign(userInfo, response.data.data); // 将数据赋值给 userInfo
    } else {
      ElMessage.error('获取用户信息失败');
    }
  } catch (error) {
    ElMessage.error('请求用户信息时出错');
  }
};

const saveUserInfo = async () => {
  try {
    // 将用户 ID 添加到 userInfo 中
    userInfo.id = userId;

    // 发送 PUT 请求更新用户信息
    const response = await axios.put('/yonghu/user/update', userInfo);

    // 检查返回的响应
    if (response.data.code === 1) {
      ElMessage.success('保存用户信息成功');
      isEditing.value = false; // 保存成功后退出编辑状态
      await fetchUserInfo(); // 重新获取用户信息
    } else {
      ElMessage.error('保存用户信息失败');
    }
  } catch (error) {
    console.error('保存用户信息失败:', error);
    ElMessage.error('保存用户信息失败，请重试。'); // 显示错误消息
  }
};


const handleAvatarChange = async (file) => {
  const formData = new FormData();
  formData.append('avatar', file);

  try {
    const response = await axios.post(`/yonghu/user/userUpload/${userId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    userInfo.value.avatar = response.data.avatarUrl; // 更新用户头像
  } catch (error) {
    console.error('头像上传失败:', error);
    this.$message.error('头像上传失败，请重试。');
  }
};

onMounted(() => {
  fetchUserInfo();
});
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
