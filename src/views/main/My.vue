<template>
  <div>
      <!-- navbar导航条 -->
    <van-nav-bar title="个人信息">
      <template #left>
        <van-icon
          name="arrow-left"
          color="black"
          size="20px"
          @click="$router.go(-1)"
        />
      </template>
    </van-nav-bar>
    <!-- navbar导航条 -->

    <div>
          <van-cell @click="Total" is-link border>
            <template #default>
              <span>头像</span>
               <van-image
                style="margin-left: 80%"
                round
                width="0.51rem"
                height="0.51rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </template>
          </van-cell>
          <van-cell title="昵称" is-link :value="shojihao"/>
          <van-cell title="手机号" value="13103939554" />
          <van-cell title="性别" is-link :value="age" />
          <van-cell title="出生日期" @click="shows = true" is-link value="请选择" />
          <van-cell title="所在城市" is-link value="请选择" />
          <van-cell title="学科" is-link value="请选择" />
          <van-cell title="年级" is-link value="请选择" />
      </div>
      <van-action-sheet
          v-model="show"
          :actions="actions"
          cancel-text="取消"
          close-on-click-action
          @cancel="onCancel"
        />
        <van-action-sheet v-model="shows">
          <div class="content"><van-picker show-toolbar  :columns="columns" /></div>
         </van-action-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:"个人信息",
      details:true,
      show:false,
      actions: [{ name: '拍照' }, { name: '从手机相册选择' }],
      shojihao:"131****9554",
      age:"男",
      shows:false,
       columns: [
        {
          text: '1999',
          children: [
            {
              text: '1',
              children: [{ text: '01' }, { text: '02' }],
            },
            {
              text: '2',
              children: [{ text: '01' }, { text: '02' }],
            },
            {
              text: '3',
              children: [{ text: '01' }, { text: '02' }],
            },{
              text: '4',
              children: [{ text: '01' }, { text: '02' }],
            },
          ],
        },
        {
          text: '1998',
          children: [
            {
              text: '1',
              children: [{ text: '01' }, { text: '02' },{ text: '03' }, { text: '04' }],
            },
            {
              text: '2',
              children: [{ text: '01' }, { text: '02' }],
            },
          ],
        },
      ],

    }
  },
  methods:{
    Total(){
      this.show = true;
      // Toast(item.name);
    },
    onCancel(){
      this.show = false;
    },
  }

}
</script>

<style scoped>
.box{
  width: 100%;
  height: 100vh;
  background-color: #F0F2F5;
}
 .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .content {
    padding: 16px 16px 160px;
  }
</style>