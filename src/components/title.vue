<template>
    <div class="title">
        <slot name="title"><span></span></slot>
        <!-- <slot name="back"></slot> -->
        <i class="el-icon-arrow-right" @click="back()"></i>
    </div>
</template>
<script>
export default {
  methods:{
    back(){
      alert("返回上一步");
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
i{
  float: right;
  padding-top: 1rem;
  padding-right: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  color: #5d96ff;
}
.title{
  margin-top: 2rem;
  margin-left: 2rem;
  width: 61.5vw;
  height: 3.5vw;
  /* background-color: cadetblue; */
  border-left: 10px solid #5d96ff;
  border-bottom: 3px solid #5d96ff;
}

.title span{
  float: left;
  font-size: 2rem;
  color: #5d96ff;
  font-weight:700;
  padding-left: 1rem;
}
</style>