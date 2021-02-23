<template>
<div>
        <righttitle><span slot="title">{{$t('m.study_show')}}</span></righttitle>
        <div class="study_show_details">
          <div class="top_details">
            <h1>{{this.r_title}}</h1>
            <div class="midbox">
              <div class="imgbox">
                <img :src="this.picture" alt="">                
              </div>
                <div class="text">
                  <p>{{this.r_introduction}}</p>
                </div>            
            </div>
          </div>
          <hr>
          <div class="bottom_details">
            <div class="bottom_box">
              <h1><i class="el-icon-arrow-right"></i>{{$t('m.study_methods')}}:</h1>
              <div class="spanbox" v-for="(item,index) in this.r_methods" :key="index">
                  <span>({{index+1}}) {{item.content}}</span>
              </div>
            </div>
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
import righttitle from "../components/title"
import bottomnav from "../components/bottom_nav"
export default {
  components:{
    righttitle,
    bottomnav,
  },
  data(){
    return {
      id:-1,
      last_title:'',
      next_title:'',
      r_introduction:'',
      r_title:'',
      r_methods:'',
      picture:'',
      next_id:'',
      last_id:'',
    }
  },
  created(){
    this.change(-1);
  },
  methods:{
    change(content){
        request({
          url:'/client/research/introduction/'+content,
        }).then(res=>{
          var data = res.data.data;
          // console.log(data);
          this.id=data.rid;
          this.last_title=data.last_title;
          this.next_title=data.next_title;
          this.r_introduction=data.r_introduction;
          this.r_title=data.r_title;
          this.r_methods=data.r_methods;
          this.picture=data.picture;
          this.next_id=data.next_id;
          this.last_id=data.last_id;
          // console.log(this.picture);
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
  padding-top: 1rem;
  margin-bottom: 0rem;
  margin:3rem 2rem;

}

/* 上面详情 */
.top_details{
  width: 100%;
}
.top_details h1{
  font-size: 2rem;
  text-align: center;
}

/* 上面的中间 */
.top_details .midbox{
  width: 61.5vw;
  height: min-content;
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
}
/* 上面中间的图片盒子 */
.top_details .midbox .imgbox{
  display: flex;
  justify-content: center;
  align-items: center;
}
.top_details .midbox .imgbox img{
  width: 20vw;
  /* height: 20vw; */
  /* background-color: greenyellow; */
}

/* 上面中间右边的介绍 */
.top_details .midbox .text{
  padding:0 2rem;
  padding-top: 3rem;
  width: 40vw;
  height: min-content;
}
.text p{
  text-indent: 2rem;
  font-size: 1.2rem;
}

.bottom_box{
  padding:1rem 2rem;
}
.bottom_box h1{
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
}
.bottom_box h1 i{
  margin-right: 0.5rem;
}
.spanbox{
  margin:0.5rem 0;
  margin-left: 2.3rem;
}
</style>