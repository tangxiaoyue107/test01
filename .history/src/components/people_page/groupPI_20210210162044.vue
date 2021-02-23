<template>
  <div>
      <righttitle><span slot="title">{{$t('m.PI')}}</span></righttitle>
      <teachermes>
        <div class="person" slot="person">
          <div class="top_person">
            <div class="img">
              <img :src="person.h_url" alt="">
            </div>
            <div class="rightmain">
              <div>
                <span class="name">{{this.person.name}}</span>
                <span class="job">{{this.person.title}}</span>              
              </div>
              <p>{{this.person.introduction}}</p>
            </div>
          </div>
          <div class="direction">
            <div class="line">
              <span>{{$t('m.study_direct')}}：{{this.person.direction}}</span>
            </div>
            <div class="line">
              <span>{{$t('m.email')}}：{{this.person.e_mail}}</span>
            </div>
          </div>
          <div class="bottom_box">
            <div class="top_nav">
              <div class="center">
                <div class="listbox" @click="changepage(1)" ><span :class="{isactive:page==1}">{{$t('m.preteach')}}</span></div>
                <div class="listbox" @click="changepage(2)" ><span :class="{isactive:page==2}">{{$t('m.prize')}}</span></div>
                <div class="listbox" @click="changepage(3)" ><span :class="{isactive:page==3}">{{$t('m.PI_rearch')}}</span></div>
                <div class="listbox" @click="changepage(4)" ><span :class="{isactive:page==4}">{{$t('m.conver')}}</span></div>
              </div>
            </div>
            <div class="content">
              <div class="content_box" :class="{isnone:page!=1}">
                <p v-for="(item,index) in this.person.edu" :key="index">({{index+1}})  {{item}}</p>
              </div>
              <div class="content_box" :class="{isnone:page!=2}">
                <p v-for="(item,index) in this.person.honor" :key="index">({{index+1}})  {{item}}</p>
              </div>
              <div class="content_box" :class="{isnone:page!=3}">
                <p v-for="(item,index) in this.person.re_title" :key="index">({{index+1}})  {{item}}</p>
              </div>
              <div class="content_box" :class="{isnone:page!=4}">
                <p v-for="(item,index) in this.person.academic" :key="index">({{index+1}})  {{item}}</p>
              </div>
            </div>
          </div>
        </div>
      </teachermes>
  </div>
</template>
<script>
import {request} from "@/network/request";

import righttitle from "../title"
import teachermes from "./person"

export default {
  components:{
    righttitle,
    teachermes,
  },
  created(){
    request({
        url:"/client/members/details/0/-1",
      }).then(res=>{
        var data = res.data.data;
          // console.log(data);
          this.person = data;
      }).catch(err=>{
        console.log(err);
      }) 
  },
  methods:{
    changepage(content){
      this.page=content;
    }
  },
  data(){
    return {
      page:1,
      person:'',
    }
  }
}
</script>
<style scoped>

</style>