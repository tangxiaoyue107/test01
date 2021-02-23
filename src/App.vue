<template>
  <div id="app">
    <nav1></nav1>
    <navbox></navbox>
    <router-view></router-view>
    <footer1></footer1>
  </div>
</template>

<script>
//引入外部css文件
import "./assets/css/global.css"


//引入外部组件

import footer1 from "./components/footer"
import nav1 from "./components/nav"
import navbox from "./components/navbox"


export default {
  name: 'app',
  components:{
    footer1,
    nav1,
    navbox,
  },
  methods:{

  }
}
</script>

