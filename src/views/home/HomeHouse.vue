<template>
  <div class="home">
    <div class="banner_top">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img src="http://localhost:8080/img/banner01.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://localhost:8080/img/banner02.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://localhost:8080/img/banner03.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://localhost:8080/img/banner04.jpg" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="center">
      <div @click="toCourse">
        <img src="http://localhost:8080/img/center1.png" alt="" />
        <p>特色课</p>
      </div>
      <div @click="toCoach">
        <img src="http://localhost:8080/img/center2.png" alt="" />
        <p>一对一辅导</p>
      </div>
      <div @click="toCalendar">
        <img src="http://localhost:8080/img/center3.png" alt="" />
        <p>学习日历</p>
      </div>
    </div>
    <div class="bottom">
      <div class="famous">
        <p class="famous_content"><span>名师阵容</span></p>
        <div class="famous_one" @click="toTeacherDetail" v-for="(item,index) in list" :key="index">
          <img :src="item.img" alt="" />
          <div class="famous_two">
            <p class="famous_name">{{item.title}}</p>
            <p class="famous_introduce">
              {{item.introduce}}
            </p>
          </div>
        </div>
      </div>
      <div class="excellent_course">
        <p class="excellent_course_content"><span>精品课程</span></p>
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
              <img src="http://localhost:8080/img/teacher03.png" alt="" />
              <span>马学斌</span>
            </p>
          </div>
          <div class="excellent_course_bottom">
            <p>100人已报名</p>
            <p class="free">
              <font
                ><img src="http://localhost:8080/img/money.png" alt="" /><span
                  >1.00</span
                ></font
              >
            </p>
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
              <img src="http://localhost:8080/img/teacher03.png" alt="" />
              <span>马学斌</span>
            </p>
          </div>
          <div class="excellent_course_bottom">
            <p>100人已报名</p>
            <p class="free">
              <font
                ><img src="http://localhost:8080/img/money.png" alt="" /><span
                  >1.00</span
                ></font
              >
            </p>
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
              <img src="http://localhost:8080/img/teacher03.png" alt="" />
              <span>马学斌</span>
            </p>
          </div>
          <div class="excellent_course_bottom">
            <p>100人已报名</p>
            <p class="free">
              <font
                ><img src="http://localhost:8080/img/money.png" alt="" /><span
                  >1.00</span
                ></font
              >
            </p>
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
              <img src="http://localhost:8080/img/teacher03.png" alt="" />
              <span>马学斌</span>
            </p>
          </div>
          <div class="excellent_course_bottom">
            <p>100人已报名</p>
            <p class="free">
              <font
                ><img src="http://localhost:8080/img/money.png" alt="" /><span
                  >1.00</span
                ></font
              >
            </p>
          </div>
        </div>
      </div>
      <!-- 推荐课程 -->
      <div class="excellent_course_two">
        <p class="excellent_course_two_content"><span>推荐课程</span></p>
        <div class="excellent_course_two_introduce" @click="toClass_item">
          <div class="excellent_course_two_top">
            <p class="excellent_course_two_issue">
              每时每课初中数学——初一拓展-分式(一)
            </p>
            <p class="excellent_course_two_keshi">共1课时</p>
            <p class="excellent_course_two_tuwen">
              <img src="http://localhost:8080/img/teacher05.jpeg" alt="" />
              <span>廖天金</span>
            </p>
          </div>
          <div class="excellent_course_two_bottom">
            <p>100人已报名</p>
            <p class="free">免费</p>
          </div>
        </div>
      </div>
      <div class="excellent_course_two">
        <div class="excellent_course_two_introduce" @click="toClass_item">
          <div class="excellent_course_two_top">
            <p class="excellent_course_two_issue">每时每课-初二物理-摩擦力</p>
            <p class="excellent_course_two_keshi">共1课时</p>
            <p class="excellent_course_two_tuwen">
              <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
              <span>白静</span>
            </p>
          </div>
          <div class="excellent_course_two_bottom">
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
              <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
              <span>白静</span>
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
              <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
              <span>白静</span>
            </p>
          </div>
          <div class="excellent_course_bottom">
            <p>100人已报名</p>
            <p class="free">免费</p>
          </div>
        </div>
      </div>
      <div class="excellent_course_two">
        <div class="excellent_course_two_introduce" @click="toClass_item">
          <div class="excellent_course_two_top">
            <p class="excellent_course_two_issue">每时每课-初二物理-摩擦力</p>
            <p class="excellent_course_two_keshi">共1课时</p>
            <p class="excellent_course_two_tuwen">
              <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
              <span>白静</span>
            </p>
          </div>
          <div class="excellent_course_two_bottom">
            <p>100人已报名</p>
            <p class="free">免费</p>
          </div>
        </div>
      </div>

      <!-- 明星讲师 -->
      <div class="star_lecturer">
        <p class="star_lecturer_content"><span>明星讲师</span></p>
        <div class="famous_one" @click="toTeacherDetail">
          <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
          <div class="famous_two">
            <p class="famous_name">杨老师 <span>M10</span></p>
            <p class="famous_introduce">
              杨老师，特级教师，多次被中国教学会评为全国高级教师
            </p>
          </div>
        </div>
      </div>
      <div class="star_lecturer">
        <div class="famous_one" @click="toTeacherDetail">
          <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
          <div class="famous_two">
            <p class="famous_name">白静 <span>M8</span></p>
            <p class="famous_introduce">
              杨老师，特级教师，多次被中国教学会评为全国高级教师
            </p>
          </div>
        </div>
      </div>
       <div class="star_lecturer">
        <div class="famous_one" @click="toTeacherDetail">
          <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
          <div class="famous_two">
            <p class="famous_name">盛老师 <span>M11</span></p>
            <p class="famous_introduce">
              杨老师，特级教师，多次被中国教学会评为全国高级教师
            </p>
          </div>
        </div>
      </div>
       <div class="star_lecturer">
        <div class="famous_one" @click="toTeacherDetail">
          <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
          <div class="famous_two">
            <p class="famous_name">Grace <span>M20</span></p>
            <p class="famous_introduce">
              杨老师，特级教师，多次被中国教学会评为全国高级教师
            </p>
          </div>
        </div>
      </div>
       <div class="star_lecturer">
        <div class="famous_one" @click="toTeacherDetail">
          <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
          <div class="famous_two">
            <p class="famous_name">Willa <span>M1</span></p>
            <p class="famous_introduce">
              杨老师，特级教师，多次被中国教学会评为全国高级教师
            </p>
          </div>
        </div>
      </div>
       <div class="star_lecturer">
        <div class="famous_one" @click="toTeacherDetail">
          <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
          <div class="famous_two">
            <p class="famous_name">璐璐 <span>M20</span></p>
            <p class="famous_introduce">
              杨老师，特级教师，多次被中国教学会评为全国高级教师
            </p>
          </div>
        </div>
      </div>
       <div class="star_lecturer">
        <div class="famous_one" @click="toTeacherDetail">
          <img src="http://localhost:8080/img/teacher04.jpg" alt="" />
          <div class="famous_two">
            <p class="famous_name">杨花花 <span>M1</span></p>
            <p class="famous_introduce">
              杨老师，特级教师，多次被中国教学会评为全国高级教师
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="dibu"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[],
      listtwo:[],
    }
  },

  methods:{
    toCoach(){
          this.$router.push({path:"/Coach"})
      },
      toTeacherDetail(){
          this.$router.push({path:"/TeacherDetails"})
      },
      toCourse(){
        this.$router.push({path:"/MessageNotificatio"})
      },
      toCalendar(){
        this.$router.push({path:"/Calendar"})
      },
      toCourse(){
        this.$router.push({path:"/Course"})
      },
      toClass_item(){
        this.$router.push({path:"/CourseDetails"})
      }
  },
  mounted(){
    this.$axios.get("teacher.json").then((res)=>{
      console.log(res);
      this.list=res.data.data
    }),
    this.$axios.get("teacher1.json").then((res)=>{
      console.log(res);
      this.listtwo=res.data.data
    })
  }
};
</script>

<style lang="scss" scoped>
.home {
  background: #f0f2f5;
}
.banner_top {
  img {
    width: 100%;
    height: 4rem;
  }
}
.center {
  width: 100%;
  // height: 1.7rem;
  // background: pink;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  div {
    width: 2.06rem;
    height: 2.06rem;
    background: white;
    border-radius: 10px;
    margin-top: -0.8rem;
    z-index: 999;
    img {
      width: 0.42rem;
      height: 0.4rem;
      margin-top: 0.5rem;
    }
    p {
      color: #8c8c8c;
    }
  }
}
.bottom {
  .famous {
    width: 100%;
    height: 6.4rem;
    // background: pink;
    .famous_content {
      width: 90%;
      height: 0.6rem;
      margin: 0 auto;
      color: #595959;
      span {
        display: inline-block;
        border-left: 2px solid #eb6100;
        font-size: 0.32rem;
        padding-left: 10px;
        //  line-height: 0.6rem;
      }
    }
    .famous_one {
      width: 7.1rem;
      height: 1.62rem;
      border-radius: 5px;
      background: white;
      margin: 0 auto;
      margin-top: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 100%;
      }
      .famous_two {
        width: 80%;
        display: flex;
        flex-direction: column;

        .famous_name {
          font-size: 0.3rem;
        }
        .famous_introduce {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          margin-top: -7px;
          color: #ccc;
        }
      }
    }
  }
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
      // margin-top: -8px;
      // padding: 0rem 0.28rem;
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

  .excellent_course_two {
    .excellent_course_two_content {
      width: 90%;
      height: 0.6rem;
      margin: 0 auto;
      color: #595959;
      line-height: 0.6rem;
      margin-top: 0.3rem;
      span {
        display: inline-block;
        border-left: 2px solid #eb6100;
        font-size: 0.32rem;
        padding-left: 10px;
      }
    }
    .excellent_course_two_introduce {
      width: 6.9rem;
      height: 3.66rem;
      background: white;
      margin: 0 auto;
      border-radius: 5px;
      // margin-top: -8px;
      // padding: 0rem 0.28rem;
      .excellent_course_two_top {
        width: 100%;
        // height: 75%;
        border-bottom: 1px solid #f6f6f6;
        .excellent_course_two_issue {
          font-size: 4.26667vw;
          box-sizing: border-box;
          padding-top: 0.4rem;
          padding-left: 0.28rem;
          padding-right: 0.28rem;
          padding-bottom: 0rem;
          // letter-spacing:2px;
          line-height: 181%;
        }
        .excellent_course_two_keshi {
          color: rgb(170, 169, 169);
          box-sizing: border-box;
          padding: 0px 10px;
          margin-top: -9px;
        }
        .excellent_course_two_tuwen {
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
      .excellent_course_two_bottom {
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

  .star_lecturer {
    .star_lecturer_content {
      width: 90%;
      height: 0.6rem;
      margin: 0 auto;
      color: #595959;
      line-height: 0.6rem;
      margin-top: 0.3rem;
      span {
        display: inline-block;
        border-left: 2px solid #eb6100;
        font-size: 0.32rem;
        padding-left: 10px;
      }
    }
    .famous_one {
      width: 7.1rem;
      height: 1.61rem;
      border-radius: 5px;
      background: white;
      margin: 0 auto;
      margin-top: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        width: 0.79rem;
        height: 0.79rem;
        border-radius: 100%;
      }
      .famous_two {
        width: 80%;
        display: flex;
        flex-direction: column;

        .famous_name {
          font-size: 0.3rem;
          span{
            display: inline-block;
            margin-left: 2px;
            color: #ea7a2f;
            font-size: 2.93333vw;
          }
        }
        .famous_introduce {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          margin-top: -7px;
          color: #B7B7B7;
        }
      }
    }
  }
}

.dibu {
  height: 60px;
}
</style>