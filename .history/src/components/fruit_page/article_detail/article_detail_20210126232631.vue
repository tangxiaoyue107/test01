<template>
  <div>
      <righttitle><span slot="title">{{$t('m.fruit_article')}}</span></righttitle>
      <div class="study_show_details">
          <h1>{{this.p_title}}</h1>
          <h6>{{$t('m.update')}}：{{this.p_time}}</h6>
          <div class="article_content">
            <div class="text">
              <p>{{this.p_abstract}}</p>
            </div>
            <div class="img">
              <img src="../../../assets/img/article.jpg" alt="">
            </div>
            <h4><a href="http://www.baidu.com">{{$t('m.article_address')}}：{{this.p_url}}</a></h4>
            <el-button type="primary" icon="el-icon-download" class="download">{{$t('m.download')}}</el-button>
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
import bottomnav from "../../bottom_nav"
import righttitle from "../../title"

export default {
  components:{
    bottomnav,
    righttitle,
  },
  data(){
    return {
      article:"",
      last_id:'',
      last_title:'' ,
      next_id: '',
      next_title:'' ,
      p_abstract: '',
      p_pdf_url: '',
      p_time: '',
      p_title:'',
      p_url:'',
      picture:'',
      pid:'',
    }
  },
  created(){
    var pid = window.location.search.split("?")[1];
    this.change(pid);
  },
  methods:{
    change(pid){
      console.log("-------",pid);
      request({
          url:"/client/paper/details/rg/"+pid,
        }).then(res=>{
          var data = res.data.data;
            console.log(data);
            this.article = data;
            this.last_id=data.last_id;
            this.last_title=data.last_title;
            this.next_id= data.next_id;
            this.next_title=data.next_title ;
            this.p_abstract= data.p_abstract;
            this.p_pdf_url= data.p_pdf_url;
            this.p_time= data.p_time;
            this.p_title=data.p_title;
            this.p_url=data.p_url;
            this.picture=data.picture;
            this.pid=data.pid;
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