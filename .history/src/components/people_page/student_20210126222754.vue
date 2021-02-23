<template>
  <div class="teacher">
      <righttitle><span slot="title">{{$t('m.student')}}</span></righttitle>
      <div style="margin-left:2rem;" :key="channelCode">
        <div class="teacher_list">
          <list v-for="(item,index) in this.student" :key="index">
            <img src="../../assets/img/person.jpg" alt="" slot="img">
            <div class="text" slot="text">
                <h2>{{item.name}}</h2>
                <div style="margin-top:2rem;">
                  <h3>{{$t('m.student')}}:{{item.direction}}</h3>
                  <h3>{{$t('m.study_direct')}}:{{item.direction}}</h3>
                  <h3>{{$t('m.email')}}:<br/>{{item.e_mail}}</h3>                  
                </div>
            </div>
          </list>
        </div>        
      </div>
      <div style="margin-bottom:2rem;transform: scale(1.2);">
        <fenye @envirclick="cpnclick" :cpagecount="this.pagecount" :cpagesize="4"></fenye>          
      </div>
  </div>
</template>
<script>
import {request} from "@/network/request";

import righttitle from "../title"
import list from "./list"
import fenye from "../fenye"

export default {
  components:{
    righttitle,
    fenye,
    list,
  },
  data(){
    return {
      channelCode:"",
      student:'',
      pagecount:1,
      list_status:1,
    }
  },
  created(){
    this.change(1);
  },
  watch: {
      $route(to, from) {
        console.log(to.query.status, from.query.status);
        //监听路由是否变化
        if (to.query.status != from.query.status) {
          this.$route.query.status = to.query.status;
          console.log(to.query.status);
          this.change(to.query.status);
        }
      }
    },
  methods:{
    cpnclick(val){
      this.change(val);
    },
    change(content){
      var status = window.location.search.split("=")[1];
      this.list_status = status;
      console.log(this.list_status);
      request({
          url:"/client/members/catalogue/"+status+'/'+content,
        }).then(res=>{
          var data = res.data;
            this.student = data.data;
            this.pagecount = 4*data.pageCount;
        }).catch(err=>{
          console.log(err);
        }) 
    },


  }
}
</script>
<style scoped>
.teacher_list{
  width: 62vw;
  height: min-content;
}
.teacher{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin:0 auto; */
}
</style>