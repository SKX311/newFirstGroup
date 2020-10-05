<template>
  <div class="coach">
      <div class="famous_one" @click="make">
        <p class="famous_one_tu"><img src="http://localhost:8080/img/teacher01.png" alt="" /></p>
        <div class="famous_two">
          <p class="famous_name">杨德胜</p>
          <p class="famous_introduce">男 30年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <p class="famous_one_tu"><img src="http://localhost:8080/img/teacher06.jpg" alt="" /></p>
        <div class="famous_two">
          <p class="famous_name">李凡</p>
          <p class="famous_introduce">男 30年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <p class="famous_one_tu"><img src="http://localhost:8080/img/teacher07.jpg" alt="" /></p>
        <div class="famous_two">
          <p class="famous_name">齐钰</p>
          <p class="famous_introduce">男 30年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <p class="famous_one_tu"><img src="http://localhost:8080/img/teacher08.jpg" alt="" /></p>
        <div class="famous_two">
          <p class="famous_name">森一老师</p>
          <p class="famous_introduce">男 30年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <p class="famous_one_tu"><img src="http://localhost:8080/img/teacher04.jpg" alt="" /></p>
        <div class="famous_two">
          <p class="famous_name">宋老师</p>
          <p class="famous_introduce">男 30年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <p class="famous_one_tu"><img src="http://localhost:8080/img/teacher09.jpg" alt="" /></p>
        <div class="famous_two">
          <p class="famous_name">T1陆老师</p>
          <p class="famous_introduce">男 30年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <p class="famous_one_tu"><img src="http://localhost:8080/img/teacher10.jpg" alt="" /></p>
        <div class="famous_two">
          <p class="famous_name">T2周老师</p>
          <p class="famous_introduce">男 30年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <p class="famous_one_tu"><img src="http://localhost:8080/img/teacher12.png" alt="" /></p>
        <div class="famous_two">
          <p class="famous_name">T3赵老师</p>
          <p class="famous_introduce">男 30年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <p class="famous_one_tu"><img src="http://localhost:8080/img/teacher04.jpg" alt="" /></p>
        <div class="famous_two">
          <p class="famous_name">秦建</p>
          <p class="famous_introduce">男 30年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="famous_one" @click="make">
        <p class="famous_one_tu"><img src="http://localhost:8080/img/teacher05.jpeg" alt="" /></p>
        <div class="famous_two">
          <p class="famous_name">廖天金</p>
          <p class="famous_introduce">男 30年教龄</p>
        </div>
        <div class="famous_three">
          <button @click="make">预约</button>
        </div>
      </div>
      <div class="more">没有更多了</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.coach {
  background: #f0f2f5;
}
.famous_one {
  width: 7.1rem;
  height: 1.619rem;
  border-radius: 5px;
  background: white;
  margin: 0 auto;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .famous_one_tu{
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
.more{
    width: 100%;
    height: 0.48rem;
    font-size: 3.2vw;
    text-align: center;
    line-height: 0.48rem;
    color: #969799;
}
</style>