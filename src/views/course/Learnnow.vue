<template>
  <div>
    <van-nav-bar>
      <template #title>
        <div class="title">李老师16号到22号地理大课...</div>
      </template>
      <template #left>
        <van-icon @click="xx" color="#5A5A5A" size="20px" name="arrow-left" />
      </template>
      <template #right>
        <div class="iconfont icon-rili"></div>
      </template>
    </van-nav-bar>
    <div class="keshi">
      <div style="color:#595959;">共8课时</div>
      <div class="speedofprogress"></div>
      <div style="color:#595959;">已学习0%</div>
    </div>
    <div class="conter">
      <div class="conter-border" v-for="index in 8" :key="index">
        <div class="conter-top">
          <div class="origin"></div>
          <div class="playback">[回放]</div>
          <div class="classhour">第一讲第一课时</div>
        </div>
        <div class="conter-middle">
          <div class="name">李青</div>
          <div class="time">03月20日&nbsp;&nbsp;&nbsp;18:30-19:30</div>
        </div>
        <div class="conter-bottom">
          <div class="conter-bottom-speedofprogress"></div>
          <div style="color:#8C8C8C;">已观看0%</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>
        <img
          class="footer-img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAE30lEQVRYR7WYXYwTVRTH/+e22x2g0yVoVh9IRGNCiIkPCEGjxkQe/ODFlzUQMDyoaNiklum0sismoyjJMjOdZj8wRCNqDApVNCEGkn3QIMFoEBXF+KIh6wcmfC2702W77dxjLtndlNpu26Xc13s+fnPuOeeeO4SbtCzLiui6voKZtwN4EEBARMeFEN6VK1dOW5ZVquaabgaPZVmarutJZk4AuHXGBxExM/8thOgfGxvzqkHdFCDXdV9n5m0AojU+OE9EO5LJZLZyv+VAjuNsAPA+gLa5os/M50Oh0FrDMH4ul2sZUH9/f7vv+zFN03wppcobY44IKYYiEW1LJpNDLQeyLCus6/oeAAsKhUJC07QJKeUOZjaISKsRKQngVdM0d7UUyPO8xVLKAWbeNG34YKlU2jI5OXlV13WbmV8A0F4JxcyTALamUql9LQMaHBy8pVAoZKWUTxNRpMzwESnlSx0dHWfHx8dVcvcAWFwB9X0kEnkqHo//1RIg27YXAfiIiB4DUA6j7AcAjkopn9M07XKhUFBH9woApaPWBSHEOsMwvmtJlQ0NDd0+MTGxj4gen6uSiGi4vb19Q2dn5+jIyIilckoI8U8oFNqUSCS+bUlj7OvrWxoKhfYw8xNEFK7XWInoaynl1nw+/2s0Gt0opfwjlUqdUE3yhoGy2extpVLpEwD3A6gLoxwysySiY+FweHMikfhzGqIqjNpruA9lMpm7pJT7AaypF5WKfeX8jBBivWEYZ+rpNgTU19e3XAixl4geAhCqZ7R8n5lPEdGLpmmeVAGrp1sXKJPJ3C2lPATgHgCinsHrSpjoZBAE69Pp9O+N6s0FRK7r3qtKm5lXNGpwWk514RPhcHhjIpEYaUa3JpDjOKsBvAVgZTO5Nu18GEDcNM3fmoGpmdTZbHZNEAT7mfnOecAcllJuSafT/zYLUxXIcZz7AHwK4I4mDarufHhqampLb2/v+SZ1Z8X/d2Se560MgmAQwAONGp2eBD8mopeTyeRMr2lU/Tq564Bs296Uz+f3x2KxZcx8gJlXNWBVlfLeYrHY29PTc7kB+TlFZoEymcwqKeUxAKbv++8sXLhwiRDic2ZeTURVy52ZS0T0biQSScXj8bEbhSnPIVXibzPzswAuAnB833disdgKKaUHYG0VZwpG3Wk7TdO80AqYWSDP85YFQXAUwPJpw2oI3xuNRrfn8/lOKeUHAB4tc6rGz51Sykwqlcq3CmYWyHGcZwCoRI7NGGfmKeVUCOHGYrEFo6OjOQCPAFDvKVcI8YZhGFdbCXMNSD3ootHoAIDnq/QcH8AeXddf831/KTO/SUSnNU3zuru71V7LF2UymSXM/AUzq5Gi2ioQ0QE10xSLRe3cuXP+wMBAoVLQtu11RKSeQE3dd2V21JhykBzHUQ3wJwAdFU5UOZeYeUwI8UsQBIl0Ov1jrZC4rqtGC/V0rnth17BxbUwh27bVgH6gQmiciL4BMMzMX/q+/4NlWerCrLl27979ZDgcflhKOe8IMfNxFaH3AGwGoEJ2ipk/UyCRSOTspUuXLtYDKSfs6uoKdXV1zSuvcrkccrlcoIByau5ta2s7VPkkqZIni4ho9ufBvDzPoVQsFseaOm/XdXcxc6rZqbFBcJVDXzUL1M3M6o9FQwN+gyAzYiplPvwPh2MJ5xnUb/8AAAAASUVORK5CYII="
          alt
        />
        <span>写评论</span>
      </div>
      <div @click="kecheng">
        <img
          class="footer-img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAACi0lEQVRYR+1Yv4sTURD+Ztc1WbN7igimEsFC8aorhPSCxXGFIIk/GuUUm5w27xASVLaxSG436J6oEfUfSKeFfSoRbSzEKld6FuYsRJOV3ZEniZx4Sd7eu4ND3G553zf7zbw3M2+WgiA4CeAxMx8GYGD08x3Ac9u2r5TL5a9DmO/7x4noFDNnx3BVlhIArygIgpWBGBUSiEgIIRoSHIZhJoqiRwAuKZEng76Q7/tSGU3G/kYsLy4uXpdvnuftcV33GTOfTcEfC5WCOI0xIrovhLgmOY1Gw2bmJwDOM3Map0Z98oeWIM/zDMdxThPRGWbelcaxDbBsGMY7LUHSaLFYNKenp3PZbFY7Qp1O55u2IM2o/EXXFiQjNDMzs8+yLFNHXCaT4W63u6YlSJ6hXC63QERXAWgJks4Q0ZvUaU9Ey0KIbU37VQAHVcNNRDeFEHe2rQ4FQTDPzHcBuAqi3tq2PVcul6UTw0r9AMC8AlcF0v2Vqs1mc2+/3z9gmubI1I3juJfP5z+WSqV4vWXf948R0exW9DIiamvXDhW302D+C5oUrZ0ZoTAMp+I43s/MIy9olmX12u32p1ar9cehnuRx2nVaWlq6YBjGQ2aeUiC/jqJotlqtfh7UIcN13QVmvgVA68ZIRAkzv5CVWqswOo7zFMA5BWdUIMmObB2bvjHKO3W/378H4CIR6SaI1NHV6vZyD2q12lHTNAsALJU9GYVhZinovbYgHREbcf89QfV6/QgRnSAi7S1LkuSDVoQ8z9vtOE59MCiOm3pVdlaeodXUaQ9g2wfFFQByrld61o/ScnLd8sIYBMGc9JqZD4372cDMPcMwXkZRdLlSqawNZ7JCoXCDmW/rtg4AibT/E2rjPaJgEXouAAAAAElFTkSuQmCC"
          alt
        />
        <span>课程详情</span>
      </div>
      <div>
        <img
          class="footer-img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAADAUlEQVRIS+2WTWgTQRTH/y9pajWV4geIHsxBUUE96EEUFQ96EvHrUJEq4kFKrZQmO6tCUVcFRXd2EgJVgigi+EFA9KAeRBBF0CIVBLUF8VAselAQ29RYTebJlE1pobXbNsfuaffte++3Mzsz/z8h4CWlnAvgGhFtY2YiItZaPyWiPUKI70HaUJAkk5NMJtcXi8UsgAWlGmb+QUTbhRAvgvShTCYzI5fLrQMwbYyCKDM3ANg0MCxmBtBGREkAfWPU9kcikdfked4TZt4c5MsmmfOcXNdtJ6LVk2wUpPwtKaUWM/OGANMYpOFoOf3M/CrwApkMqVQ7CMtms+Gurq4q8yIWi/2ura0tThQwWq9BmOu6W/yVBSI6ZlnWo4nClFIbtdaXTH04HD4ej8cfmvtBmJRyN4C7JsjMdbZt3yrB0un0tEKhsEZr/U0I0VmKm/8NYH5PT0+74zi/SnHP87Yy8wAAwD4hxM3AMKXULq31bQA/ASw3J4ZSarbW+h2AOUR0yLKsG2WBSSmPArhgmoVCoRWJROJ9KpVaWigUSqM8I4Q4VS7YcQDn/Sleadv2OynlMgAdfuysbdsnp2D432qUUk5N48AamdQ+m5rGsuwzpZSttb7ou4EVQogPnuctAdBpzA8zn7Zt2ykLTEppxPU6EX2pqqra2tjYmPO9ywNmXhgKhQ4nEonHZYEZferu7o7l8/l8S0vL11LTVCo1T2sdjUajn+vr6/8Ghrmuu4OI7g9IAdGBoaf4eHVNSrkTwD3/3Nxr2/adYRLjed4qZn7jN74uhDg4XsiQkV3ybR8qKirWNjc3tw2DZTKZSG9v70fjCowPZOZ4X1/fVcdxdFCo4zihmpqaumKxaFS6GkB3Lpdb5DjOn2Ew8yCl3A/giu+0jAfpYOZPRBTEj4QAGOU20lMBoJ+I4pZlXS597DB3pZSazswnmPkIgJlBRzRCXp6I0pFI5FxTU1PPiDATbG1trc7n8+uJqMH3k7OMQAcAGzv+A8DLcDh8ubKy8pnZIkPr/gEjO6imaFb4ZAAAAABJRU5ErkJggg=="
          alt
        />
        <span>移除列表</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    kecheng() {
      this.$router.push({
        path: "/CourseDetails",
      });
    },
    xx(){
      this.$router.push({
        path:"/CourseDetails"
      })
      
          }
  },
};
</script>

<style scoped>
.title {
  font-size: 18px;
}
.icon-rili {
  color: #818181;
  font-size: 18px;
}
.keshi {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.4rem;
}
.speedofprogress {
  height: 4px;
  width: 4.5rem;
  background-color: #f5f5f5;
  border-radius: 0.3rem;
}
.conter {
  width: 100%;
  border-top: 1px solid #f7f7f7;
  margin-top: 0.4rem;
}
.conter-border {
  height: 1.8rem;
  width: 7rem;
  border: 2px solid #e9e9e9;
  border-radius: 0.1rem;
  margin-top: 0.3rem;
  margin: 0.3rem auto;
}
.origin {
  height: 0.08rem;
  width: 0.08rem;
  background-color: #eb6100;
  border-radius: 50%;
  float: left;
}
.playback {
  float: left;
  color: #f09f69;
  margin-left: 0.2rem;
}
.classhour {
  margin-left: 0.1rem;
  float: left;
  color: #595959;
}
.conter-top {
  margin-left: 0.3rem;
  margin-top: 0.4rem;
}
.conter-middle {
  float: left;
  margin-left: -2.4rem;
  margin-top: 0.5rem;
  color: #a1a1a1;
}
.name {
  float: left;
}
.time {
  float: left;
  margin-left: 0.2rem;
}
.conter-bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* height: 0.5rem; */
  margin-top: 1.3rem;
}
.conter-bottom-speedofprogress {
  height: 4px;
  width: 4.8rem;
  background-color: #f5f5f5;
  border-radius: 0.3rem;
}
.footer {
  height: 0.8rem;
  width: 100%;
  border-top: 1px solid #f9f9f9;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  color: #afafaf;
}
.footer-img {
  height: 0.2rem;
  width: 0.2rem;
  float: left;
  margin-right: 0.1rem;
  margin-top: 0.05rem;
}
</style>