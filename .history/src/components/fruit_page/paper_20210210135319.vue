<template>
  <div>
        <righttitle><span slot="title">{{$t('m.paper')}}</span></righttitle>
        <div class="article_total">
          <div class="article">
            <div class="paperbox" v-for="(item,index) in this.paper" :key="index">
              <span @click="paperdetail(item.pid)">{{item.p_author}}:{{item.p_title}}</span>
            </div>
          </div>          
        </div>
        <div class="bottom_page">
        <fenye @envirclick="cpnclick" :cpagecount="this.pagecount" :cpagesize="8"></fenye>          
        </div>
  </div>

</template>
<script>
import {request} from "@/network/request";

import righttitle from "../title"
import fenye from "../fenye"

export default {
  components:{
    righttitle,
    fenye,
  },
  data(){
    return {
      paper:'',
      pagecount:2,
    }
  },
  created(){
    this.change(1);
  },
  methods:{
    paperdetail(pid){
      this.$router.push({path:'/fruit_show/paper/paper_detail',query:{cpid:pid}});
    },
    change(content){
      request({
          url:"/client/paper/catalogue/graduation/"+content,
        }).then(res=>{
          var data = res.data;
              // console.log(data);
            this.paper = data.data;
            this.pagecount = 8*data.pageCount;
        }).catch(err=>{
          console.log(err);
        }) 
    },
        cpnclick(val){
      this.change(val);
    },
  }
}
</script>
<style scoped>
.article{
  margin: 1.5rem 2.2rem;
  width: 100%;
  /* background-color: blue; */
  /* display: flex; */
  /* flex-direction: column; */
}
.article_name{
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
}
.article_name:hover{
  color: blue;
}
.article_date{
  font-size: 1.15rem;
  float: right;
}
.img{
  display: flex;
  justify-content: center;
  align-items: center;
  margin:1rem 0;
}
.img img{
  width: 17vw;
}
.bottom_page{
  display: flex;
  justify-content: center;
  margin:1.5rem 0;
  transform: scale(1.2);
}
.paperbox{
  margin:1rem 1.5rem;
  width: 35%;
  display: inline-block;
  background-color: #5d96ff;
  padding:0 1rem;
  line-height: 2.5rem;
  border-radius: 0.5rem;
}
.paperbox span{
  color: white;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  cursor: pointer;
}
</style>