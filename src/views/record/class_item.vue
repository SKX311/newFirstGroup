<template>
  <div>
    <!-- 预约课程 -->
    <div class="back_color">
      <div class="back_font">
        <div @click="go">
          <img
            data-v-0da794c7=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC"
          />
        </div>
        <div style="color: white; width: 5rem; text-align: center;
        font-size:0.4rem">
          预约课程
        </div>
        <div></div>
      </div>

      <div class="img_box">
        <img
          class="class-imgs"
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
        />

        <div>
          <div style="height:0.25rem">

          </div>
          <div style="font-size: 0.3rem">杨德胜</div>
          
            <span style="font-size: 0.3rem; color:#b7b7b7">男</span>
            &nbsp;&nbsp;
            <span style="font-size: 0.16rem; color:#b7b7b7">30年教龄</span>
          
        </div>

        <div class="buss">
          <button
            class="buttons"
            style="
              border: 1px solid #eb6100;
              font-size: 10px;
              font-size: 0.25rem;
              color: #eb6100;
              border-radius: 25px;
            "
            @click="xiangq"
          >
            查看详情
          </button>
        </div>
      </div>
    </div>
    <div class="back_colors">
      <p class="back_p">
        <b style="color: #eb6100">|</b>
        &nbsp;&nbsp;
        <span style="font-size:0.3rem; color: #595959"
          >选择时间<span
            style="font-size: 0.27rem; padding-left: 0.2rem; color: #595959"
            >(北京时间)</span
          ></span
        >
      </p>
      <!-- 选择时间 -->
      <div class="back_time">
        <!-- 标签栏滚动 -->
        <van-tabs title-active-color="#eb6100" color="#4169ff" line-height="0.08rem" line-width="0.4rem" >
          <van-tab v-for="(item, index) in num" :key="index">
            <template #title>
              <div class="flex">{{ item.title }}{{item.dete}}</div>
            </template>
          </van-tab>
        </van-tabs>
      </div>

      <div class="back_imgz">
        <img class="iii" src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
        <p style="font-size: 0.3rem; color: #595959">暂无信息</p>
      </div>
    </div>
    <van-button color="rgb(235,97,0)" block style="font-size: 12px;">立即预约</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: [
        {
          title:"周一",
          dete:'10/04'
        },
        {
          title:"周二",
          dete:'10/05'
        },
        {
          title:"周三",
          dete:'10/06'
        },
        {
          title:"周四",
          dete:'10/07'
        },
        {
          title:"周五",
          dete:'10/08'
        },
        {
          title:"周六",
          dete:'10/09'
        },
        {
          title:"周日",
          dete:'10/10'
        }
      ],
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    xiangq() {
      this.$router.push({
        path: "/TeacherDetails",
      });
    },
  },
};
</script>
<style lang="scss" scoped>

.flex{
  display: flex;
  width: 1rem;
  height: 1rem;
  /* border: 1px solid red; */
  font-size: 0.25rem;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}

*{
  font-size: 20px;
}
.back_color {
  width: 100%;
  height: 1.8rem;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#63b7fe), to(#4e7de3));
}
.back_font {
  padding-top: 0.2rem;
  display: flex;
  justify-content: space-around;
}
.img_box {
  border-radius: 3%;
  width: 95%;
  height: 1.2rem;
  background-color: #fff;
  margin: 0.1rem auto;
  display: flex;
  /* justify-content: space-around; */
}

.class-imgs {
  margin: 0.3rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  /* align-items: center; */
  line-height: 1.2rem;
}
.buss {
  padding-left: 2.2rem;
  padding-top: 0.3rem;
}
.buttons {
  width: 1.5rem;
  height: 0.6rem;
  background-color: #fff;
}
.back_colors {
  width: 100%;
  height: 10rem;
  background-color: rgb(240, 242, 245);
}
.back_p {
  padding-top: 0.2rem;
  margin-left: 0.2rem;
}
.back_time {
  padding-top: 0.1rem;
  width: 95%;
  height: 1rem;
  background-color: white;
  margin-left: 0.2rem;
}

.back_imgz {
  /* background-color: red; */
  width: 3rem;
  height: 4rem;
  margin: 0.5rem 2.5rem;
}
.back_imgz p {
  text-align: center;
}
.iii {
  width: 3rem;
  margin: 0 auto;
}
.van-button{
  font-size: 4.53333vw !important;
}
</style>