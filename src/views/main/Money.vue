<template>
  <div>
    <!-- navbar -->
    <van-nav-bar title="我的学习币">
      <template #left>
        <van-icon
          name="arrow-left"
          color="black"
          size="20px"
          @click="$router.go(-1)"
        />
      </template>
      <template #right>
        <span @click="$router.push('/MoneySize')">余额明细</span>
      </template>
    </van-nav-bar>
    <!-- navbar -->
    <!-- 导航条部分 -->
    <p class="navp">我的余额<span class="navmoney">0学习币</span></p>
    <!-- 导航条部分 -->
    <!-- cell单元格部分 -->
    <van-cell-group border>
      <van-cell
        title="30000.00学习币"
        value="30000.00学习币"
        v-for="index in 10"
        :key="index"
      >
      </van-cell>
    </van-cell-group>
    <!-- cell单元格部分 -->
    <!-- 底部立即充值图标 -->
    <van-button
      color="linear-gradient(to right, #EC6507, #EC6507)"
      block
      @click="ONCLICK"
    >
      立即充值
    </van-button>
    <!-- 底部立即充值图标 -->
  </div>
</template>

<script>
export default {
  methods: {
    ONCLICK() {
      this.$toast("这只是测试");
    },
  },
};
</script>

<style scoped>
.navmoney {
  color: orange;
  padding-left: 0.3rem;
  font-size: 0.36rem;
}
.navp {
  padding-left: 0.3rem;
  font-size: 0.36rem;
}
</style>