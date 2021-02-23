<template>
  <div>
        <righttitle>
          <span slot="title">{{$t('m.fruit_article')}}</span>
          <!-- <i slot="back" class="el-icon-arrow-right" @click="back()"></i> -->
        </righttitle>
        <div class="article_total">
          <div class="article" v-for="(item,index) in this.article_list" :key="index">
            <span class="article_name" @click="article_click(item.pid)">{{item.p_title}}</span>
            <span class="article_date">{{item.p_time}}</span>
            <div class="img">
              <img :src="item.picture" alt="">
            </div>
          </div>
          <div class="bottom_page">
            <fenye @envirclick="cpnclick" :cpagecount="this.pagecount" :cpagesize="2"></fenye>          
          </div>          
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
      article_list:'',
      pagecount:2,
    }
  },
  watch: {
      $route(to, from) {
        // console.log(to.query.year, from.query.year);
        //监听路由是否变化
        if (to.query.year != from.query.year) {
          this.$route.query.year = to.query.year;
          // console.log(to.query.year);
          this.articlelist(to.query.year,1);
        }
      }
    },
  created(){
    var year = window.location.search.split("=")[1];
    this.articlelist(year,1);
  },
  methods:{
    // back(){
    //   alert("返回上一步");
    //   this.$router.go(-1);
    // },
    article_click(pid){
      this.$router.push('/fruit_show/article/article_detail?'+pid);
    },
    cpnclick(val){
      var year = window.location.search.split("?")[1];
          this.articlelist(year,val);
    },
    articlelist(year,page){
        request({
          url:"/client/paper/catalogue/rg/"+page+"/"+ year,
        }).then(res=>{
          var data = res.data;
              // console.log(data);
            this.article_list = data.data;
            this.pagecount = 2*data.pageCount;
        }).catch(err=>{
          console.log(err);
        }) 
    }
  }
}
</script>
<style scoped>
.article{
  margin: 1.5rem 2.2rem;
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
</style>