<template>
  <div>
    <van-nav-bar>
      <template #title>
        <div class="title">我的学习卡</div>
      </template>
      <template #left>
        <van-icon color="#727272" size="20px" name="arrow-left" />
      </template>
      <template #right>
        <div class="right" @click="duihuan">学习卡兑换</div>
      </template>
    </van-nav-bar>
    <div style="background-color:#F0F2F5;height:93vh; overflow: hidden;">
      <div class="xx">
        <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
        <p>暂无优惠券</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    duihuan() {
      this.$router.push({
        path: "/Studycardexchange",
      });
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 18px;
}
.right {
  font-size: 15px;
  color: #595959;
}
img {
  height: 150px;
  width: 150px;
}
.xx {
  text-align: center;
  margin-top: 2rem;
}
.xx p {
  color: #8c8c8c;
  font-size: 16px;
}
</style>