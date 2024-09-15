<template>
  <div class="chatting">

    <div class="chat-container">
      <!-- 聊天头部 -->
      <div class="chat-header">
        <a href="main-index.html" class="home-link">
          <i class="fas fa-home"></i>主页
        </a>
        <h5>聊天</h5>
      </div>

      <!-- 聊天主体 -->
      <div class="chat-body" id="chatBody">
        <div class="chat-message received">
          <div class="message-content">
            <p>您好，请问房子还在吗？</p>
          </div>
        </div>
        <div class="chat-message sent">
          <div class="message-content">
            <p>在的，请问您有什么具体需求吗？</p>
          </div>
        </div>
        <div class="chat-message received">
          <div class="message-content">
            <p>我想了解一下租金和入住时间。</p>
          </div>
        </div>
        <div class="chat-message sent">
          <div class="message-content">
            <p>租金是每月 3000 元，可以随时入住。</p>
          </div>
        </div>
      </div>

      <!-- 聊天底部 -->
      <div class="chat-footer">
        <input type="text" id="messageInput" placeholder="请输入消息">
        <button onclick="sendMessage()"><i class="fas fa-paper-plane"></i></button>
      </div>
    </div>
  </div>

</template>

<script>
// 发送消息功能
function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const chatBody = document.getElementById('chatBody');
  const messageText = messageInput.value.trim();

  if (messageText) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', 'sent');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerHTML = `<p>${messageText}</p>`;

    messageElement.appendChild(messageContent);
    chatBody.appendChild(messageElement);
    messageInput.value = '';

    // 自动滚动到底部
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}
</script>

<style scoped>
/* 自定义样式 */
.chatting {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-header {
  background-color: #007bff;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 居中对齐所有子元素 */
  position: relative;
}

.chat-header .home-link {
  position: absolute;
  /* 绝对定位主页链接 */
  left: 10px;
  /* 从左边距 10px */
  color: white;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
}

.chat-header .home-link i {
  margin-right: 5px;
}

.chat-header h5 {
  margin: 0;
  font-size: 1.1rem;
}

.chat-body {
  flex-grow: 1;
  overflow-y: auto;
  padding: 15px;
  background-color: #f5f5f5;
}

.chat-message {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}

.chat-message .message-content {
  max-width: 80%;
  /* 增加最大宽度以更适应手机 */
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  word-wrap: break-word;
  /* 自动换行 */
}

.chat-message.sent .message-content {
  background-color: #d3eaff;
  color: #333;
  margin-left: auto;
}

.chat-message.received .message-content {
  background-color: #ffffff;
  color: #333;
  margin-right: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chat-footer {
  padding: 8px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
}

.chat-footer input[type="text"] {
  flex-grow: 1;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 8px 15px;
  margin-right: 8px;
}

.chat-footer button {
  background-color: #007bff;
  border: none;
  color: #fff;
  padding: 8px;
  border-radius: 50%;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .chat-body {
    padding: 10px;
  }

  .chat-footer {
    padding: 5px;
  }

  .chat-footer input[type="text"] {
    padding: 8px;
    margin-right: 5px;
  }

  .chat-footer button {
    padding: 5px;
    font-size: 1rem;
  }
}
</style>