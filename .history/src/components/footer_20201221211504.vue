<template>
  <footer>
      <h6>Email:djtao@jxnu.edu.cn</h6>
      <h6>Tel:+0791-88120380</h6>
      <h6>地址：江西省南昌市紫阳大道99号 江西师范大学（瑶湖校区） 化学化工学院 方荫楼一区 3-1522 办公室</h6>
      <hr>
      <h5>Copyrights Resersed by Homyit Studio @Jiangxi Normal University</h5>
      <h5 style="font-weight:300;margin-top:5px;font-size:0.8rem;" class="people_number">访问人数：{{this.people}}</h5>
  </footer>
</template>
<script>
import {request} from "@/network/request";
import "../assets/css/footer.css"
export default {
  data(){
    return{
      people:'',
    }
  },
  created(){
        //有关访问人数的请求
      request({
      url:'/client/home/people',
      }).then(res=>{
        this.people = res.data.data;
        console.log(res);
        // console.log(this.people);
      }).catch(err=>{
        console.log(err);
      })  
  }
}
</script>