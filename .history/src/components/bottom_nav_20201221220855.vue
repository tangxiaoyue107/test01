<template>
  <div class="bottom_nav">
        <div class="leftbottom_nav">
          <div class="span_p1">
            <slot name="last_page"><p>111111111111111111111111111111111111111111</p></slot>
          </div>
          <div class="span_p2">
            <span>{{$t('m.next_pass')}}：</span>
            <slot name="next_page"><p>111111111111111111111111111111111111111111</p></slot>
          </div>
        </div>
      </div>   
</template>
<script>
export default {
  
}
</script>
<style scoped>

/* 下导航 */
.bottom_nav{
  /* width: ; */
  height: min-content;
  margin:1rem 2rem;
  padding:1rem 1rem;
  /* background-color: rgb(0, 195, 255); */
}
.leftbottom_nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
}


/* 上一篇下一篇的样式 */
.span_p1,.span_p2{
  display: flex;
  align-items: center;
  cursor: pointer;

}
.span_p1:hover{
  color: rgb(28, 115, 230);
  /* border-bottom: 0.1rem solid #5d96ff; */
}
.span_p2:hover{
  color: rgb(28, 115, 230);
  /* border-bottom: 0.1rem solid #5d96ff; */
}

/* 下导航的标题 */
.leftbottom_nav p{
  width: 15vw;
  height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>