<template>
  <div class="coach">
    <div class="box"></div>
    <div class="top">
      <p @click="back"><van-icon name="arrow-left"/></p>
      <p class="onetoone">一对一辅导</p>
      <p><van-icon name="search" @click="toSearch"/></p>
    </div>
    <div class="top_select">
      <p @click="toCoachone">选择上课时间<i class="el-icon-caret-bottom"></i></p>
      <p @click="toCoachtwo">选择老师条件<i class="el-icon-caret-bottom"></i></p>
    </div>
  <router-view></router-view>
     
  </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.go(-1)
        },
       
       
        toSearch(){
          this.$router.push({path:"/Search"})
        },
        toCoachone(){
          this.$router.push({path:"/Coachone"})
        },
         toCoachtwo(){
          this.$router.push({path:"/Coachtwo"})
        }
    }
};
</script>

<style lang="scss" scoped>
.coach {
  background: #f0f2f5;
}
.box {
  height: 38px;
}
.top {
  width: 100%;
  height: 0.87rem;
  position: fixed;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 10px;
  background: white;

  .van-icon {
    font-size: 0.45rem;
    color: #646464;
  }
  .onetoone {
    font-size: 0.35rem;
    color: #646464;
  }
}
.top_select {
  width: 100%;
  height:0.84rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
  border-bottom: 1px solid #F6F6F6;
  p{
      width: 3.75rem;
      height: 0.84rem;
      text-align: center;
      line-height: 0.84rem;
      color: #8c8c8c;
      font-size: 4vw;
      font-weight: 400;
  }
}


</style>