<template>
  <div>
    <!-- navbar导航栏 -->
    <van-nav-bar>
      <template #title>
        <span class="container_title">找回密码</span>
      </template>
      <template #left>
        <van-icon
          name="arrow-left"
          color="black"
          size="20px"
          @click="$router.go(-1)"
        />
      </template>
    </van-nav-bar>
    <!-- navbar导航栏 -->
    <!-- input输入框 -->
    <div class="container">
      <div class="inp">
        <input type="text" placeholder="请输入手机号" v-model="username" />
        <span class="verification">获取验证码</span>
      </div>
    </div>
    <div class="container">
      <div class="inp">
        <input type="text" placeholder="请输入验证码" v-model="password" />
      </div>
    </div>
    <div class="container">
      <div class="inp">
        <input type="password" placeholder="请输入密码" v-model="passwords" />
      </div>
    </div>
    <!-- input输入框 -->
    <!-- 按钮 -->
    <div class="container_button">
      <van-button
        size="large"
        round
        color="linear-gradient(to right, #FF944B, #FC5500)"
        @click="OnClick"
      >
        <span class="login">确定</span>
      </van-button>
    </div>
    <!-- 按钮 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "", //帐号
      password: "", //密码
      passwords: "", //密码
    };
  },
  methods: {
    OnClick() {
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          var token = res.data.data.token;
          this.token = localStorage.setItem("token", token);
          this.$router.push("/MineHome");
        });
    },
  },
};
</script>

<style scoped>
.container_title {
  font-size: 18px;
}
.container {
  width: 90%;
  /* background-color: pink; */
  text-align: left;
  margin: 0 auto;
  border-bottom: 0.1px solid rgb(199, 196, 196);
}
.container_image {
  width: 236.14px;
  height: 51.89px;
  padding-top: 50px;
  padding-bottom: 60px;
}
.inp {
  width: 100%;
  height: 51.03px;
  background-color: #ffffff;
  /* border-bottom: 1px solid rgb(233, 232, 232); */
  color: rgb(233, 232, 232);
}
.inp input {
  font-size: 4vw;
  font-weight: 400;
  width: 80%;
  height: 51.03px;
  border: 0px;
  box-sizing: border-box;
  color: black;
}
.inp input::-webkit-input-placeholder {
  color: rgb(199, 196, 196);
}
.container:hover {
  border-bottom: 1px solid red;
}
.container_password {
  width: 100%;
  height: 12px;
  display: inline-flex;
  justify-content: space-between;
  margin: 15.008px 0px 0px 0px;
  color: rgb(199, 196, 196);
}
.container_button {
  margin-left: 10%;
  width: 80%;
  height: 45.01px;
  padding-top: 50px;
}
.login {
  font-size: 16px;
}
.verification {
  width: 50%;
  height: 100%;
  color: #fc5500;
}
</style>