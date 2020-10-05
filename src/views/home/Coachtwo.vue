<template>
  <div>
      
            <!-- 选择老师条件 内容 -->
            <div class="teacher_lao">
              <!-- 老师类型 -->
              <div
                style="
                  padding-top: 0.4rem;
                  padding-left: 0.3rem;
                  color: #595959;
                "
              >
                老师类型
              </div>
              <ul class="lao_ul">
                <li :class="{ activ: isactiv == 'm1' }" @click="teach('m1')">
                  M1
                </li>
                <li>M2</li>
                <li>M3</li>
                <li>M4</li>
              </ul>
              <ul class="lao_ul">
                <li>M5</li>
                <li>M6</li>
                <li>M7</li>
                <li>M8</li>
              </ul>
              <ul class="lao_ul">
                <li>M9</li>
                <li>M10</li>
                <li>M11</li>
                <li>M12</li>
              </ul>
              <ul class="lao_ul">
                <li>M13</li>
                <li>M14</li>
                <li>M15</li>
                <li>M16</li>
              </ul>
              <ul class="lao_ul">
                <li>M17</li>
                <li>M18</li>
                <li>M19</li>
                <li>M20</li>
              </ul>
              <!-- 只看 -->
              <div
                style="
                  border-top: 1px solid rgb(221, 220, 220);
                  margin-top: 0.3rem;
                  padding-top: 0.4rem;
                  padding-left: 0.3rem;
                "
              >
                只看
              </div>
              <div class="zhi_kan">
                <span> <input type="checkbox" class="inp" />已关注 </span>
                <span> <input type="checkbox" class="inp" />上过课 </span>
              </div>
              <!-- 性别 -->
              <div
                style="
                  border-top: 1px solid rgb(221, 220, 220);
                  margin-top: 0.3rem;
                  padding-top: 0.4rem;
                  padding-left: 0.3rem;
                "
              >
                性别
              </div>
              <div class="xing_bie">
                <span>男</span>
                <span>女</span>
              </div>
              <!-- 年级 -->
              <div
                style="
                  border-top: 1px solid rgb(221, 220, 220);
                  margin-top: 0.3rem;
                  padding-top: 0.4rem;
                  padding-left: 0.3rem;
                "
              >
                年级
              </div>
              <ul class="nian_ji">
                <li>小学一年级</li>
                <li>小学二年级</li>
                <li>小学三年级</li>
                <li>小学四年级</li>
              </ul>
              <ul class="nian_ji">
                <li>小学五年级</li>
                <li>小学六年级</li>
                <li>初一</li>
                <li>初二</li>
              </ul>
              <ul class="nian_ji">
                <li>初三</li>
                <li>高一</li>
                <li>高二</li>
                <li>高三</li>
              </ul>
              <!-- 学科 -->
              <div
                style="
                  border-top: 1px solid rgb(221, 220, 220);
                  margin-top: 0.3rem;
                  padding-top: 0.4rem;
                  padding-left: 0.3rem;
                  
                "
              >
                学科
              </div>
              <ul class="xue_ke">
                <li>语文</li>
                <li>数学</li>
                <li>英语</li>
                <li>物理</li>
              </ul>
              <ul class="xue_ke">
                <li>化学</li>
                <li>生物</li>
                <li>信息技术</li>
                <li style="background: #fff"></li>
              </ul>
              <!-- 重置 -->
              <div class="reset_yes">
                <span class="chong_zhi" @click="reset">重置</span>
                <span class="que_ding" @click="queding">确定</span>
              </div>
            </div>
         
        </div>
 
</template>

<script>
export default {

}
</script>

<style scss>
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
</style>