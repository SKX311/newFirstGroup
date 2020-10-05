<template>
  <div id="detaile">
    <div class="top">
      <header>
        <p @click="back"><van-icon name="arrow-left" /></p>
        <p class="onetoone">讲师详情</p>
      </header>
      <div class="famous_one">
        <p class="famous_one_tu">
          <img src="http://localhost:8080/img/teacher01.png" alt="" />
        </p>
        <div class="famous_two">
          <p class="famous_name">杨德胜 <span>M20</span></p>
          <p class="famous_introduce">男 30年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="Toast" v-show="Show">关注</button>
          <p v-show="isShow" @click="clear">已关注</p>
        </div>
      </div>
    </div>
    <div class="gray"></div>
    <van-tabs
      v-model="active"
      color="#EB6100"
      line-width="20px"
      title-active-color="#EB6100"
      title-inactive-color="#7D7E80"
      title-style="fontSize:40px"
    >
      <van-tab title="讲师介绍">
        <div class="jieshao">
          <ul class="introduce">
            <li>
              <span>教学年龄</span>
              <font>30年</font>
            </li>
            <li>
              <span>授课价格</span>
              <font>400学习币</font>
            </li>
            <li class="teacher_introduction">
              <span>老师简介</span>
              <font
                >　<b>王</b>杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
                　　特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。
              </font>
            </li>
          </ul>
        </div>
        <div class="gray"></div>
      </van-tab>
      <van-tab title="主讲课程">
        <div class="kecheng">
          <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
              <div class="excellent_course_top">
                <p class="excellent_course_issue">
                  每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题
                </p>
                <p class="excellent_course_keshi">共1课时</p>
                <p class="excellent_course_tuwen">
                  <img src="http://localhost:8080/img/teacher01.png" alt="" />
                  <span>杨德胜</span>
                </p>
              </div>
              <div class="excellent_course_bottom">
                <p>100人已报名</p>
                <p class="free">免费</p>
              </div>
            </div>
          </div>
          <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
              <div class="excellent_course_top">
                <p class="excellent_course_issue">
                  每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题
                </p>
                <p class="excellent_course_keshi">共1课时</p>
                <p class="excellent_course_tuwen">
                  <img src="http://localhost:8080/img/teacher01.png" alt="" />
                  <span>杨德胜</span>
                </p>
              </div>
              <div class="excellent_course_bottom">
                <p>100人已报名</p>
                <p class="free">免费</p>
              </div>
            </div>
          </div>
          <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
              <div class="excellent_course_top">
                <p class="excellent_course_issue">
                  每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题
                </p>
                <p class="excellent_course_keshi">共1课时</p>
                <p class="excellent_course_tuwen">
                  <img src="http://localhost:8080/img/teacher01.png" alt="" />
                  <span>杨德胜</span>
                </p>
              </div>
              <div class="excellent_course_bottom">
                <p>100人已报名</p>
                <p class="free">免费</p>
              </div>
            </div>
          </div>
          <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
              <div class="excellent_course_top">
                <p class="excellent_course_issue">
                  每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题
                </p>
                <p class="excellent_course_keshi">共1课时</p>
                <p class="excellent_course_tuwen">
                  <img src="http://localhost:8080/img/teacher01.png" alt="" />
                  <span>杨德胜</span>
                </p>
              </div>
              <div class="excellent_course_bottom">
                <p>100人已报名</p>
                <p class="free">免费</p>
              </div>
            </div>
          </div>
          <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
              <div class="excellent_course_top">
                <p class="excellent_course_issue">
                  每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题
                </p>
                <p class="excellent_course_keshi">共1课时</p>
                <p class="excellent_course_tuwen">
                  <img src="http://localhost:8080/img/teacher01.png" alt="" />
                  <span>杨德胜</span>
                </p>
              </div>
              <div class="excellent_course_bottom">
                <p>100人已报名</p>
                <p class="free">免费</p>
              </div>
            </div>
          </div>
          <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
              <div class="excellent_course_top">
                <p class="excellent_course_issue">
                  每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题
                </p>
                <p class="excellent_course_keshi">共1课时</p>
                <p class="excellent_course_tuwen">
                  <img src="http://localhost:8080/img/teacher01.png" alt="" />
                  <span>杨德胜</span>
                </p>
              </div>
              <div class="excellent_course_bottom">
                <p>100人已报名</p>
                <p class="free">免费</p>
              </div>
            </div>
          </div>
          <div class="excellent_course">
            <div class="excellent_course_introduce" @click="toClass_item">
              <div class="excellent_course_top">
                <p class="excellent_course_issue">
                  每时每课特级教师-自主招生冲刺讲座6-多元方程与可转化为多远方程组问题
                </p>
                <p class="excellent_course_keshi">共1课时</p>
                <p class="excellent_course_tuwen">
                  <img src="http://localhost:8080/img/teacher01.png" alt="" />
                  <span>杨德胜</span>
                </p>
              </div>
              <div class="excellent_course_bottom">
                <p>100人已报名</p>
                <p class="free">免费</p>
              </div>
            </div>
          </div>

          <div class="dibu"></div>
        </div>
      </van-tab>
      <van-tab title="学员评价">
        <div class="evaluate">
          <img src="http://localhost:8080/img/pinglun.png" alt="" />
          <p></p>
        </div>
      </van-tab>
    </van-tabs>
    
    <van-button color="#EB6100" @click="make">立即预约</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["讲师介绍", "主讲课程", "学员评价"],
      Show: true,
      isShow: false,
    };
  },
  methods: {
    tabId() {
      console.log(index);
    },

      back(){
          this.$router.go(-1)
      },
      Toast() {
      this.$toast.success("已关注");
      this.Show = false;
      this.isShow = true;
    },
    clear() {
      this.$toast.success("已取消");
      this.Show = true;
      this.isShow = false;
    },
    make(){
      this.$router.push({path:"/class_item"})
    }
  
  },
};
</script>

<style lang="scss" scoped>
#detaile {
  background: #f0f2f5;
}
.top {
  width: 100%;
  height: 2rem;
  background-image: linear-gradient(#62b4fd, #5288e8);
  box-sizing: border-box;
  padding: 0px 12px;
  header {
    width: 100%;
    height: 0.87rem;
    display: flex;
    align-items: center;

    .van-icon {
      font-size: 0.45rem;
      color: white;
    }
    .onetoone {
      width: 6.3rem;
      height: 0.86rem;
      font-size: 4.8vw;
      color: white;
      text-align: center;
      line-height: 0.86rem;
    }
  }
}
.famous_one {
  //   width: 7.1rem;
  height: 1.81rem;
  border-radius: 5px;
  background: white;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .famous_one_tu {
    box-sizing: border-box;
    width: 0.8rem;
    height: 0.8rem;
    padding-left: 0.3rem;
    img {
      width: 0.79rem;
      height: 0.79rem;
      border-radius: 100%;
    }
  }

  .famous_two {
    width: 4.06rem;
    height: 0.99rem;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    padding-left: 0.25rem;

    .famous_name {
      font-size: 0.3rem;
      color: #595959;
      span {
        display: inline-block;
        margin-left: 2px;
        color: #ea7a2f;
        font-size: 2.93333vw;
      }
    }
    .famous_introduce {
      //   display: -webkit-box;
      //   -webkit-box-orient: vertical;
      //   -webkit-line-clamp: 1;
      //   overflow: hidden;
      margin-top: -7px;
      color: #ccc;
    }
  }
}
.famous_three {
  padding-right: 0.3rem;
  button {
    width: 1.399rem;
    height: 0.61rem;
    background: #ebeefe;
    border: 1px solid #ebeefe;
    color: #eb6100;
    border-radius: 20px;
    font-weight: 400;
    font-size: 3.73333vw;
  }
}

.jieshao {
  width: 100%;
  height: 7.7rem;
  background: white;
  .introduce {
    width: 6.9rem;
    height: 7.7rem;
    color: #8c8c8c;
    background: white;
    margin: 0 auto;
    li {
      width: 6.9rem;
      height: 0.787rem;
      // margin-top: ;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        margin-left: 1.33333vw;
        margin-right: 5.33333vw;
        font-size: 0.26rem;
      }
      font {
        width: 5.36rem;
        font-size: 0.26rem;
        flex: 1;
        line-height: 8vw;
      }
    }
    .teacher_introduction {
      width: 6.9rem;
      height: 6.1rem;
      span {
        display: inline-block;
        width: 1.0397rem;
        height: 6.1rem;
        box-sizing: border-box;
        padding-top: 0.15rem;
      }
      font {
        b {
          color: white;
        }
      }
    }
  }
}
.kecheng {
  width: 100%;
  background: white;
  margin-top:-0.29rem;
  .excellent_course {
      
    .excellent_course_content {
      width: 90%;
      height: 0.4rem;
      margin: 0 auto;
      color: #595959;
      span {
        display: inline-block;
        border-left: 2px solid #eb6100;
        font-size: 0.32rem;
        padding-left: 10px;
      }
    }
    .excellent_course_introduce {
      width: 6.9rem;
      height: 4.22rem;
      background: white;
      margin: 0 auto;
      border-radius: 5px;
      box-shadow: 0 0.4vw 0.93333vw 0 hsla(0,0%,81.2%,.35);;
      .excellent_course_top {
        width: 100%;
        // height: 75%;
        border-bottom: 1px solid #f6f6f6;
        .excellent_course_issue {
          font-size: 4.26667vw;
          box-sizing: border-box;
          padding-top: 0.4rem;
          padding-left: 0.28rem;
          padding-right: 0.28rem;
          padding-bottom: 0rem;
          // letter-spacing:2px;
          line-height: 181%;
        }
        .excellent_course_keshi {
          color: rgb(170, 169, 169);
          box-sizing: border-box;
          padding: 0px 10px;
          margin-top: -9px;
        }
        .excellent_course_tuwen {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          // padding: 10px 10px;
          padding-top: 11px;
          padding-left: 10px;
          padding-right: 10px;
          padding-bottom: 5px;
          img {
            width: 0.54rem;
            height: 0.54rem;
            border-radius: 100%;
          }
          span {
            display: inline-block;
            margin-left: 8px;
            color: #8c8c8c;
          }
        }
      }
      .excellent_course_bottom {
        display: flex;
        // align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 10px;
        p {
          font-size: 0.27rem;
          color: #8c8c8c;
        }
        .free {
          color: #44a426;
          font-size: 4.26667vw;
          img {
            width: 0.24rem;
            height: 0.25rem;
          }
          font {
            color: #ee1f1f;

            span {
              display: inline-block;
              margin-left: 4px;
              font-size: 4.26667vw;
            }
          }
        }
      }
    }
  }
}
.evaluate {
  img {
    width: 100%;
  }
  p {
    height: 4rem;
  }
}
.gray {
  height: 0.9rem;
}
.dibu{
    width: 100%;
    height: 1.5rem;
}

.van-button {
  width: 100%;
  height: 0.9rem;
  font-size: 0.33rem;
  position: fixed;
  bottom: 0px;
}
.van-button__text {
  font-size: 0.33rem;
}

.van-toast {
  width: 1.5rem !important;
  height: 1.5rem !important;
}

</style>