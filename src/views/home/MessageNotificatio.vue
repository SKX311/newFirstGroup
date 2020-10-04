<template>
  <div>
    <div class="top">
      <header>
        <p @click="back"><van-icon name="arrow-left" /></p>
        <p class="onetoone">消息通知</p>
      </header>
    </div>
    <div class="center">
      <ul>
        <li>
          <img src="http://localhost:8080/img/icon01.png" alt="">
          <div class="right">
            <span class="tongzhi">课程通知</span>
            <p class="xiaoxi">暂无消息</p>
          </div>
        </li>
        <li>
          <img src="http://localhost:8080/img/icon02.png" alt="">
          <div class="right">
            <span class="tongzhi">系统通知</span>
            <p class="xiaoxi">暂无消息</p>
          </div>
        </li>
        <li>
          <img src="http://localhost:8080/img/icon03.png" alt="">
          <div class="right">
            <span class="tongzhi">订单通知</span>
            <p class="xiaoxi">您的课程订单《》取消成功</p>
          </div>
        </li>
        <li>
          <img src="http://localhost:8080/img/icon04.png" alt="">
          <div class="right">
            <span class="tongzhi">约课通知</span>
            <p class="xiaoxi">暂无消息</p>
          </div>
        </li>
        <li>
          <img src="http://localhost:8080/img/icon05.png" alt="">
          <div class="right">
            <span class="tongzhi">考试通知</span>
            <p class="xiaoxi">暂无消息</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
  border-bottom: 1px solid #F7F7F7;
  header {
    width: 100%;
    height: 0.879rem;
    display: flex;
    align-items: center;

    .van-icon {
      font-size: 0.45rem;
      color: #5A5A5A;
    }
    .onetoone {
      width: 6.3rem;
      height: 0.86rem;
      font-size: 4.8vw;
      color: #5A5A5A;
      text-align: center;
      line-height: 0.86rem;
    }
  }
}
.center{
  ul{
    width: 6.9rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    li{
      width: 6.9rem;
      height: 1.35rem;
      border-bottom: 1px solid #F7F7F7;
      display: flex;
      align-items: center;
      justify-content: space-around;
     
      img{
        width: 0.879rem;
        height: 0.879rem;

      }
      .right{
        width: 6.021rem;
        height: 1.35rem;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding:0 4vw;
       .tongzhi{
         display: inline-block;
         font-size: 4vw;
         color: #595959;
         font-weight: 500;
         margin-top: 0.2rem;
       }
       .xiaoxi{
         font-size: 3.46667vw;
         color: #595959;
         margin-top: 0.2rem;

       }
      }
    }
  }
}
</style>