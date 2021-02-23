<template>
  <div class="info">
      <righttitle><span slot="title">{{$t('m.infomation_left')}}</span></righttitle>
      <div class="whole_box">
        <div v-for="(item,index) in this.box" :key="index">
          <div class="infobox">
            <div class="recent_box">
              <div class="recent_date">
                <h1>{{moment(item.datetime).format('DD')}}</h1>
                <h6>{{moment(item.datetime).format('YYYY-MM')}}</h6>
              </div>
              <div class="recent_text">
                <h1 @click="info_detail(item.nid)">{{item.title}}</h1>
              </div>
            </div>
            <div class="more_button" @click="info_detail(item.nid)">MORE</div>
          </div>
          <hr>          
        </div>

      </div>
      <div style="margin:1rem 0;sss">
        <fenye @envirclick="cpnclick" :cpagecount="this.pagecount" :cpagesize="4"></fenye>
      </div>

  </div>
</template>
<script>
import moment from 'moment'
import {request} from "@/network/request";

import righttitle from "../title"
import fenye from "../fenye"
export default {
  components:{
    righttitle,
    fenye,
    moment,
  },
  data(){
    return {
      box:"",
      moment,
      pagecount:12,
      
    }
  },
  created(){
    this.change(-1);
  },
  methods:{
    change(content){
      request({
        url:"/client/news/catalogue/0/"+content,
      }).then(res=>{
        var data = res.data;
          // console.log(data);
          this.box = data.data;
          this.pagecount = 4*data.pageCount;
      }).catch(err=>{
        console.log(err);
      }) 
    },
    info_detail(nid){
      this.$router.push({path:'/info/infolist/info_detail?',query:{cnid:nid}});
    },
    cpnclick(val){
      this.change(val);
    }
  }
}
</script>
<style scoped>
.info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.whole_box{
  width: 60vw;
  margin-left: 2rem;
  margin:0 auto;
  margin-top: 1rem;
  min-height: 23vw;
  /* background-color: bisque; */
}
.infobox{
  width: 60vw;
  height: 3.5rem;
  /* background-color: rgb(127, 196, 241); */
  margin:1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 近期大盒子 */
.recent_box{
  width: 50vw;
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
}
/* 近期日期 */
.recent_date{
  width: 5vw;
  /* background-color: violet; */
  border:0.1rem solid rgba(0, 0, 0, 0.753);
  border-radius: 0.5rem;
  padding: 0.2rem 0.2rem;
}
.recent_date h1{
  font-size: 2rem;
  text-align: center;
}
.recent_date h6{
  font-size: 0.7rem;
  text-align: center;
  margin-top: 0.3rem;
}
.recent_box .recent_text{
  margin-left: 2rem;
  cursor: pointer;
}
.recent_box h1{
  font-size: 1.4rem;
  font-weight: 400;
}
.more_button{
  position: relative;
  top:2rem;
  /* color: #5d96ff; */
  font-weight: 700;
  cursor: pointer;
}
</style>