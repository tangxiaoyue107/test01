<template>
    <div>
      <slot name="person">
      <div class="person">
        <div class="top_person">
          <div class="img">
            <img :src="../../assets/img/person.jpg" alt="">
          </div>
          <div class="rightmain">
            <div>
              <span class="name">名字名字</span>
              <span class="job">教授，博士生导师</span>              
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate sapiente sint officia, temporibus nam nihil, provident totam minima accusantium deleniti dolorum, voluptas fugiat ratione at tempora cumque magnam aliquid architecto?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eum omnis similique minima sit ratione impedit error natus exercitationem. Perferendis quo dolor molestiae doloremque assumenda voluptatibus quibusdam consequuntur ab? Necessitatibus?</p>
          </div>
        </div>
        <div class="direction">
          <div class="line">
            <span>{{$t('m.study_direct')}}：大数据</span>
          </div>
          <div class="line">
            <span>{{$t('m.email')}}：1111111@qq.com</span>
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
            <div class="content_box" :class="{isnone:page!=1}"><p>这是教育经历</p></div>
            <div class="content_box" :class="{isnone:page!=2}"><p>这是获奖情况</p></div>
            <div class="content_box" :class="{isnone:page!=3}"><p>这是研究课题</p></div>
            <div class="content_box" :class="{isnone:page!=4}"><p>这是学术交流</p></div>
          </div>
        </div>
      </div>
      </slot>
  </div>
</template>
<script>
import bottomnav from "../bottom_nav"
export default {
  components:{
    bottomnav,
  },
  methods:{
    changepage(content){
      this.page=content;
    }
  },
  data(){
    return {
      page:1,
    }
  }
}
</script>
<style scoped>
.isnone{
  display: none;
}
.isactive{
  border-bottom: 0.1rem solid white;
  padding-bottom: 0.2rem;
}
.content_box p{
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  margin:1rem 0;
}
.person{
  display: flex;
  width: 60vw;
  margin-left: 2rem;
  margin-top: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.rightmain{
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}
.line{
  margin:0.3rem;
}
.name{
  font-size: 2rem;
  font-weight: 800;
}
.job{
  margin-left: 1.2rem;
  font-size: 1rem;
  color: gray;
}
.rightmain p{
  font-size: 1.2rem;
  text-indent: 2rem;
  margin-top: 1rem;
}
.top_person{
  display: flex;
}
.img img{
  width: 13vw;
}
.direction{
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  width:100%;
}
.direction span{
  font-size: 1.5rem;
  font-weight: 800;
}
.bottom_box{
  width: 50vw;
  height: min-content;
  background-color: #f2f2f2;
  margin:1rem auto;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 2rem;
}
.top_nav{
  width: 50vw;
  height: 3vw;
  background-color: #5d96ff;
}
.top_nav{
  width: 100%;
  margin:0 auto;
}
.center{
  width: 40vw;
  /* background-color: green; */
  height: 100%;
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.listbox{
  width: 10vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.listbox span{
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}
.content{
  padding:1rem 1rem;
}
.content p{
  text-indent: 2rem;
}
</style>