<template>
  <div>
      <righttitle><span slot="title">{{$t('m.patent')}}</span></righttitle>
      <div class="study_show_details">
        <h2>{{this.patent.title}}</h2>
        <h6>{{this.patent.datetime}}</h6>
        <div class="patent_box"><span>发明人：{{this.patent.inventor}}</span></div>
        <div class="patent_box"><span>专利号：{{this.patent.nums}}</span></div>
        <div class="patent_box"><span>授权日期：{{this.patent.datetime}}</span></div>
        <el-button type="primary" icon="el-icon-download" class="download">{{$t('m.download')}}</el-button>
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
      patent:'',
      next_id:'',
      last_id:'',
      last_title:'',
      next_title:'',
    }
  },
  methods:{
    change(pid){
      request({
          url:"/client/paper/details/patent/"+pid,
        }).then(res=>{
          var data = res.data;
              this.patent = data.data;
              console.log(this.patent);
              this.next_id=data.data.next_id;
              this.last_id=data.data.last_id;
              this.last_title=data.data.last_title;
              this.next_title=data.data.next_title;
        }).catch(err=>{
          console.log(err);
        }) 
    },
  }
}
</script>
<style scoped>
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

.download{
  /* width: vw; */
  position: relative;
  left:2.7rem;
  margin-top: 1.5rem;
  margin-left: 1rem;
  font-size: 1rem;
  /* width:6rem; */
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  background-color: #5d96ff;
}
.patent_box{
  margin-left: 4rem;
  line-height: 2rem;
}
.patent_box span{
  font-size: 1.2rem;
  font-weight: 700;
}
</style>