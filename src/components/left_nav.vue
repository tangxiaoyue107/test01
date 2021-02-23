<template>
  <div class="nav_left">
          <slot name="left_nav"><span></span></slot>
          <i class="el-icon-arrow-right"></i>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.nav_left{
  margin: 1rem 0;
  width: 15vw;
  height: 3vw;
  /* background-color: rgb(197, 197, 223); */
  border:0.1rem solid rgba(128, 128, 128, 0.664);
  border-radius: 0.3rem;
  padding:0 1rem;
  display: flex;
  justify-content: space-between;
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


</style>