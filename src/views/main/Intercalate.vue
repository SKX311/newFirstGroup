<template>
  <div>
    <!-- navbar关注老师页面 -->
    <van-nav-bar title="开通会员">
      <template #left>
        <van-icon
          name="arrow-left"
          color="black"
          size="20px"
          @click="$router.go(-1)"
        />
      </template>
    </van-nav-bar>
    <!-- navbar关注老师页面 -->
    <div class="box">
      <div class="box_left">设置密码</div>
      <div class="box_right">
        <van-icon
          name="arrow"
          color="black"
          size="20px"
          @click="$router.go(-1)"
        />
      </div>
    </div>
    <div class="box_height">
      <van-button color="#EB6100" block @click="ONCLICK">退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ONCLICK() {
      localStorage.removeItem("token");
      this.$router.push("/Login");
    },
  },
};
</script>

<style scoped>
.box {
  width: 345.2px;
  height: 55.03px;
  text-align: left;
  line-height: 55.03px;
  margin-left: 5%;
  display: inline-flex;
}
.box_left {
  width: 90%;
  font-size: 14px;
  line-height: 45px;
}
.box_right {
  width: 10%;
}
.box_height {
  width: 90%;
  height: 150.07px;
  text-align: center;
  padding-top: 15%;
  margin-left: 5%;
}
</style>