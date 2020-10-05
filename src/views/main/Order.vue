<template>
  <div>
    <!-- navbar课程订单 -->
    <van-nav-bar
      title="约课订单"
    >
    <template #left>
        <van-icon
          name="arrow-left"
          color="black"
          size="20px"
          @click="$router.go(-1)"
        />
      </template></van-nav-bar>
    <!-- navbar课程订单 -->
    <!-- 标签页 -->
    <van-tabs  title-active-color="#EC6507">
      <van-tab title="全部订单"></van-tab>
      <van-tab title="待支付"></van-tab>
      <van-tab title="已完成"></van-tab>
      <van-tab title="已取消"></van-tab>
    </van-tabs>
    <!-- 标签页 -->
    <!-- 空状态 -->
    <van-empty description="暂无订单" />
    <!-- 空状态 -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>