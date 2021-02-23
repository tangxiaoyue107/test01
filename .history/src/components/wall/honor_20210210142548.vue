<template>
  <div class="bigbox">
    <righttitle><span slot="title">{{$t('m.honor')}}</span></righttitle>
    <div class="imgbox">
      <photolist v-for="(item,index) in this.box" :key="index">
        <img src="../../assets/img/article.jpg" alt="" slot="img" @click="moment(item.sid)">
        <h4 slot="date">{{item.datetime}}</h4>
        <h2 slot="title">{{item.title}}</h2>
      </photolist>
    </div>
    <div class="fenye">
      <fenye @envirclick="cpnclick" :cpagecount="this.pagecount" :cpagesize="6"></fenye>
    </div>
  </div>
</template>
<script>
import {request} from "@/network/request";
import righttitle from "../title"
import photolist from "./photolist"
import fenye from "../fenye"
export default {
  components:{
    righttitle,
    photolist,
    fenye,
  },
  created(){
    this.change(-1);
  },
  methods:{
     moment(sid){
       this.$router.push({path:'/wall/honor/honor_detail?',query:{csid:sid}});
     },
    change(content){
        request({
          url:"/client/display/catalogue/1/"+content,
        }).then(res=>{
          var data = res.data;
          this.box = data.data;
          this.pagecount = 6*data.pageCount;
        }).catch(err=>{
          console.log(err);
        })  
    },
    cpnclick(val){
      this.change(val);
    }
  },
  data(){
  return {
    pagecount:6,
    box:'',
    }
  },
}
</script>
<style scoped>
.imgbox{
  width: 62vw;
  /* height: 300px; */
  /* background-color: bisque; */
  margin-left: 2rem;
  margin-top: 1rem;
  text-align: center;
}
.fenye{
  text-align: center;
  transform: scale(1.2);
  margin-bottom: 2rem;
}
</style>