<template>
  <div id="nav">
    <div class="translate">
      <div class="lefttrai">
      </div>
      <div class="midtrai">
        <span class="span_left" >选择语言：</span>
        <span class="span_mid" :class="{lang_active:this.$i18n.locale=='zh'}" @click="changelang('zh')">中文</span>
        <span class="span_right" :class="{lang_active:this.$i18n.locale=='en'}" @click="changelang('en')">English</span>
      </div>
      <div class="righttrai"></div>

    </div>
    <img src="../assets/img/topic.png" alt="" class="topic">
    <img src="../assets/img/school.png" alt="" class="school">
    <img src="../assets/img/school_font.png" alt="" class="school_font">
  </div>
</template>
<script>
import "../assets/css/nav.css"

export default {
  data(){
    return {
      isActive:true,
    }
  },
  methods:{
    changelang(lang){
      if(lang=='zh'){
        this.$i18n.locale='zh',
          alert("切换中文成功！");
      }
      else{
        this.$i18n.locale='en',
          alert("English switch successful！");        
      }
    }
  }
}
</script>