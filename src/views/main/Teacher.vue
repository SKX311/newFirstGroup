<template>
  <div>
    <!-- navbar关注老师页面 -->
    <van-nav-bar title="我的关注">
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
    <!-- 空状态 -->
    <van-empty description="暂无关注" />
    <!-- 空状态 -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>