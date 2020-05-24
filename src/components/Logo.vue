<template>
  <div class="logo">
    <Loading v-if="!imgLoaded" />
    <img class="logo-img" v-show="imgLoaded" :src="url" v-on:load="imgLoaded = true"/>
  </div>
</template>

<script>
  import Loading from './Loading.vue';

  export default {
    name: "Logo",
    props: {
      url: {
        type: String
      }
    },
    components: {
      Loading
    },
    data() {
      return {
        imgLoaded: false
      }
    }
  }
</script>

<style scoped>
  .logo {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
  }
  .logo-img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 100%;
  }
</style>