<template>
  <div class="teacher">
      <righttitle><span slot="title">{{$t('m.teacher')}}</span></righttitle>
      <div style="margin-left:2rem;">
        <div class="teacher_list">
          <list v-for="(item,index) in this.teacher" :key="index">
            <img src="../../assets/img/person.jpg" alt="" slot="img">
            <div class="text" slot="text">
                <h2 @click="teacherdet(item.mid)">{{item.name}}</h2>
                <p>{{item.introduction}}</p>
            </div>
          </list>
        </div>        
      </div>
      <div style="margin-bottom:2rem;transform: scale(1.2);">
        <fenye @envirclick="cpnclick" :cpagecount="this.pagecount" :cpagesize="4"></fenye>     
      </div>
  </div>
</template>
<script>
import {request} from "@/network/request";
import righttitle from "../title"
import list from "./list"
import fenye from "../fenye"
export default {
  components:{
    righttitle,
    fenye,
    list,
  },
  data(){
    return {
      teacher:'',
      pagecount:1,
    }
  },
  created(){
    this.change(1);
  },
  methods:{
    teacherdet(mid){
      this.$router.push('/people/teacher/detail?'+mid);
    },
    change(content){
      request({
          url:"/client/members/catalogue/1/"+content,
        }).then(res=>{
          var data = res.data;
              // console.log(data);
            this.teacher = data.data;
            this.pagecount = 4*data.pageCount;
        }).catch(err=>{
          console.log(err);
        }) 
    },
    cpnclick(val){
      this.change(val);
    }
  }
}
</script>
<style scoped>
.teacher_list{
  width: 62vw;
  height: min-content;
}
.teacher{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin:0 auto; */
}
</style>