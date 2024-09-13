<template>
  <div class="container">
    <h1>用户服务协议</h1>
    <p>欢迎使用基于Dubbo与SpringBoot的综合智能租房平台服务！在使用我们的服务之前，请您仔细阅读以下用户服务协议。</p>

    <p><strong>1. 服务内容</strong></p>
    <p>本平台致力于为用户提供房东与租户之间的智能匹配服务。我们的服务包括但不限于以下内容：</p>
    <ul>
      <li>提供房源信息的发布和管理功能。</li>
      <li>为租户提供多条件筛选、精准推荐和匹配最优房源的服务。</li>
      <li>支持租赁合同的在线签订和管理。</li>
      <li>实现租赁过程的动态跟踪和实时数据更新。</li>
      <li>保障用户数据的安全存储与隐私保护。</li>
    </ul>

    <p><strong>2. 用户责任</strong></p>
    <p>用户应对其账户下的所有活动负责，包括但不限于：</p>
    <ul>
      <li>妥善保管账户信息和密码，防止未经授权的访问。</li>
      <li>确保在平台发布的房源信息真实、准确、合法。</li>
      <li>遵守国家相关法律法规和平台的使用规定，不进行任何非法或不正当的活动。</li>
    </ul>

    <p><strong>3. 隐私保护</strong></p>
    <p>我们将严格遵守相关法律法规，保护您的个人隐私信息。在未获得您的授权或法律要求的情况下，我们不会将您的个人信息提供给第三方。</p>

    <p><strong>4. 变更和终止</strong></p>
    <p>我们保留在任何时候修改本用户服务协议或终止部分或全部服务的权利。若有重大变更，我们将提前通知用户。</p>

    <p><strong>5. 免责声明</strong></p>
    <p>本平台不对因用户提供虚假信息或任何不当行为造成的损失负责。对于因系统维护、升级或其他不可抗力导致的服务中断，我们不承担责任。</p>

    <p>如有疑问，请通过本平台提供的联系方式联系我们的客服。</p>
  </div>

</template>


<!-- 引入 Bootstrap JS 和依赖的 Popper.js 和 jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>


<style scoped>
body {
  background: linear-gradient(to right, #f2f8ff, #e6efff);
  /* 柔和的渐变背景 */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* 更现代的字体 */
  color: #333;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  /* 更圆滑的边角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* 更柔和的阴影 */
  border-top: 6px solid #007bff;
  /* 增加顶部边框颜色 */
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #007bff;
  /* 标题颜色 */
  text-align: center;
  /* 标题居中 */
}

p {
  line-height: 1.8;
  margin-bottom: 16px;
  font-size: 16px;
  /* 增加字体大小 */
}

ul {
  padding-left: 20px;
  /* 调整列表缩进 */
  margin-bottom: 16px;
}

li {
  margin-bottom: 8px;
  /* 列表项之间的间距 */
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>