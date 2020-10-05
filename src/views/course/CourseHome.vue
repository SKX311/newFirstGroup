<template>
  <div>
    <van-nav-bar @click-right="onClickRight">
      <template #title>
        <div style="font-size:18px;">特色课</div>
      </template>
      <template #right>
        <van-icon name="search" @click="search" size="24px" color="#626262" />
      </template>
    </van-nav-bar>
    <div class="screen">
      <van-dropdown-menu active-color="#F18D47">
        <van-dropdown-item>
          <template #title>
            <div style="font-size:15px">分类</div>
          </template>
          <div class="classIfication">
            <div class="classIfication-One">
              <p style="margin-left:0.4rem">年级</p>
              <div class="classIfication-One-Active">
                <div>初一</div>
                <div>初二</div>
                <div>初三</div>
                <div>高一</div>
                <div>高二</div>
              </div>
            </div>
            <div class="classIfication-Two">
              <p style="margin-left:0.4rem">学科</p>
              <div class="classIfication-Two-Active">
                <div>语文</div>
                <div>数学</div>
                <div>英语</div>
                <div>物理</div>
                <div>化学</div>
              </div>
            </div>
            <div class="classIfication-Three">
              <button class="Reset">重置</button>
              <button class="determine">确定</button>
            </div>
          </div>
        </van-dropdown-item>
        <van-dropdown-item v-model="value" ref="item">
          <template #title ref="item">
            <div style="font-size:15px">{{name.title}}</div>
          </template>
          <div class="center">
            <!-- <div>综合排序</div>
            <div>最新</div>
            <div>最热</div>
            <div>价格从低到高</div>
            <div>价格从高到底</div>-->
            <!-- <div v-for="(item,index) in data" :key="index" @click="dianji(index)">
              {{item.title}}
            </div>-->
            <van-cell
              @click="dianji(item,index)"
              title-style="text-align:center;height:0.6rem;line-height: 0.6rem;;"
              v-for="(item,index) in data"
              :key="index"
              :title="item.title"
            />
          </div>
        </van-dropdown-item>
        <van-dropdown-item active-color="orange">
          <template #title>
            <div style="font-size:15px">筛选</div>
          </template>
          <div class="screening">
            <div class="div">全部</div>
            <div class="div">大班课</div>
            <div class="div">小班课</div>
            <div class="div">公开课</div>
            <div class="div">点播课</div>
            <div class="div">面授课</div>
            <div class="div">音频课</div>
            <div class="div">系统课</div>
            <div class="div">图文课</div>
            <div class="div">会员课</div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="section">
      <div
        class="section-son"
        v-for="(item,index) in list"
        :key="index"
        @click="CourseDetails(item)"
      >
        <p class="section-son-title">{{item.title}}</p>
        <p class="section-son-time">共8课时</p>
        <div class="section-son-one">
          <img class="section-son-img" :src="item.img" />
          <span class="section-son-name">{{item.name}}</span>
        </div>
        <div class="section-son-two">
          <span class="section-son-two-PersonTimes">{{item.signup}}</span>
          <span class="section-son-two-button">{{item.status}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      list: [],
      value: 0,
      isActive: 1,
      name: {
        title: "排序",
      },
      data: [
        { title: "综合排序", value: 1 },
        { title: "最新", value: 2 },
        { title: "最热", value: 3 },
        { title: "价格从低到高", value: 4 },
        { title: "价格从高到低", value: 5 },
      ],
    };
  },
  created() {
    this.$axios.get("list.json").then((res) => {
      this.list = res.data.data;
    });
  },
  methods: {
    search() {
      this.$router.push({
        path: "/Search",
      });
    },
    onClickRight() {},
    dianji(item, index) {
      this.value = index;
      this.isActive = this.value;
      this.$refs.item.toggle();
      this.name.title = item.title;
    },
    sort() {
      this.list.map((item) => {
        if (this.value == 2) {
          this.list.sort((a, b) => {
            return a.age - b.age;
          });
        } else if (this.value == 3) {
          this.list.sort((a, b) => {
            return b.age - a.age;
          });
        } else if (this.value == 1) {
          this.list.sort((a, b) => {
            return b.xx - a.xx;
          });
        } else if (this.value == 0) {
          this.list.sort((a, b) => {
            return a.xx - b.xx;
          });
        }
      });
    },
    onClickRight() {},
    onConfirm() {
      this.$refs.item.toggle();
    },
    determine() {
      this.show = false;
    },
    CourseDetails(item) {
      this.$router.push({
        path: "/CourseDetails",
        query: {
          user: JSON.stringify(item),
        },
      });
    },
  },
};
</script>

<style scoped>
.div {
  height: 200px;
  width: 200px;
  text-align: center;
  line-height: 200px;
}
.classIfication {
  width: 7.43rem;

  display: flex;
  flex-wrap: wrap;
}
.classIfication-One {
  width: 7.43rem;
}
.classIfication-Two {
  width: 7.43rem;
}
.classIfication-Two-Active {
  display: flex;
  flex-wrap: wrap;
  margin-top: -0.3rem;
}
.classIfication-Two-Active div {
  height: 0.8rem;
  width: 1.5rem;
  line-height: 0.8rem;
  text-align: center;
  background-color: #f5f5f5;
  margin-left: 0.3rem;
  margin-top: 0.3rem;
  border-radius: 0.1rem;
}
.classIfication-One-Active {
  display: flex;
  flex-wrap: wrap;
  margin-top: -0.3rem;
}
.classIfication-One-Active div {
  height: 0.7rem;
  width: 1.5rem;
  line-height: 0.7rem;
  text-align: center;
  background-color: #f5f5f5;
  margin-left: 0.3rem;
  margin-top: 0.3rem;
  border-radius: 0.1rem;
}
.classIfication-Three {
  height: 1.7rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.Reset {
  height: 0.7rem;
  width: 3.5rem;
  line-height: 0.7rem;
  text-align: center;
  border: 1px solid #e4e4e4;
  border-radius: 0.2rem;
}
.determine {
  height: 0.7rem;
  width: 3.5rem;
  line-height: 0.7rem;
  text-align: center;
  background-color: #eb6100;
  color: #fff;
  border-radius: 0.2rem;
  border: none;
}
.section {
  width: 99%;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.section-son {
  height: 3.6rem;
  width: 93%;
  background-color: #fff;
  margin-top: 0.3rem;
  border-radius: 0.1rem;
}
.section-son-title {
  font-size: 16px;
  margin-left: 0.3rem;
}
.section-son-img {
  height: 0.55rem;
  width: 0.55rem;
  float: left;
  margin-left: 0.3rem;
}
.section-son-name {
  float: left;
  margin-left: 0.2rem;
  color: #8c8c8c;
  margin-top: 0.15rem;
}
.section-son-time {
  margin-left: 0.3rem;
  margin-top: -0.2rem;
  color: #666666;
}
.section-son-one {
  margin-top: 0.5rem;
}
.section-son-two {
  height: 1rem;
  border-top: 1px solid#F9F9F9;
  width: 99%;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.section-son-two-button {
  color: #95cc84;
  font-size: 18px;
}
.section-son-two-PersonTimes {
  color: #acacac;
  margin-left: 0.3rem;
}
.sort {
  width: 99%;
}
.sort div {
  height: 1rem;
  width: 99%;
  border: 1px solid #f6f6f6;
  text-align: center;
  line-height: 1rem;
}
.sort div:hover {
  color: red;
}
.screening {
  width: 99%;
  display: flex;
  flex-wrap: wrap;
  height: 3.5rem;
}
.screening div {
  height: 0.8rem;
  width: 1.5rem;
  background-color: #f5f5f5;
  line-height: 0.8rem;
  text-align: center;
  margin-top: 0.1rem;
  margin-left: 0.3rem;
  border-radius: 0.1rem;
}
.screening div:hover {
  background-color: #ebeefe;
  color: #eb7423;
}

.center {
  width: 100%;
}

.active {
  color: red;
}
</style>