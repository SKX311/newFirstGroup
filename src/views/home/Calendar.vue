<template>
  <div>
    <div class="top">
      <header>
        <p @click="back"><van-icon name="arrow-left" /></p>
        <p class="onetoone">学习日历</p>
      </header>
    </div>
    <div class="calendar">
      <div class="head">
        <span class="data">2020年10月</span>
        <div class="btn">
          <i class="van-icon van-icon-arrow-left" style="font-size: 20px"></i>
          <i
            class="van-icon van-icon-arrow"
            style="margin: 0px 4vw; font-size: 20px"
          ></i>
        </div>
      </div>

      <div class="body">
        <van-calendar
          :poppable="false"
          :show-confirm="false"
          :show-subtitle="false"
          :show-title="false"
          :show-mark="false"
          color="#EB6100"
          row-height="30px"
          :style="{ }"
        />
      </div>
    </div>
    <div class="bottom">
        <span class="data">10月2日</span>
        <span class="datacourse">当天0节课</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
    };
  },
  methods:{
      back(){
          this.$router.go(-1)
      }
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 0.879rem;
  box-sizing: border-box;
  padding: 0px 12px;
  border-bottom: 1px solid #f7f7f7;
  header {
    width: 100%;
    height: 0.879rem;
    display: flex;
    align-items: center;

    .van-icon {
      font-size: 0.45rem;
      color: #5a5a5a;
    }
    .onetoone {
      width: 6.3rem;
      height: 0.86rem;
      font-size: 4.8vw;
      color: #5a5a5a;
      text-align: center;
      line-height: 0.86rem;
    }
  }
}
.calendar {
  background: white;
  padding: 5.33333vw 0 4vw 0;

  .head {
    font-size: 6.9333vw;
    color: #595959;
    text-align: left;
    margin-bottom: 6.66667vw;
    .data {
      margin: 0 6.53333vw;
      font-size: 0.55rem;
    }
    .btn {
      float: right;
      margin-top: 0.15rem;
      .van-icon,
      .van-icon:before {
        display: inline-block;
      }
    }
  }
  .body{
      width: 100%;
      height: 5.4rem;
     overflow: hidden;
     .van-calendar__selected-day{
         border-radius: 100%;
     }
  }
}
.bottom{
    padding: 0 0 2.66667vw 2.66667vw;
    margin-top: 0.2rem;
    .data{
        font-size: 4vw;
        color: #eb6100;
        margin-right: 4vw;
    }
    .datacourse{
        font-size: 3.2vw;
        color: #8c8c8c;
    }
}
</style>