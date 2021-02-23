<template>
  <div class="study_show">
    <div class="left_study_nav">
      <!-- 点击样式问题？ -->
        <router-link to="/study_show/study_show_one"><navleft><span slot="left_nav">{{$t('m.study_show')}}</span></navleft></router-link>
        <router-link to="/study_show/study_show_major"><navleft><span slot="left_nav">{{$t('m.student_major')}}</span></navleft></router-link>
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

</style>