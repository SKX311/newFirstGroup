<template>
  <div>
    <van-nav-bar>
      <template #title>
        <div class="Preferentialboxing">我的优惠券</div>
      </template>
      <template #left>
        <van-icon size="20px" color="#5D5D5D" name="arrow-left" />
      </template>
    </van-nav-bar>
    <van-tabs v-model="active" size="20px" color="#EB6100" title-active-color="#EB6100">
      <van-tab>
        <template #title>
          <div style="font-size:15px">未使用</div>
        </template>
        <div class="xx">
          <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
          <p>暂无优惠券</p>
        </div>
      </van-tab>
      <van-tab >
         <template #title>
          <div style="font-size:15px">已使用</div>
        </template>
          <div class="xx">
          <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
          <p>暂无优惠券</p>
        </div>
      </van-tab>
      <van-tab >
         <template #title>
          <div style="font-size:15px">已过期</div>
        </template>
          <div class="xx">
          <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
          <p>暂无优惠券</p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>
.Preferentialboxing {
  font-size: 18px;
}
img {
  height: 150px;
  width: 150px;
}
.xx{
    text-align: center;
    margin-top: 1.8rem;
}
.xx p{
    color:#8C8C8C;
    font-size: 16px;
}
</style>