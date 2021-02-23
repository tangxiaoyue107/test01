<template>
  <div class="fruit_show">
    <div class="left_study_nav">
        <router-link to="/fruit_show/paper"><navleft><span slot="left_nav">{{$t('m.paper')}}</span></navleft></router-link>
        <router-link to="/fruit_show/patent">
          <navleft>
            <span slot="left_nav">{{$t('m.patent')}}</span>
          </navleft>
        </router-link>
        <navleftlong>
          <span slot="left_nav">{{$t('m.fruit_article')}}</span>
          <div slot="nav_list">
            <div class="datebox" v-for="(item,index) in this.year" :key="index">
              <h2 @click="yearchange(item)">{{item}}年</h2>
            </div>          
          </div>
        </navleftlong>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
import {request} from "@/network/request";
import navleft from "../components/left_nav"
import navleftlong from "../components/left_nav_long"


export default {
  name: 'fruit_show',
  components:{
    navleft,
    navleftlong,
  },
  created(){
    this.getyear();
  },
  data(){
    return {
      year:'',
      newyear:'',
    }
  },
  methods:{
    getyear(){
        request({
          url:"/client/paper/catalogue/rg/time",
        }).then(res=>{
          var data = res.data.data;
              console.log(data);
              this.year = data;
              this.newyear = data[0];
        }).catch(err=>{
          console.log(err);
        }) 
    },
    yearchange(year){
      console.log(year);
      this.$router.push({path:"/fruit_show/paper",query:{year:year}});
    },
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
/* 右边栏 */
.study_show_details{
  width: 61.5vw;
  height: min-content;
  margin:3rem 2rem;
}
</style>