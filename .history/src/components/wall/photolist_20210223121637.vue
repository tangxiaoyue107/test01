<template>
      <div class="imglist">
        <slot name="img"></slot>
        <div class="textbox">
          <slot name="date"></slot>
          <slot name="title"></slot>
        </div>
      </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.imglist{
  display: inline-block;
  width: 19vw;
  height: 13vw;
  background-color: blue;
  margin:1rem 0.5rem;
  text-align: center;
}
.imglist img{
  width: 100%;
  height: fit-content;
  cursor: pointer;
}
.textbox{
  position: relative;
  top:-2rem;
}
.textbox h4{
  color:white;
  height: 2rem;
  background-image: linear-gradient(rgba(255, 255, 255, 0),rgb(255, 255, 255));
}
.textbox h2{
  color:black;
  font-size: 1.2rem;
}
</style>