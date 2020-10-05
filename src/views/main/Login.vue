<template>
  <div>
    <div class="container">
      <img
        class="container_image"
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt=""
      />
      <div class="inp">
        <input type="text" placeholder="请输入手机号" v-model="username" />
      </div>
      <div class="inp">
        <input type="password" placeholder="请输入密码" v-model="password" />
      </div>
      <div class="container_password">
        <span @click="$router.push('/RetrievePassword')">找回密码</span>
        <span @click="$router.push('/Verification')">注册/验证码登录</span>
      </div>
      <div class="container_button">
        <van-button
          size="large"
          round
          color="linear-gradient(to right, #FF944B, #FC5500)"
          @click="OnClick"
        >
          <span class="login" >登录</span>
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "", //帐号
      password: "", //密码
    };
  },
  methods: {
    OnClick() {
      // console.log(11111111111);
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
.container {
  width: 80%;
  height: 400.03px;
  /* background-color: pink; */
  text-align: center;
  margin: 0 auto;
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
  border-bottom: 1px solid rgb(233, 232, 232);
  color: rgb(233, 232, 232);
}
.inp input {
  font-size: 4vw;
  font-weight: 400;
  width: 100%;
  height: 51.03px;
  border: 0px;
  box-sizing: border-box;
  color: black;
}
.inp input::-webkit-input-placeholder {
  color: rgb(199, 196, 196);
}
.inp input:hover {
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
  width: 100%;
  height: 45.01px;
  padding-top: 50px;
}
.login {
  font-size: 16px;
}
</style>
