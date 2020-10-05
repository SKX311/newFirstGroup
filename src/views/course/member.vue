<template>
  <div>
    <van-nav-bar>
      <template #title>
        <div style="font-size:18px">开通会员</div>
      </template>
      <template #left>
        <van-icon size="20px" color="#595959" name="arrow-left" />
      </template>
    </van-nav-bar>
    <div class="conter">
      <div style="float: left;margin-top:0.3rem;margin-left:0.3rem">
        <img class="img" src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt />
      </div>
      <div style="margin-left:0.2rem;float: left;margin-top:0.35rem">
        <div style="color:#595959;font-size:14px">155****4795</div>
        <div style="color:#8C8C8C;margin-top:0.07rem">开通会员免费学习</div>
      </div>
    </div>
    <div style="background-color:#F0F2F5;height:81.9vh;overflow: hidden;">
      <div class="conter-zhongjian">
        <div style=" float: left;color:#595959;font-size:15px;">购买会员</div>
        <div style=" float: left;color:#8C8C8C;margin-top:0.05rem;margin-left:0.2rem">购买会员后可免费观看会员课程</div>
      </div>
      <div class="conter-active">
        <div class="conter-active-div">
          <p class="conter-active-p">季度会员</p>

          <img
            class="imgs"
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
            alt
          />
          <span class="conter-active-span">40.00</span>
        </div>
        <div class="conter-active-div">
          <p class="conter-active-p">半年会员</p>

          <img
            class="imgs"
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
            alt
          />
          <span class="conter-active-span">75.00</span>
        </div>
        <div class="conter-active-div">
          <p class="conter-active-p">月会员</p>

          <img
            class="imgs"
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
            alt
          />
          <span class="conter-active-span">15.00</span>
        </div>
      </div>
    </div>
    <button class="button">立即支付</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.conter {
  height: 1.5rem;
  width: 100%;
  background-color: #fff;
}
.img {
  height: 43px;
  width: 43px;
  border-radius: 50%;
}
.conter-zhongjian {
  margin-left: 0.3rem;
  margin-top: 0.5rem;
}
.conter-active {
  height: 2.5rem;
  width: 100%;

  margin-top: 1rem;
  justify-content: space-around;
  align-items: center;
  display: flex;
  margin-top: 1rem;
}
.conter-active div {
  height: 112px;
  width: 102px;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 0.1rem;
}
.conter-active div:hover {
  background-color: #f9f0d9;
  border: 1px solid #f9f0d9;
}

.conter-active-p {
  margin-left: 0.5rem;
  color: #595959;
  font-size: 13px;
  font-weight: 700;
  margin-top: 0.5rem;
}
.imgs {
  height: 15px;
  width: 14px;
  margin-left: 0.1rem;
}
.conter-active-span {
  font-size: 30px;
  color: #d5a322;
}
.button {
  height: 44px;
  width: 345px;
  background-color: #e2c086;
  font-size: 17px;
  border:none;
  border-radius: 0.5rem;
  color:#fff;
  position: fixed;
  bottom: 0.5rem;
  margin-left: 0.3rem;
}
</style>