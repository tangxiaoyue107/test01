<template>
  <div class="nav_left" :class="{change:!isActive}" >
    <div class="top change">
      <slot name="left_nav"><span></span></slot>
      <i class="el-icon-arrow-right" @click="longlist()"></i>      
    </div>
    <div class="bottom" :class="{isnone:isActive}">
      <div class="datebox">
        <h2 @click="changeyear('2019')">2019年</h2>
      </div>
      <div class="datebox">
        <h2>2018年</h2>
      </div>   
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isActive:false,
    }
  },
  methods:{
    longlist(){
      this.isActive=!this.isActive;
    }
  }
}
</script>
<style scoped>


.nav_left{
  margin: 1rem 0;
  width: 15vw;
  min-height: 3rem;
  /* background-color: rgb(197, 197, 223); */
  border:0.1rem solid rgba(128, 128, 128, 0.664);
  border-radius: 0.3rem;
  padding:0rem 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

}
.top{
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.nav_left span{
  font-size: 1.3rem;
  color: #3e82ff;
  font-weight: 500;
  cursor: pointer;
}


.nav_left i{
  color: #3e82ff;
  transform: scale(1.2);
}
.bottom{
  display: flex;
  flex-direction: column;
}
.bottom h2{
  font-weight: 100;
  font-size: 1.2rem;
  color: rgb(145, 145, 145);
  margin:0.1rem 0;
  cursor: pointer;
}
.bottom h2:hover{
  color: #3e82ff;
  /* transform: linear 3s; */
}
.bottom .datebox{
  width: 14rem;
  margin-left: 1rem;
  /* background-color: black; */
  border-bottom: 0.15rem dotted rgba(197, 196, 196, 0.89);
  margin-bottom:0.1rem;
}
.change{
  padding-top:0.25rem;
  padding-bottom: 0.5rem;
}
.isnone{
  display: none;
}

</style>