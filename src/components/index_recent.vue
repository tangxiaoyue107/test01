<template>
  <div class="recent_fruit">
          <div class="person_title">
            <slot name="recent_title">
              <span class="title_span">111</span>
            </slot>
            <slot name="recent_more">
              <span class="recent_more">MORE</span>
            </slot>
          </div>
          <slot name="content">
          </slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.recent_fruit{
  width: 45%;
  /* height: 70px; */
  /* background-color: wheat; */
}
/* 近期标题 */
.person_title{
  /* width: ; */
  padding-left: 20px;
  height: 3.5rem;
  border-left: 10px solid #5d96ff;
  border-bottom: 3px solid #5d96ff;
  display: flex;
  justify-content: space-between;
}
.title_span{
  float: left;
  font-size: 2rem;
  color: #5d96ff;
  font-weight:700;
  /* letter-spacing: 0.4rem; */
}
.recent_more{
  font-size: 2rem;
  color: #5d96ff;
  font-weight:700;
  letter-spacing: normal;
  font-size:1.5rem;position:relative;top:1rem;
  cursor: pointer;
}
/* 近期大盒子 */
.recent_box{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.8rem 0;
}
/* 近期日期 */
.recent_date{
  width: 5vw;
  /* background-color: violet; */
  border:0.1rem solid rgba(0, 0, 0, 0.363);
  border-radius: 0.5rem;
  padding: 0.2rem 0.2rem;
}
.recent_date h1{
  font-size: 2rem;
  text-align: center;
}
.recent_date h6{
  font-size: 0.7rem;
  text-align: center;
  margin-top: 0.3rem;
}
/* 近期文章 */
.recent_text{
  width: 30vw;
  height: 4vw;
  /* background-color: turquoise; */
  display: flex;
  align-items: center;
}
.recent_text h1{
  font-size: 1.5rem;
  padding-left: 0.5rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  color: rgba(105, 105, 105, 0.856);
  cursor: pointer;
}
</style>
