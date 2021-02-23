<template>
  <div class="envir">
    <div class="photo">
      <div class="envirbox" v-for="(item,index) in this.box" :key="index">
        <img src="../assets/img/article.jpg" alt="">
        <div class="textbox"><span>{{item.title}}</span></div>
      </div>
    </div>
    <div class="fenye">
      <fenye @envirclick="cpnclick" :cpagecount="this.pagecount" :cpagesize="4"></fenye>
    </div>
  </div>
</template>
<script>
import {request} from "@/network/request";
import fenye from "../components/fenye"
export default {
  name: 'envir',
  data(){
    return {
      box:"",
      pagecount:12,
    }
  },
  created(){
    this.change(-1);
  },
  methods:{
    change(content){
        request({
          url:"/client/display/catalogue/2/"+content,
        }).then(res=>{
          var data = res.data;
          // console.log(data);
          this.box = data.data;
          this.pagecount = 4*data.pageCount;
          // console.log(this.pagecount);
        }).catch(err=>{
          console.log(err);
        })  
    },
    cpnclick(val){
      // console.log(val);
      this.change(val);
    }
  },
  components:{
    fenye,
  }
  }

</script>
<style scoped>
.envir{
  width: 75vw;
  /* height: 400px; */
  /* background-color: blue; */
  margin:0 auto;
}
.photo{
  text-align: center;
  padding-top: 3.5rem;
}
.fenye{
  margin: 0rem auto;
  margin-bottom: 1rem;
  text-align: center;
  transform: scale(1.2);
}
.envirbox{
  margin: 0rem 1rem;
  display: inline-block;
}
.envirbox img{
  width: 30vw;
}
.textbox{
  position: relative;
  top:-4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.932));
}
.textbox span{
  color: white;
  font-size: 1.4rem;
}
</style>