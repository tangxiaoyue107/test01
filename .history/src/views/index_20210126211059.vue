<template>
  <div class="index">
    <div class="box">
      <div class="lunbo">
        <zoumadeng></zoumadeng>
      </div>
      <persondetails></persondetails>
      <div class="recent" style="display:flex;">
        <recent>
          <span slot="recent_title" class="title_span">{{$t('m.recent_fruit')}}</span>
          <span slot="recent_more" @click="recent_jump('/fruit_show/article')" class="recent_more">MORE</span>
          <div slot="content" v-for="(item,index) in this.fruit" :key='index'>
            <div class="recent_box">
              <div class="recent_date">
                <h1>{{moment(item.p_time).format('DD')}}</h1>
                <h6>{{moment(item.p_time).format('YYYY-MM')}}</h6>
              </div>
              <div class="recent_text">
                <h1 @click="fruit_jump(item.status,item.pid)">{{item.p_title}}</h1>
              </div>
            </div>
              <hr>
          </div>
        </recent>
        <recent>
          <span slot="recent_title" class="title_span">{{$t('m.recent_act')}}</span>
          <span slot="recent_more" @click="recent_jump('/info/infolist')" class="recent_more">MORE</span>
          <div slot="content" v-for="(item,index) in this.act" :key='index'>
            <div class="recent_box">
              <div class="recent_date">
                <h1>{{moment(item.datetimes).format('DD')}}</h1>
                <h6>{{moment(item.datetime).format('YYYY-MM')}}</h6>
              </div>
              <div class="recent_text">
                <h1 @click="act_jump(item.status,item.nid)">{{item.title}}</h1>
              </div>
            </div>
              <hr>
          </div>
        </recent>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import "../assets/css/index.css"
import {request} from "@/network/request";

import zoumadeng from "../components/index_lunbo"
import persondetails from "../components/person_details"
import recent from "../components/index_recent"

export default {
  name: 'index',
  components:{
    zoumadeng,
    persondetails,
    recent,
    moment,
  },
    data(){
    return {
      fruit:'',
      act:'',
      moment,
    }
  },
  created(){
    //有关fruit成果的请求
    request({
      url:'/client/home/rg_paper',
      }).then(res=>{
        this.fruit = res.data.data;
        // console.log(this.fruit);
      }).catch(err=>{
        console.log(err);
      })

    //有关activity活动的请求
      request({
      url:'/client/home/news',
      }).then(res=>{
        this.act = res.data.data;
        // console.log(this.act);
      }).catch(err=>{
        console.log(err);
      })  
  },
  methods:{
    recent_jump(router){
      this.$router.push(router);
    },
    fruit_jump(status,pid){

    },
    act_jump(status,nid){
      console.log(status);
      if(status==0){
        this.$router.push("/info/infolist/info_detail?"+nid);
      }
      else{
        this.$router.push("/info/annouced/annouced_detail?"+nid);
      }
    }
    }
  }

</script>
<style scoped>

</style>
