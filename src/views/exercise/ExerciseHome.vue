<template>
  <div class="practice">
    <van-nav-bar title="练习" />
    <ul class="JIU">
      <li
        class="JIU_ITEM"
        v-for="(item, index) in JIU"
        :key="index"
        @click="jiu(item)"
      >
        <div class="JIU_ITEM_img">
          <img :src="item.img" width="25%" height="25%" />
        </div>
        <p class="vvv">{{ item.title }}</p>
      </li>
    </ul>
    <div class="section">
      <p class="jqm">近期模考</p>
      <div class="sort">
        <span>默认排序</span>
        <span @click="shiija" class="time"
          >时间
          <img
            v-show="xia"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkMwNkZFMUNDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkMwNkZFMURDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOThBNjEyRENCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOThBNjEyRUNCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvL0oBIAAACESURBVHjaYnTN/W/OwMDAw0Aa+MsCJNYCsTSJGhmYgDiGgXTwHKTxABAnkKjRlQnKWAjEHURq8gbiq0xIApVAvIWApnog3gbzIzLwBeK7ODStAuIm5MBBB1ZA/AtN7CwQh6OHKjp4BcQOSPxvQOyMLTqwgeNAXAAKdiB2AuKP6AoAAgwAZxMVhCzcUGAAAAAASUVORK5CYII="
          />
          <img
            v-show="uup"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjA3MTZGMjRDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk4QTYxMjRDQjAzMTFFOUFERjM4M0Q1QTgxMTI0OEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMDcxNkYyMkNCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMDcxNkYyM0NCMDMxMUU5QURGMzgzRDVBODExMjQ4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pii4p18AAACESURBVHjaYnTN/c+AA8QCcQMQuwPxHXRJFhyaVIF4EZR9EIhlgfgfsgImLJq4gfgoEl8KiHejK8KmEWSDKJqYExBPwadxDhAb43B+NhCnYdNYDMTJDPjBTCC2QtboBcQ9DMQBkH8lQRp1gXgrA/GAC4j3MGELMSKAFgvUwyIkavwNEGAAVhcSsg/IFtkAAAAASUVORK5CYII="
          />
        </span>
      </div>
      <div class="robot">
        <img
          src="https://wap.365msmk.com/img/empty@2x.a2fa524d.png"
          width="30%"
          height="60%"
        />
        <p>暂无模考安排，敬请期待</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xia: false,
      uup: false,
      JIU: [
        {
          img: "http://localhost:8080/practice/JIU1.png",
          title: "考点专练",
          path: "/centre",
        },
        {
          img: "http://localhost:8080/practice/JIU2.png",
          title: "套卷练习",
          path: "/setvolume",
        },
        {
          img: "http://localhost:8080/practice/JIU3.png",
          title: "仿真模考",
          path: "/aeromodelling",
        },
        {
          img: "http://localhost:8080/practice/JIU4.png",
          title: "错题练习",
          path: "/mistakes",
        },
        {
          img: "http://localhost:8080/practice/JIU5.png",
          title: "测评记录",
          path: "/appraisal",
        },
        {
          img: "http://localhost:8080/practice/JIU6.png",
          title: "习题收藏",
          path: "/enshrine",
        },
      ],
    };
  },
  methods: {
    jiu(str) {
      console.log(str.path);
      this.$router.push({
        path: str.path,
      });
    },
    shiija() {
      this.xia = true;
    },
  },
};
</script>


<style>
.practice {
  width: 100vw;
  height: 100vh;
  background: rgba(240, 242, 245);
}
.JIU {
  width: 94.8%;
  height: 3.559rem;
  padding-top: 0.2rem;
  margin: 0.2rem;
  border-radius: 1%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  background: rgba(255, 255, 255);
}
.vvv {
  color: #595959;
}
.JIU_ITEM {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.1rem;
  width: 23%;
  height: 1.6rem;
  flex-direction: column;
}
.section {
  width: 100%;
  height: 4.7rem;
  background: rgba(255, 255, 255);
}
.sort {
  width: 96%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
}

.sort span:nth-child(1) {
  color: #eb6100;
  margin-left: 0.3rem;
}
.robot {
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.JIU_ITEM_img {
  box-shadow: 0 0 3.2vw 0 rgba(10, 0, 24, 0.07);
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: #8c8c8c;
}
.JIU_ITEM_img img {
  width: 40%;
  height: 40%;
}
.robot img {
  width: 25%;
  height: 70%;
}
.robot p {
  color: #8c8c8c;
  font-size: 0.2rem;
}
.jqm {
  color: #8c8c8c;
  font-size: 0.3rem;
  margin-left: 0.3rem;
  padding-top: 0.3rem;
}
.time {
  color: #8c8c8c;
}
</style>