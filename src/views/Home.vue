<template>
  <div class="home">

    <v-main>

      <nav class="nav"></nav>
      <Banner />
      <SmallBanner />
      <MainBox />
      <HelloWorld />
    </v-main>

  </div>
</template>

<script>
import Banner from "../components/Banner";
import SmallBanner from "../components/SmallBanner";
import MainBox from "../components/MainBox";

import HelloWorld from "../components/HelloWorld";
export default {
  data() {
    return {
      num: 123,
    };
  },
  name: "Home",
  components: {
    Banner,
    SmallBanner,
    MainBox,
    HelloWorld,
  },

  //  beforeRouteEnter:(to,from,next)=>{
  // console.log("🚀 ~ file: App.vue ~ line 82 ~ to", to)

  //           next(vm=>{
  //               alert(vm.num)
  //           })
  //       },

  mounted() {
    this.$nextTick(function () {
      let position = this.$store.state.savedPosition ; //返回页面取出来
      console.log('position: ', position);
      console.log("up");
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    });
  },
};
</script>
