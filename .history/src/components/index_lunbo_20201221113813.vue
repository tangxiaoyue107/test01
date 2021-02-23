<template>
  <div class="block">
    <el-carousel trigger="click" height="25vw">
      <el-carousel-item v-for="item in data" :key="item">
        <img src="" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import {request} from "@/network/request";
export default {
  data(){
    return{
      length:''
    }
  },
  methods:{
  },
  created(){
    request({
      url:'/client/home/banner',
    }).then(res=>{
      var data = res.data.data;
      this.length = data.length;

    }).catch(err=>{
      console.log(err);
    })  
  }
  }
</script>
<style>

/*------*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>