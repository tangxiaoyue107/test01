<template>
  <div>
      <righttitle><span slot="title">{{$t('m.paper')}}</span></righttitle>
      <div class="study_show_details">
        <h1>{{paper.o_title}}</h1>
        <h6>{{paper.p_time}}</h6>
        <div class="paper_title">
          <h2>{{paper.p_title}}</h2>
        </div>
        <div class="paper_text">
          <p>{{paper.abstract}}</p>
        </div>
        <h6>{{paper.p_author}}</h6>
        <div class="person_detail">
          <div style="width:50%">
            <div class="person_detail_box">
              <span>学院：{{paper.college}}</span>
            </div>
            <div class="person_detail_box">
              <span>导师姓名：{{paper.tutor}}</span>
            </div>
          </div>
          <div style="width:50%">
            <div class="person_detail_box">
              <span>专业：{{paper.major}}</span>
            </div>
            <div class="person_detail_box">
              <span>研究方向：{{paper.direction}}</span>
            </div>
          </div>
        </div>
        <div class="about"><span>文章地址：{{paper.p_url}}</span></div>
        <div class="about"><span>期刊：{{paper.p_periodical}}</span></div>
        <el-button type="primary" icon="el-icon-download" class="download" @click="another(paper.p_pdf_url)">{{$t('m.download')}}</el-button>
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
  created(){
      var pid = this.$route.query.cpid;
      this.change(pid);
  },
  data(){
    return {
      paper:'',
      next_id:'',
      last_id:'',
      last_title:'',
      next_title:'',
    }
  },
  methods:{
    change(pid){
      request({
          url:"/client/paper/details/graduation/"+pid,
        }).then(res=>{
          var data = res.data;
              this.paper = data.data;
              this.next_id=data.data.next_id;
              this.last_id=data.data.last_id;
              this.last_title=data.data.last_title;
              this.next_title=data.data.next_title;
        }).catch(err=>{
          console.log(err);
        }) 
    },
    another(n_url){
      alert("即将下载");
      window.open(n_url,"_blank");
    }
  }
}
</script>
<style scoped>
.about{
  margin-left: 6rem;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: 100;
}
/* 右边栏 */
.study_show_details{
  width: 61.5vw;
  /* text-align: centers; */
  height: min-content;
  padding-top: 1rem;
  margin:3rem 2rem;
  margin-top: 1rem;
  border:1px solid #5d96ff;
}
.study_show_details h2{
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 0.2rem;
  margin:0.4rem;
}
.study_show_details h6{
  font-size: 1rem;
  text-align: center;
  letter-spacing: 0.1rem;
  margin:1rem;
  font-weight: 100;
}
.study_show_details h1{
  font-size: 2.3rem;
  text-align: center;
  letter-spacing: 0.1rem;
  margin:0.2rem;
  font-weight: 700;
}
.paper_title{
  width: 30vw;
  margin:0 auto;
  margin-top: 2rem;
  margin-bottom: 1.8rem;
}
.paper_title h2{
  font-weight:500 ;
}
.paper_text{
  width: 50vw;
  margin:0 auto;
  line-height: 2rem;
  font-size: 1.2rem;
}
.person_detail{
  width:30vw;
  margin:2rem auto;
  /* display: flex; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.person_detail_box{
  margin:1rem 0;
}
.person_detail_box span{
  font-size: 1.1rem;
}
.download{
  /* width: vw; */
  position: relative;
  left:5rem;
  margin-top: 1.5rem;
  margin-left: 1rem;
  font-size: 1rem;
  /* width:6rem; */
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  background-color: #5d96ff;
}
</style>