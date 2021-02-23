<template>
  <div class="block">
    <el-carousel trigger="click" height="25vw">
      <el-carousel-item v-for="(item,index) in this.length" :key="index">
        <!-- <img :src='this.img_data[index].url'> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import {request} from "@/network/request";
export default {
  data(){
    return{
      length:'',
      img_data:'',
    }
  },
  methods:{
  },
  created(){
    request({
      url:'/client/home/banner',
    }).then(res=>{
      var data = res.data.data;
      // console.log(data);
      this.img_data = data;
      this.length = data.length;
      // this.img_data = data;
      // console.log(this.img_data[0])

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
  img{
    width: 100%;
    height: 100%;
  }
</style>