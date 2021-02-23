<template>
  <div class="wall">
        <div class="left_study_nav">
      <!-- 点击样式问题？ -->
        <router-link to="/study_show/study_show_one"><navleft><span slot="left_nav">{{$t('m.study_show')}}</span></navleft></router-link>
        <router-link to="/study_show/study_show_major"><navleft><span slot="left_nav">{{$t('m.student_major')}}</span></navleft></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import navleft from "../components/left_nav"
export default {
  name: 'wall',
  data(){
    return {

    }
  },
  methods:{
    },
  components:{
    navleft,
  },
  }

</script>
<style scoped>
.wall{
  width: 90vw;
  height: min-content;
  /* background-color: lightblue; */
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
</style>