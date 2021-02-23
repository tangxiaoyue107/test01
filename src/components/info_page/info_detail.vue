<template>
  <div>
      <righttitle><span slot="title">{{$t('m.infomation_left')}}</span></righttitle>
      <div class="study_show_details">
          <h1>{{this.info_title}}</h1>
          <h6>{{$t('m.update')}}：{{this.datetime}}</h6>
          <div class="article_content">
            <div class="text">
              <p>{{this.content}}</p>
            </div>
            <div class="img">
            </div>
            <el-button type="primary" icon="el-icon-download" class="download" @click="another(n_url)">{{$t('m.download')}}</el-button>
          </div>
      </div>
      <bottomnav>
        <p slot="last_page" @click="change(last_id)">{{$t('m.front_pass')}}：{{this.last_title}}</p>
        <p slot="next_page" @click="change(next_id)">{{$t('m.next_pass')}}：{{this.next_title}}</p>
      </bottomnav>
  </div>
</template>
<script>
import {request} from "@/network/request";

import bottomnav from "../bottom_nav"
import righttitle from "../title"

export default {
  components:{
    bottomnav,
    righttitle,
  },
  created(){
    var nid = this.$route.query.cnid;
    this.change(nid);
  },
  data(){
    return {
      info_title:"",
      datetime:'',
      picture:'',
      next_id:'',
      last_id:'',
      last_title:'',
      next_title:'',
      content:'',
      n_url:'',
    }
  },
  methods:{
    change(nid){
      this.$router.push({path:'/info/infolist/info_detail',query:{cnid:nid}});
      request({
        url:"/client/news/details/"+nid,
      }).then(res=>{
        var data = res.data.data;
          // console.log(data);
          this.info_title = data.title;
          this.datetime = data.datetime;
          this.last_id=data.last_id;
          this.next_id=data.next_id;
          this.last_title = data.last_title;
          this.next_title = data.next_title;
          this.content = data.content;
          this.n_url = data.n_url;

          // console.log(this.info_title);
      }).catch(err=>{
        console.log(err);
      }) 
    },
    another(n_url){
      // alert("即将下载");
      window.open(n_url,"_blank");
    }
  }

}
</script>
<style scoped>
/* 右边栏 */
.study_show_details{
  width: 61.5vw;
  height: min-content;
  padding-top: 1rem;
  margin:3rem 2rem;
  margin-top: 1rem;
}
.study_show_details h1{
  text-align: center;
  font-size: 2rem;
  margin-top: 0rem;
}
.study_show_details h6{
  text-align: center;
  font-weight: 100;
  margin-top: 0.8rem;
}
.article_content{
    margin:1rem 2rem;
}
.text{
  font-size: 1rem;
  text-indent: 2rem;
  line-height: 1.5rem;
}
.img{
  margin:2rem auto;
  display: flex;
  justify-content: center;
}
.article_content h4{
  font-size: 1rem;
  font-weight: 200;
  padding-left: 1rem;
}
a{
  color: black;
}
a:hover{
  color: blue;
}
.download{
  margin-top: 1.5rem;
  margin-left: 1rem;
  font-size: 1rem;
  /* width:6rem; */
  border-radius: 0.4rem;
}
</style>