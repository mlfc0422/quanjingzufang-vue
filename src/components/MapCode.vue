<template>
  <div>
    <div id="container"></div>
    <div class="input-card" style='width:28rem;'>
      <label style='color:grey'>地理编码，根据地址获取经纬度坐标</label>
      <div class="input-item">
        <div class="input-item-prepend"><span class="input-item-text">地址</span></div>
        <input v-model="address" type="text" placeholder="输入地址" />
      </div>
      <div class="input-item">
        <div class="input-item-prepend"><span class="input-item-text">经纬度</span></div>
        <input v-model="lnglat" disabled type="text" />
      </div>
      <input type="button" class="btn" @click="geoCode" value="地址 -> 经纬度" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';

const address = ref('北京市朝阳区阜荣街10号');
const lnglat = ref('');
let map = null;
let geocoder = null;
let marker = null;

onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: '919b72e2406397582c5a6a56a2f7f5cb',
  };
  AMapLoader.load({
    key: '716d2d104b91d6199612161379983172',
    version: '2.0',
    plugins: ['AMap.Geocoder'],
  }).then((AMap) => {
    map = new AMap.Map('container', {
      resizeEnable: true,
    });

    geocoder = new AMap.Geocoder({
      city: '0898',
    });

    marker = new AMap.Marker();
  }).catch((e) => {
    console.error(e);
  });
});

onUnmounted(() => {
  map?.destroy();
});

const geoCode = () => {
  geocoder.getLocation(address.value, (status, result) => {
    if (status === 'complete' && result.geocodes.length) {
      const lnglatVal = result.geocodes[0].location;
      lnglat.value = `${lnglatVal.lng}, ${lnglatVal.lat}`;
      marker.setPosition(lnglatVal);
      map.add(marker);
      map.setFitView(marker);
    } else {
      console.error('根据地址查询位置失败');
    }
  });
};
</script>

<style scoped>
#container {
  height: 400px;
  width: 100%;
}
.input-card {
  margin-top: 20px;
}
.btn {
  width: 10rem;
  margin-left: 6.8rem;
}
</style>
