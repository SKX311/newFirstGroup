<template>
  <div class="big_div">
   <header><span style="font-size:18px;color: #595959;">约课记录</span></header>
    <van-tabs v-model="active" title-active-color="orangered" line-width="0.3rem" line-height="0.03rem">
      <van-tab title="待上课">
        <div class="class_boxs">
          <div class="class_box">
            <div class="class_img">
              <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" />
            </div>
            <span style="text-align: center;color:#b7b7b7;  font-size:16px;">还没有待上课记录哦</span>
          <p>   <span  class="button"  @click="classyue">立即约课</span></p> 
          </div>
        </div>
      </van-tab>

      <van-tab title="已上课">
        <div class="class_boxs">
          <div class="class_box">
            <div class="class_img">
              <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" />
            </div>
            <span style="text-align: center;color: #b7b7b7; font-size:16px;"> 还没有上课记录哦</span>
              <p><span class="button" @click="classyue">立即约课</span></p>   
          </div>
        </div>
      </van-tab>

      <van-tab title="已取消" class="van_tabs">
       <div class="class_boxs">
          <div class="class_box">
            <div class="class_img">
              <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" />
            </div>
            <span style="text-align: center;color: #b7b7b7; font-size:16px;"> 还没有上课记录哦</span>
              <p></p>   
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
      active: 0,
    };
  },
  methods:{
    classyue(){
      this.$router.push({
        path:'/Coach'
      })
    }
  }
};
</script>

<style lang="scss" scoped>

* {
  font-size: 18px;
}
header{
    width: 100%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
}
.van-tab__text--ellipsis  {
  font-size: 0.3rem;
  
}
.van-tab__pane {
  width: 100%;
}
.big_div p {
  text-align: center;
}
.class_boxs {
  width: 100%;
  height: 11rem;
  background-color: rgb(240, 242, 245);
}
.class_box {
  background-color: rgb(240, 242, 245);
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin: 0 auto; */
}
.class_img {
    padding-top: 2.3rem;
  width: 45%;
  height: 2.5rem;
  margin:  auto;
}
.class_img img {
  width: 100%;
  height: 2.5rem;
}
.button{
    font-size: 14px;
    display: block;
    width: 23%;
    border-radius: 0.15%;
    height: 0.5rem;
    text-align: center;
   line-height: 0.5rem;
   color: white;
    background-color: rgb(235, 97,0);
    margin:auto ;
}
</style>