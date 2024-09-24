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
      <el-menu-item index="2" @click="goUserMine">个人中心</el-menu-item>
      <el-menu-item index="1">我的发布</el-menu-item>
    </el-menu>
    <div class="h-6"/>
  </el-affix>

  <div class="container my-4">
    <!-- 标题和发布新房源按钮 -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>我的发布</h2>
      <el-button type="primary" @click="addNewListing">发布新房源</el-button>
    </div>

    <!-- 房源列表 -->
    <div class="row">
      <div class="col-md-4 mb-4" v-for="house in userListings" :key="house.id">
        <el-card shadow="always" class="house-card">
          <img :src="house.pic" alt="house-image" class="img-fluid rounded mb-2"/>
          <h3>{{ house.title }}</h3>
          <p>价格: {{ house.rent }} 元/月</p>
          <p>使用面积: {{ house.useArea }}</p>
          <p class="text-truncate">描述: {{ house.houseDesc }}</p>
          <div class="d-flex justify-content-between mt-3">
            <el-button type="success" size="small" @click="editListing(house)">编辑</el-button>
            <el-button type="danger" size="small" @click="deleteListing(house.id)">删除</el-button>
          </div>
        </el-card>
      </div>
    </div>
  </div>

  <!-- 编辑和发布对话框 -->
  <el-dialog :title="isEditing ? '编辑房源' : '发布新房源'" v-model="dialogVisible">
    <el-form :model="form" label-width="100px">
      <el-form-item label="房源标题">
        <el-input v-model="form.title"/>
      </el-form-item>
      <el-form-item label="租金">
        <el-input v-model="form.rent" type="number"/>
      </el-form-item>
      <el-form-item label="租赁方式">
        <el-select v-model="methodDisplay" placeholder="租赁方式">
          <el-option v-for="(label, value) in methodOptions" :key="value" :label="label" :value="value" />
        </el-select>
      </el-form-item>
      <el-form-item label="房屋类型">
        <el-input v-model="form.houseType"/>
      </el-form-item>
      <el-form-item label="使用面积">
        <el-input v-model="form.useArea"/>
      </el-form-item>
      <el-form-item label="所在楼层">
        <el-input v-model="form.floor"/>
      </el-form-item>
      <el-form-item label="朝向">
        <el-input v-model="form.orientation"/>
      </el-form-item>
      <el-form-item label="上传图片">
        <el-upload
            class="upload-demo"
            list-type="picture-card"
            :limit="5"
            :auto-upload="false"
            :file-list="fileList"
            :on-change="handleChange"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="previewVisible" width="30%">
          <img width="100%" :src="previewImage" alt=""/>
        </el-dialog>
      </el-form-item>

      <el-form-item label="房源描述">
        <el-input type="textarea" v-model="form.houseDesc"/>
      </el-form-item>
      <el-form-item label="联系人姓名">
        <el-input v-model="form.contact"/>
      </el-form-item>
      <el-form-item label="联系人手机号">
        <el-input v-model="form.mobile"/>
      </el-form-item>
      <el-form-item label="看房时间">
        <el-select v-model="timeDisplay" placeholder="选择看房时间">
          <el-option v-for="(label, value) in timeOptions" :key="value" :label="label" :value="value" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="submitForm" v-if="!isEditing">发布</el-button>
      <el-button type="primary" @click="updateForm" v-if="isEditing === true">保存</el-button>
    </template>
  </el-dialog>

</template>

<script lang="ts" setup>
import {onMounted, ref,computed} from 'vue'

//导航栏
import router from "../router/router.ts";
import {ElMessage, ElMessageBox} from 'element-plus'
import axios from "axios";

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const goUserMine = () => {
  router.push("/UserMine")
}

const id = localStorage.getItem('userId') // 获取当前登录用户的 ID
// 房源列表数据
interface House {
  ownerId: string;          // 房东 ID
  id: number;               // 房源 ID
  title: string;            // 房源标题
  rent: number;             // 租金
  rentMethod: boolean;      // 租赁方式（如：整租或合租）
  houseType: string;        // 房屋类型
  useArea: string;          // 使用面积
  floor: string;            // 所在楼层
  orientation: string;      // 朝向
  pic: string;              // 图片路径
  houseDesc: string;        // 房源描述
  contact: string;          // 联系人姓名
  mobile: string;           // 联系人手机号码
  time: number;             // 看房时间 1是上午 2是中午 3是下午 4是晚上 5是全天
  created: Date;            // 创建时间
  updated: Date;            // 更新时间
  statusCode: boolean;      // 状态码（如：是否有效）
  leaseTerm: number;        // 租期
}

// 房源数据
const userListings = ref<House[]>([])

// 表单控制
const dialogVisible = ref(false)
const form = ref<Partial<House>>({}) // 用于编辑或新发布的表单数据
const isEditing = ref(false) // 标识当前是编辑模式还是发布模式

// 编辑房源
const editListing = (house: House) => {
  form.value = {...house} // 复制当前房源信息到表单
  isEditing.value = true
  dialogVisible.value = true
}


// 发布新房源
const addNewListing = () => {
  form.value = {} // 清空表单数据
  isEditing.value = false
  dialogVisible.value = true
}
//租赁方式
const methodOptions = {
  true: '合租',
  false: '整租'
}
// 使用 computed 来展示看房时间对应的文字
const methodDisplay = computed({
  get() {
    const rentMethod = form.value.rentMethod !== undefined ? form.value.rentMethod : true; // 默认值为 true
    return methodOptions[rentMethod as true | false] || ''; // 使用类型断言
  },
  set(value) {
    form.value.rentMethod = value === 'true'; // 根据选择的值，保存布尔值
  },
})

//看房时间
// 1-上午, 2-中午, 3-下午, 4-晚上, 5-全天
const timeOptions = {
  1: '上午',
  2: '中午',
  3: '下午',
  4: '晚上',
  5: '全天',
}
// 使用 computed 来展示看房时间对应的文字
const timeDisplay = computed({
  get() {
    const time = form.value.time !== undefined ? form.value.time : 1; // 默认值为 1
    return timeOptions[time as 1 | 2 | 3 | 4 | 5] || ''; // 使用类型断言
  },
  set(value) {
    form.value.time = value; // 当选择时间段时，保存数字值
  },
})
const updateForm = () => {
  console.log(form.value.title)
}


import { ElMessageBox, ElMessage } from 'element-plus'

const deleteListing = (id: number) => {
  // 使用 ElMessageBox 提示确认是否删除
  ElMessageBox.confirm('确定要删除该房源吗？', '删除确认', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
      .then(() => {
        // 确认删除，执行过滤操作
        userListings.value = userListings.value.filter(house => house.id !== id)
        // 删除成功提示
        ElMessage({
          type: 'success',
          message: '删除成功!',
        })
      })
      .catch(() => {
        // 用户取消删除操作
        ElMessage({
          type: 'info',
          message: '已取消删除',
        })
      })
}

const fileList = ref([]); // 上传的文件列表
const handleChange = (file, newFileList) => {
  fileList.value = newFileList;
};

const submitForm = async () => {
  // 1. 构建房源数据对象
  const HouseData = {
    id: form.value.id,
    ownerId: id,
    title: form.value.title,
    rent: form.value.rent,
    rentMethod: form.value.rentMethod,
    houseType: form.value.houseType,
    useArea: form.value.useArea,
    floor: form.value.floor,
    orientation: form.value.orientation,
    houseDesc: form.value.houseDesc,
    contact: form.value.contact,
    mobile: form.value.mobile,
    time: form.value.time,
    leaseTerm: "2"
  };

  // 2. 上传房源信息
  try {
    const response = await axios.post(`/fangyuan/property/add`, HouseData);
    console.log('响应数据:', response.data); // 打印响应数据
    const { code, msg, data } = response.data;

    if (code === 1 && data) {
      HouseData.id = data.id; // 更新为 data.id
      console.log('发布房源成功:', HouseData); // 打印成功获取的数据
      // 3. 上传图片
      if (fileList.value.length > 0) {
        console.log('开始上传图片', fileList.value);
        const imageUploadPromises = fileList.value.map(file => {
          const formData = new FormData();
          formData.append('image', file.raw);

          return axios.post(`fangyuan/property/addimg/${HouseData.id}`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
          });
        });

        await Promise.all(imageUploadPromises); // 等待所有图片上传完成
        console.log('所有图片上传成功');
      } else {
        console.warn('没有文件需要上传');
      }

    } else {
      console.error('发布房源失败:', msg || '未知错误');
    }
  } catch (error) {
    console.error('发布房源过程中出现错误:', error);
  } finally {
    dialogVisible.value = false; // 无论成功与否，关闭对话框
  }
};

onMounted(() => {
  // 获取房源列表
  axios.get(`/fangyuan/property/listMyProperty/${id}`)
      .then(response => {
        const { code, msg, data } = response.data;
        if (code === 1 && data) {
          userListings.value = data;
        } else {
          console.error('获取房源列表失败:', msg || '未知错误');
        }
      })
      .catch(error => {
        console.error('获取房源列表时发生错误:', error);
      });
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

.house-card {
  background-color: #f9f9f9;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.text-truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
