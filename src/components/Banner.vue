<template>
  <div class="BannerBox">
    <div class="Banner " v-intersect="observe" ref="parallax">
      <img class="Banner__top" :src="imageLink.top" ref="top" alt="">
      <img class="Banner__center" :src="imageLink.center" ref="center" alt="">
      <img class="Banner__bottom" :src="imageLink.bottom" ref="bottom" alt="">
      <p class="title text-h3 text-md-h2 text-lg-h1" ref="title1">Genji.xyz</p>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      imageLink: {
        top:
          process.env.VUE_APP_ParallaxTop ||
          require("../assets/parallax/top.png"),
        center:
          process.env.VUE_APP_ParallaxCenter ||
          require("../assets/parallax/center.png"),
        bottom:
          process.env.VUE_APP_ParallaxBottom ||
          require("../assets/parallax/bottom.png"),
      },
    };
  },
  methods: {
    
    observe(entries) {
      let flag = entries[0].isIntersecting;

      flag
        ? window.addEventListener("scroll", this.throttle)
        : window.removeEventListener("scroll", this.throttle);
    },
    throttle() {
      if (this.isRunning) return;
      else {
        this.isRunning = true;
        window.requestAnimationFrame(() => {
          this.move();
          this.isRunning = false;
        });
      }
    },

    move() {
      let scrolled_px = document.documentElement.scrollTop;
      let PerLocal = (scrolled_px / this.$refs.parallax.clientHeight).toFixed(
        3
      );

      let topY = PerLocal * 0.3 * 100;
      let centerY = PerLocal * 0.2 * 100;
      let bottomY = PerLocal * 0.1 * 100;

      let titleY = scrolled_px * 1;

      let topRatio = 1;
      let centerRatio = PerLocal * 0.15 + 1;
      let bottomRatio = PerLocal * 0.3 + 1;

      this.$refs.top.style.transform = `translate3d(0,${topY}%,0) scale(${topRatio})`;
      this.$refs.center.style.transform = `translate3d(0,${centerY}%,0) scale(${centerRatio})`;
      this.$refs.bottom.style.transform = `translate3d(0,${bottomY}%,0) scale(${bottomRatio})`;

      this.$refs.title1.style.transform = `translate3d(-50%,${titleY}px ,0 ) `;
    },
  },
  mounted() {

    console.log("run")
    this.move()

    
  },
};
</script>

<style lang="scss" scoped>
.BannerBox{
  border-radius: 0 0 50px 50px;
    box-shadow: rgba(0,0,0,0.25) 5px 5px 10px;
    
}

.Banner {
  position: relative;
  z-index: 100;


  height: 100vh;
  width: 100%;
  

  // padding-bottom: 56.25%;

  overflow: hidden;
  border-radius: 0 0 50px 50px;
  user-select: none;
  pointer-events: none;

  img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
   height: 100vh;
   width: 100%;
    object-fit: cover;
    will-change: transform;
    transform-style: preserve-3d;
    transform-origin: center;
    transition: transform 0.5s ease-out;

    // transition: transform 1s ease-out;
  }
  .title {
    position: absolute;
    font-family: piedra !important;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 0);
    transform-style: preserve-3d;
   

    opacity: 1;
    color: white;
   
    text-overflow: ellipsis;
    white-space: nowrap;
  }


}
  
</style>