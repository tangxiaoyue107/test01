<template>
    <div class="title">
        <slot name="title"><span></span></slot>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

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