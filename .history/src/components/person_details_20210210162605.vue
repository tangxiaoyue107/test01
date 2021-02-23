<template>
      <div class="personality">
        <div class="person_title">
          <span>xxx教授</span>
        </div>
        <div class="person_details">
          <div class="person_picture">
            <div style="width:15vw;height:20vw;background-color: #d3dce6;margin-top:1rem;margin-left:1rem;">
              <img :src="person_more" alt="">
            </div>
          </div>
          <div class="person_info">
            <h2>{{this.person_name}}<span>{{this.person_pos}}</span></h2>
            <h4>江西师范大学化学化工学院超级细粉体材料研究中心</h4>
            <div class="info_text">
              <p>{{this.person_intro}}</p>
            </div>
            <div class="info_more">
              <div class="more_part">
                <span>{{$t('m.study_direct')}}:</span><span>{{this.person_direct}}</span>
              </div>
              <div class="more_part">
                <span>{{$t('m.email')}}：</span><span>{{this.person_email}}</span>
              </div>
              <div class="more_part">
                <button @click="jump()">MORE</button>
              </div>
          </div>  
          </div>        
        </div>
      </div>
</template>
<script>
import {request} from "@/network/request";
export default {
  data(){
    return{
      person_name:'',
      person_pos:'',
      person_intro:'',
      person_direct:'',
      person_email:'',
      person_more:''
    }
  },
  methods:{
  jump(){
    this.$router.push("/people/groupPI");
  }
  },
  created(){
    request({
      url:'/client/home/PI/information',
    }).then(res=>{
      var data = res.data.data;
      this.person_name=data.name;
      this.person_pos = data.title;
      this.person_intro = data.introduction;
      this.person_direct = data.direction;
      this.person_email = data.e_mail;
      this.person_more = data.h_url;
    }).catch(err=>{
      console.log(err);
    })  
  }
  }
</script>
<style scoped>
/* 个人信息 */
.personality{
  margin-top: 20px;
  width: 80vw;
  height: min-content;
  margin-bottom: 20px;
  /* background-color: turquoise; */
}
/* 个人信息标题 */
.person_title{
  width: 75vw;
  padding-left: 20px;
  height: 3.6rem;
  border-left: 10px solid #5d96ff;
  border-bottom: 3px solid #5d96ff;
}
.person_title span{
  float: left;
  font-size: 2rem;
  color: #5d96ff;
  font-weight:700;
  letter-spacing: 0.4rem;
}
/* 个人信息详情 */
.person_details{
  width: 80vw;
  height: min-content;
  display: flex;
}
/* 个人信息图片 */
.person_picture{
  width: 20vw;
  min-height: 20vw;
  /* background-color: violet; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.person_picture img{
width: 14w;
}
.person_info{
  width: 60vw;
  /* height: 25vw; */
  /* background-color: tomato; */
}
.person_info h2{
  font-size: 2rem;
  letter-spacing: 0.4rem;
  margin-top: 20px;
}
.person_info h2 span{
  color: #a0a0a0;
  font-size: 1.3rem;
  margin-left: 10px;
  font-weight: 400;
  letter-spacing: normal;
}
.person_info h4{
  margin-top: 10px;
  font-size: 1.3rem;
  color: #a0a0a0;
  font-weight: 400;
}
.info_text{
  width: 57vw;
  height: min-content;
  /* background-color: gray; */
  padding:10px 0;
}
.info_text p{
  font-size: 1.2rem;
  color: black;
  text-indent: 2rem;
  font-weight: 100;
  line-height: 1.7rem;
}

.info_more{
  height: min-content;
}
.info_more .more_part{
  height: min-content;
  margin:0.5vw 0;
}
.info_more .more_part span{
  font-size: 1.1rem;
  font-weight: 100;
}
.info_more .more_part button{
  width: 7vw;
  height: 2.5vw;
  border-radius: 5px;
  outline: none;
  border:0px;
  background-color: #5d96ff;
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  cursor: pointer;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
}

</style>