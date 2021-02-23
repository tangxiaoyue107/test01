<template>
  <div class="navbox">
    <ul>
      <li>
        <router-link to="/index" class="nav_font">{{$t('m.index')}}</router-link>
      </li>
      <li>
        <router-link to="/study_shows" class="nav_font">{{$t('m.study_show')}}</router-link>
      </li>
      <li>
        <router-link to="/fruit_show" class="nav_font">{{$t('m.fruit_show')}}</router-link>
      </li>
      <li>
        <router-link to="/info" class="nav_font">{{$t('m.info')}}</router-link>
      </li>
      <li>
        <router-link to="/people" class="nav_font">{{$t('m.people')}}</router-link>
      </li>
      <li>
        <router-link to="/wall" class="nav_font">{{$t('m.wall')}}</router-link>
      </li>
      <li>
        <router-link to="/envir" class="nav_font">{{$t('m.envir')}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import "../assets/css/nav.css"

export default {
  
}
</script>