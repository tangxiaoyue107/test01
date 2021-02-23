<template>
        <div class="list">
          <div class="img">
            <slot name="img"></slot>
          </div>
          <slot name="text">
          </slot>
        </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.list{
  overflow: hidden;
  width: 25vw;
  /* height: 17vw; */
  border:0.2rem solid #5d96ff;
  border-radius: 0.5rem;
  display: inline-block;
  margin:2rem 2rem;
  background-color: #f2f2f2;
}
.img{
  width: min-content;
  max-height: 100%;
  margin-right: 0;
  /* float: left; */
}
.img img{
  width: 10vw;
  margin:auto 0;
  display: inline-block;
}
.text{
  width: 12vw;
  height: 100%;
  display: inline;

}
.text h2{
  margin-top: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
}
.text p{
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 100;
  padding-right: 1rem;
}
.text h3{
  margin:0.5rem 0;
  font-size: 1.1rem;
  font-weight: 100;
}
</style>