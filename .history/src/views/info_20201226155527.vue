<template>
  <div class="study_show">
    <div class="left_study_nav">
      <!-- 点击样式问题？ -->
        <router-link to="/info/infolist"><navleft><span slot="left_nav">{{$t('m.infomation_left')}}</span></navleft></router-link>
        <router-link to="/info/annouced"><navleft><span slot="left_nav">{{$t('m.announce')}}</span></navleft></router-link>
        <router-link to="/info/public_resource"><navleft><span slot="left_nav">{{$t('m.public_resource')}}</span></navleft></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import studyshow from "../components/study_show"
import navleft from "../components/left_nav"
export default {
  name: 'info',
  data(){
    return {

    }
  },
  methods:{
    },
    components:{
      navleft,
      studyshow,
    }
  }
</script>
<style scoped>
.study_show{
  width: 90vw;
  height: min-content;
  margin: 0 auto;
  display: flex;
}
/* 左导航 */
.left_study_nav{
  width: 20vw;
  height: min-content;
  /* background-color: blanchedalmond; */
  border-right: 0.1rem solid rgb(214, 214, 214);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
/* 右边栏 */
.study_show_details{
  width: 61.5vw;
  height: min-content;
  min-height: 40vw;
  /* background-color: rgb(255, 255, 255); */
  /* box-shadow: 2px 2px 7px 7px rgba(182, 182, 182, 0.397);ss */
  margin:3rem 2rem;
}
</style>