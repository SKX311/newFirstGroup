<template>
  <div>
      <!-- navbar -->
      <van-nav-bar
      title="我的余额">
      <template #left>
        <van-icon
          name="arrow-left"
          color="black"
          size="20px"
          @click="$router.go(-1)"
        />
      </template></van-nav-bar>
      <!-- navbar -->
      <!-- 空状态 -->
      <van-empty description="暂时没有更多了" />
      <!-- 空状态 -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>