<template>
  <div id="app">
    
    <router-view/>

    <div v-show="$route.meta.showTabbar">
      <van-tabbar route>
        <van-tabbar-item to="/"><img src="http://localhost:8080/img/tubiao1.png" alt="" style="width:0.4rem"/><p>首页</p></van-tabbar-item>
        <van-tabbar-item to="/CourseHome"><img src="http://localhost:8080/img/tubiao02.png" alt="" style="width:0.4rem"/><p>课程</p></van-tabbar-item>
        <van-tabbar-item to="/RecordHome"><img src="http://localhost:8080/img/tubiao03.png" alt="" style="width:0.3rem"/><p>约课记录</p></van-tabbar-item>
        <van-tabbar-item to="/ExerciseHome"><img src="http://localhost:8080/img/tubiao04.png" alt="" style="width:0.4rem"/><p>练习</p></van-tabbar-item>
        <van-tabbar-item to="/MainHome"><img src="http://localhost:8080/img/tubiao05.png" alt="" style="width:0.4rem"/><p>我的</p></van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<style scoped>
* {
  font-size: 0.24rem;
}
.van-tabbar-item{
  text-align: center;
}
.van-tabbar-item--active{
  color: #FF6B00 !important;
}

</style>
