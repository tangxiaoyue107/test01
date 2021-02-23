<template>
  <div class="study_show">
    <div class="left_study_nav">
      <!-- 点击样式问题？ -->
        <router-link to=""><navleft><span slot="left_nav" @click="changecontent('study')" :son="page=='study'">{{$t('m.study_show')}}</span></navleft></router-link>
        <router-link><navleft><span slot="left_nav" @click="changecontent('major')" :son="page=='major'">{{$t('m.student_major')}}</span></navleft></router-link>
    </div>
    <router-view></router-view>
    <div>
      <div :class="{isnone:this.page!='study'}">
        <righttitle><span slot="title">{{$t('m.study_show')}}</span></righttitle>
        <studyshow></studyshow>
        <bottomnav></bottomnav>
      </div>

      <div :class="{isnone:this.page!='major'}">
        <righttitle><span slot="title">{{$t('m.student_major')}}</span></righttitle>
        <major></major> 
      </div>
    </div>

  </div>
</template>
<script>

import studyshow from "../components/study_show"
import bottomnav from "../components/bottom_nav"
import navleft from "../components/left_nav"
import major from "../components/study_show_major"
import righttitle from "../components/title"

import "../assets/css/study_show.css"

export default {
  name: 'study_show',
  components:{
    navleft,
    studyshow,
    major,
    bottomnav,
    righttitle,
  },
  data(){
    return {
      isnone:false,
      page:'study',
    }
  },
  methods:{
    changecontent(content){
      this.page=content;
    }
    }
  }

</script>
<style scoped>


.title{
  margin-top: 2rem;
  margin-left: 2rem;
  width: 61.5vw;
  height: 3.5vw;
  /* background-color: cadetblue; */
  border-left: 10px solid #5d96ff;
  border-bottom: 3px solid #5d96ff;
}

.title span{
  float: left;
  font-size: 2rem;
  color: #5d96ff;
  font-weight:700;
  /* letter-spacing: 0.4rem; */
  padding-left: 1rem;
}
/* 内容设置为不可见 */
.isnone{
  display: none;
}

.study_show{
  width: 90vw;
  height: min-content;
  /* background-color: lightblue; */
  margin: 0 auto;
  display: flex;
}
/* 右全局 */
.right_study_show{
  width: 68vw;
  /* height: 700px; */
  margin-top: 2rem;
  padding-left: 2rem;
  margin-bottom: 2rem;
}

/* 标题 */
.person_title{
  width: 60vw;
  padding-left: 20px;
  height: 3rem;
  border-left: 10px solid #5d96ff;
  border-bottom: 3px solid #5d96ff;
  margin-bottom: 2rem;
}
.person_title span{
  float: left;
  font-size: 2rem;
  color: #5d96ff;
  font-weight:700;
  /* letter-spacing: 0.4rem; */
}

/* 右边栏 */
.study_show_details{
  width: 61.5vw;
  height: min-content;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 7px 7px rgba(182, 182, 182, 0.397);
  padding-top: 1rem;
  margin:3rem 2rem;
  margin-bottom: 1rem;

}

</style>