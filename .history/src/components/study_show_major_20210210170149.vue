<template>
<div>
      <righttitle><span slot="title">{{$t('m.student_major')}}</span></righttitle>
      <div class="study_show_details">
            <div class="bottom_details">
            <div class="bottom_box">
              <h1><i class="el-icon-arrow-right"></i>{{$t('m.study_direct')}}:</h1>
              <div class="spanbox" v-for="(item,index) in this.direction" :key="index">
                  <span>({{index+1}}) {{item.content}}</span>
              </div>
            </div>
            <div class="bottom_box">
              <h1><i class="el-icon-arrow-right"></i>{{$t('m.study_major')}}:</h1>
              <div class="spanbox" v-for="(item,index) in this.major" :key="index">
                  <span>({{index+1}}) {{item.content}}</span>
              </div>
            </div>
            <div class="bottom_box">
              <h1><i class="el-icon-arrow-right"></i>{{$t('m.major_p')}}:</h1>
              <p>{{this.words}}</p>
            </div>
          </div>
    </div>
</div>

</template>
<script>
import {request} from "@/network/request";
import righttitle from "../components/title"
export default {
  components:{
    righttitle,
  },
  data(){
    return {
      major:'',
      direction:'',
      words:'',
    }
  },
  created(){
           request({
          url:'/client/research/direction',
        }).then(res=>{
          var data = res.data.data;
          console.log(data);
          this.major =data.r_major;
          this.direction = data.direction;
          this.words = data.words;
        }).catch(err=>{
          console.log(err);
        })   
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
.bottom_box p{
  font-size: 1.2rem;
  text-indent: 2rem;
}
</style>