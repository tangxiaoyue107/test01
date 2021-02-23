<template>
  <div class="fruit_show">
    <div class="left_study_nav">
        <router-link to="/people/groupPI"><navleft><span slot="left_nav">{{$t('m.PI')}}</span></navleft></router-link>
        <router-link to="/people/teacher"><navleft><span slot="left_nav">{{$t('m.teacher')}}</span></navleft></router-link>
          <navleftlong>
            <span slot="left_nav" @click="changerouter(2)">{{$t('m.student')}}</span>
              <div slot="nav_list">
                <div class="datebox">
                  <h2 @click="changerouter(2)">博士生</h2>
                </div>
                <div class="datebox">
                  <h2 @click="changerouter(3)">硕士生</h2>
                </div>                  
                <div class="datebox">
                  <h2 @click="changerouter(4)">本科生</h2>
                </div> 
                <div class="datebox">
                  <h2 @click="changerouter(5)">毕业生</h2>
                </div>                  
              </div>
          </navleftlong>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import navleft from "../components/left_nav"
import navleftlong from "../components/left_nav_long"
export default {
  name: 'people',
    components:{
    navleft,
    navleftlong,
  },
  data(){
    return {
      list_status:2,
      mid:1,
    }
  },
  methods:{
    changerouter(status){
      this.list_status = status;
      console.log(this.list_status);
      this.$router.push("/people/teacher");
      this.$router.push("/people/student?"+status);
    }
  }
}
</script>
<style scoped>
.fruit_show{
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