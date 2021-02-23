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
export default {
  name: 'wall',
  data(){
    return {

    }
  },
  methods:{
    }
  }

</script>
<style scoped>

</style>