<template>
  <div>
    <van-nav-bar>
      <template #title>
        <div class="title">学习卡兑换</div>
      </template>
      <template #left>
        <van-icon @click="balk" color="#727272" size="20px" name="arrow-left" />
      </template>
    </van-nav-bar>
    <div style="background-color:#F0F2F5;height:93vh; overflow: hidden;">
      <div style="margin-top:0.3rem;background-color:#fff;height:5.5rem;overflow:hidden;">
        <div
          style="margin-top:0.5rem;margin-left:0.3rem;border-bottom:1px solid #F7F7F7;height:1rem"
        >
          <span style="font-size:16px">卡号:</span>
          <input class="kahao" type="text" placeholder="请输入学习卡号" />
        </div>
        <div style="margin-top:0.2rem;margin-left:0.3rem;height:1rem">
          <span style="font-size:16px">密码:</span>
          <input class="kahao" type="text" placeholder="请输入学习密码" />
        </div>
        <div>
          <button class="button">立即兑换</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    balk() {
      this.$router.push({
        path: "/Studycard",
      });
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 18px;
}
.kahao {
  border: none;
  height: 0.5rem;
  width: 5rem;
  font-size: 16px;
}
.button {
  height: 1rem;
  width: 6.9rem;
  background-color: #eb6100;
  color: #fff;
  border: none;
  border-radius: 0.1rem;
  margin-left: 0.3rem;
  margin-top: 1rem;
  font-size: 18px;
}
</style>