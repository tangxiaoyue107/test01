<template>
  <div>
        <righttitle><span slot="title">{{$t('m.patent')}}</span></righttitle>
        <div class="article_total">
          <div class="article">
            <div class="paperbox" v-for="(item,index) in this.patent" :key="index">
              <span @click="paperdetail(item.pid)">{{item.inventor}}:{{item.title}}</span>
            </div>
          </div>
          <div class="bottom_page">
        <fenye @envirclick="cpnclick" :cpagecount="this.pagecount" :cpagesize="4"></fenye>          
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
    return{
      patent:'',
      pagecount:2,
    }
  },
  created(){
    this.change(1);
  },
  methods:{
    paperdetail(pid){
      this.$router.push('/fruit_show/patent/patent_detail?'+pid);
    },
    change(content){
      request({
          url:"/client/paper/catalogue/patent/"+content,
        }).then(res=>{
          var data = res.data;
              // console.log(data);
            this.patent = data.data;
            this.pagecount = 4*data.pageCount;
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

.bottom_page{
  display: flex;
  justify-content: center;
  margin:1.5rem 0;
  transform: scale(1.2);
}

.article{
  margin: 1.5rem 2.2rem;
  width: 50vw;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
}
.article_total{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  /* margin:0 auto; */
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
  margin:1rem 0;
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