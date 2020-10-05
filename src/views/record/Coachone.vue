<template>
  <div id="id1">
  
    <!-- 选择上课时间 -->
  

    
          <div style="height: 0.2rem"></div>
          <!-- 日期 -->
          <div class="options_riqi">
            <div style="margin-left: 0.2rem; color: #595959;font-size:0.26rem">日期</div>
            <!-- 星期 -->
            <ul class="riqi_xing">
              <li>周一</li>
              <li>周二</li>
              <li>周三</li>
              <li>周四</li>
              <li>周五</li>
              <li>周六</li>
              <li>周日</li>
            </ul>
            <!-- 天 -->
            <ul class="riqi_tian">
              <li
                 style="color: #b7b7b7"
              >
                28
              </li>
              <li
                style="color: #b7b7b7"
              >
                29
              </li>
              <li
               style="color: #b7b7b7"
              >
                30
              </li>
              <li
              style="background:rgb(235,238,254); border-radius: 50%;color:orange"
              
              >
                1
              </li>
              <li :class="{ ac: isac == '5' }" @click="tian('5')">2</li>
              <li :class="{ ac: isac == '6' }" @click="tian('6')">3</li>
              <li :class="{ ac: isac == '7' }" @click="tian('7')" >4</li>
            </ul>
            <div><span style="font-size:0.2rem;color:#b7b7b7; padding-left:3.4rem">今天</span></div>
            <ul class="riqi_tian1">
              <li :class="{ ac: isac == '8' }" @click="tian('8')">5</li>
              <li :class="{ ac: isac == '9' }" @click="tian('9')">6</li>
              <li :class="{ ac: isac == '10' }" @click="tian('10')">7</li>
              <li :class="{ ac: isac == '11' }" @click="tian('11')">8</li>
              <li :class="{ ac: isac == '12' }" @click="tian('12')">9</li>
              <li :class="{ ac: isac == '13' }" @click="tian('13')">10</li>
              <li :class="{ ac: isac == '14' }" @click="tian('14')">11</li>
            </ul>
          </div>
          <!-- 时段 -->
          <div class="option_time">
            <div style="color:#595959">时段</div>
            <div class="option_times">
              <span class="time_button" @click="start">开始时间<i class="img_one"></i></span>
              <span style="margin-top: 0.2rem">-</span>
              <span class="time_button" @click="start">结束时间<i class="img_one"></i></span>
            </div>

    <van-popup v-model="showi" position="bottom" :style="{ height: '40%' }" >
            <!-- 选项过滤器 -->
            <van-datetime-picker
          
              v-model="currentTime"
              type="time"
              :filter="filter"
              style="z-index: 111"
              @confirm="confirm"
              @cancel="cancel"
              item-height="35"
            />
    </van-popup>
          </div>

          <!-- 重置 -->
          <div class="reset_yes">
            <span class="chong_zhi" @click="reset">重置</span>
            <span class="que_ding" @click="queding">确定</span>
          </div>
     
     


      <!-- 选择老师条件 -->
     
    </div>
  
 

    

</template>

<script>
export default {
  data() {
    return {
      showi:false,
      show: true,
      shows: true,
      showss: false,
      showww: true,
      showa:true,
      // picker: false,
      isac: "4",
      isactiv: "m1",
      showw: "",
      value1: 0,
      value2: "a",
      option1: [{ text: "全部商品", value: 0 }],
      option2: [{ text: "默认排序", value: "a" }],
      currentTime: "00:00",
    };
  },
  methods: {
    goAppointment() {
      console.log("dfgn");
      this.$router.push("/appointment");
    },
    left() {
      window.history.back();
    },
    goSearch() {
      this.$router.push("/search");
    },
    showPopup() {
      this.shows = !this.shows;
   
    },
    showPopup1() {
      console.log(222);
      this.showss = !this.showss;
      
    },
    tian(index) {
      this.isac = index;
    },
    teach(index) {
      console.log(111);
      this.isactiv = index;
    },
    filter(type, options) {
      if (type === "minute") {
        return options.filter((option) => option % 5 === 0);
      }
      return options;
    },
    start() {
      this.showi = !this.showi;
    },
    confirm() {
      this.picker = !this.picker;
    },
    cancel() {
      this.picker = !this.picker;
    },
    reset() {
      this.shows = false;
      this.showww = false;
      console.log(111);
    },
    queding() {
      this.shows = false;
      this.showww = false;
    },
  },
};
</script>

<style scss>
#id1{
  width: 100%;
  background-color:   #f0f2f5;
}
.van-picker__cancel,.van-picker__confirm{
color: #eb6100;
} 
.van-nav-bar .van-icon{
   color: #727272;
}
*{
  font-size: 0.25rem;
}
.a{
  width: 100%;
  height: 6rem;
  background: #000;
}
.van-cell__value--alone{
  font-size: 0.3rem;
  /* color: #eb6100; */
}
.van-dropdown-menu {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0.9rem;
}
.fudao_body {
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 111;
}
.left {
  color: #727272;
  font-size: 0.5rem;
}
.right {
  color: #727272;
  font-size: 0.5rem;
}
.select {
  margin-top: 1rem;
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.3rem 0.6rem;
  color: #969696;
  font-size: 0.3rem;
}
.teachers {
  width: 100%;
  background: #f0f2f5;
}
.teacher_s {
  width: 95%;
  height: 13vh;
  background: #fff;
  border-radius: 0.15rem;
  margin: 0.2rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.5rem 0.3rem;
  z-index: 111;
}
.yu_yue {
  width: 1.2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #eb6e17;
  background: #ebeefe;
  border-radius: 0.3rem;
  font-size: 0.25rem;
  z-index: 1;
}
.tearch_img {
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.img_img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #e4e3e3;
  margin-top: -0.1rem;
}
.img_content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.van-popup {
  width: 100%;
  height: 100%;
  z-index: 111;
  background: #f0f2f5;
}
.options_riqi {
  width: 95%;
  height: 3.5rem;
  margin-left: 0.2rem;
  padding-top: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
}
.riqi_xing {
  list-style: none;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 0.35rem;
  padding-left: 0.25rem;
  padding-right: 0.2rem;
  font-size: 0.3rem;
  color: rgb(94, 92, 92);
}
.riqi_xing li {
  width: 0.5rem;
  text-align: center;
/* background-color: pink; */
  font-size: 0.2rem;
}
.riqi_tian {
 list-style: none;
  display: flex;
  justify-content: space-evenly;
  width: 104%;
  margin-left: -0.05rem;
  color: #222;
  z-index: 111;
  padding-top: 0.25rem;
  margin-top: 0.2rem;
}
.riqi_tian li {

  font-size: 0.4rem;
  text-align: center;
   width: 0.64rem;
  height: 0.64rem;
    text-align: center;
  line-height: 0.64rem;
}
.riqi_tian1 {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  width: 104%;
  margin-left: -0.05rem;
  color: #222;
  z-index: 111;
  padding-top: 0.25rem;
}
.riqi_tian1 li {
  font-size: 0.4rem;
  text-align: center;
   width: 0.64rem;
  height: 0.64rem;
    text-align: center;
  line-height: 0.64rem;
 
}
.ac {
  width: 0rem;
  height: 0rem;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background:#eb6100;
  text-align: center !important;
  line-height: 0.2rem;
  color:white;
  z-index: 1111;
}
.options_shiduan {
  width: 95%;
  height: 15vh;
  margin-left: 0.2rem;
  padding-top: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: -5rem;
}
.option_time {
  width: 95%;
  height: 13vh;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.2rem;
  border-radius: 0.1rem;
  margin-top: 0.2rem;
  background: #fff;
}
.option_times {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.2rem 0.3rem;
}

.time_button {
  display: block;
  padding-left: 0.15rem;
  width: 2.7rem;
  height: 0.6rem;
  /* text-align: center; */
  line-height: 0.6rem;
  border: 1px solid #bfbfbf;
  border-radius: 0.1rem;
  color: #222;
  font-size: 0.25rem;
color:#777676;
}
.van_tan_btn {
  background: #f5f5f5;
}
.reset_yes {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6vh;
  display: flex;
  background: #fff;
}
.chong_zhi {
  width: 50%;
  color: #eb6e17;
  text-align: center;
  line-height: 6vh;
  font-size: 0.3rem;
}
.que_ding {
  width: 50%;
  color: #fff;
  background: #eb6e17;
  text-align: center;
  line-height: 6vh;
  font-size: 0.3rem;
}
.teacher_lao {
  width: 100%;
  height: 125vh;
  /* border:1px solid red; */
  background: #fff;
}
.lao_ul {
  width: 95%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin-left: 0.15rem;
}
.lao_ul li {
  width: 1.4rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  background: #f5f5f5;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  color:#646464;
  font-size: 0.28rem;
}
.lao_ul li:hover {
  color: #eb6100;
  background: #ebeefe;
}
.zhi_kan {
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-left: 0.3rem;
  margin-top: 0.2rem;
}
.zhi_kan span {
  font-size: 0.3rem;
}
.inp {

  color: #646464;
  margin-right: 0.1rem;
}
.xing_bie {
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin-left: 0.3rem;
  margin-top: 0.2rem;
}
.xing_bie span {
  width: 1.2rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  background: #f5f5f5;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  color: #646464;
  font-size: 0.3rem;
}
.xing_bie span:hover {
  color: #eb6100;
  background: #ebeefe;
}
.nian_ji {
  width: 95%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  z-index: 111;
}
.nian_ji li {
  width: 1.4rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  background: #f5f5f5;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  color: #646464;
  font-size: 0.26rem;
}
.nian_ji li:hover {
  color: orange;
  background: #ebeefe;
}
.xue_ke {
  width: 95%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  z-index: 111;
}
.xue_ke li {
  width: 1.4rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  background: #f5f5f5;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  color:#646464;
  font-size: 0.26rem;
}
.xue_ke li:hover {
  color: orange;
  background: #ebeefe;
}
.img_one{
  width: 0.5rem;
  height: 0.5rem;
  display: block;
  margin-left: 2.1rem;
  margin-top: -0.54rem;
 background: url('http://127.0.0.1:8080/img/time.png') no-repeat;
background-size: 100% 100%;
}
/* .van-cell__value--alone:hover{
  color:#eb6100
} */
</style>