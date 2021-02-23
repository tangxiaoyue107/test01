<template>
<div>
      <righttitle><span slot="title">{{$t('m.honor')}}</span></righttitle>
      <div class="study_show_details">
        <h1>{{this.title}}</h1>
        <h6>{{this.datetime}}</h6>
        <div class="imgbox">
          <img src="../../assets/img/article.jpg" alt="">
          <img src="../../assets/img/article.jpg" alt="">
        </div>
      </div>
      <div>
        <bottomnav>
          <p slot="last_page" @click="change(last_id)">{{$t('m.front_pass')}}：{{this.last_title}}</p>
          <p slot="next_page" @click="change(next_id)">{{$t('m.next_pass')}}：{{this.next_title}}</p>
        </bottomnav>
      </div>
</div>

</template>
<script>
import {request} from "@/network/request";

import righttitle from "../title"
import bottomnav from "../bottom_nav"

export default {
  components:{
    righttitle,
    bottomnav,
  },
  data(){
    return {
      title:'',
      datetime:'',
      picture:'',
      next_id:'',
      last_id:'',
      last_title:'',
      next_title:'',
    }
  },
  created(){
    var sid = this.$route.query.csid;;
    this.change(sid);
  },
  methods:{
    change(sid){
      this.$router.push({path:'/wall/honor/honor_detail',query:{nsid:sid}});
      request({
        url:"/client/display/details/"+sid,
      }).then(res=>{
        var data = res.data.data;
          // console.log(data);
          this.title = data.title;
          this.datetime = data.datetime;
          this.last_id=data.last_id;
          this.next_id=data.next_id;
          this.last_title = data.last_title;
          this.next_title = data.next_title;
      }).catch(err=>{
        console.log(err);
      }) 
    }
  }
}
</script>
<style scoped>
/* 右边栏 */
.study_show_details{
  width: 61.5vw;
  height: min-content;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 7px 7px rgba(182, 182, 182, 0.397);
  margin:3rem 2rem;
  padding-top: 1rem;
}
.study_show_details h1{
  text-align: center;
  font-size: 2rem;
}
.study_show_details h6{
  text-align: center;
  margin-top: 1rem;
  font-size: 1.2rem;
}
.imgbox{
  text-align: center;
  margin-top: 1rem;
}
.imgbox img{
  width: 40vw;
  margin:1rem 0;
}
</style>