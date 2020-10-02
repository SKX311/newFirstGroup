<template>
  <div>
      <div class="top">
      <header>
        <p @click="back"><van-icon name="arrow-left" /></p>
        <p class="onetoone">意见反馈</p>
      </header>
    </div>
    <div class="center">
        <textarea maxlength="500" placeholder="请输入您的意见" class="yijian"></textarea>
        
    </div>
    <p class="max-len">0/500</p>
    <p class="button">提交</p>
  </div>
</template>

<script>
export default {
 methods:{
      back(){
          this.$router.go(-1)
      }
  }
}
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
    width: 6.85rem;
        height: 44vw;
        margin: 0 auto;
        margin-top: 0.29rem;
    .yijian{
        box-sizing: border-box;
        width: 6.85rem;
        height: 44vw;
        line-height: 3.2vw;
        font-size: 3.2vw;
        padding: 2.66667vw 2.66667vw;
        border: 1px solid #ddd;
        border-radius: 1.33333vw;
        color: #B7B7B7;
    }
}
.max-len{
   font-size: 3.2vw;
   text-align: right;
   margin: 1.33333vw 5.33333vw 0 0;
   color: #b7b7b7;
}
.button{
    background: #eb6100;
    color: white;
    width: 92vw;
    height: 11.73333vw;
    margin: 30.66667vw auto;
    border-radius: 1.06667vw;
    font-size:4.53333vw ;
    text-align: center;
    line-height: 11.73333vw;
}
</style>