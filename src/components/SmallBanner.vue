<template>
  <div ref="box" class="SmallBanner_box" v-resize="onResize">
    <div class="titleBox" v-intersect="{
        handler: moveTitle,
        options: {
          threshold: [0.5],
        },
      }">
      <p class="movetitle text-h3 text-md-h2 text-lg-h1" ref="title">
        Genji.xyz
      </p>

    </div>

    <div class="introduce" v-intersect="{
        handler: showIntroduce,
        options: {
          threshold: [0.6],
        },
      }">
      <transition name="fade">
        <Introduce v-if="introduceFlag" />
      </transition>


    </div>
  </div>
</template>

<script>
import Introduce from "./Introduce";
export default {
  components: {
    Introduce,
  },
  data() {
    return {
      ob: "",

      introduceFlag: false,
    };
  },
  methods: {
    showIntroduce(entries) {
      let flag = entries[0].isIntersecting;
      flag ? (this.introduceFlag = true) : (this.introduceFlag = false);
    },
    moveTitle(entries) {
      console.log("moveTitle entries: ", entries);
      console.log(
        "entries[0].intersectionRatio: ",
        entries[0].intersectionRatio
      );
      let flag = entries[0].isIntersecting;
      flag
        ? window.addEventListener("scroll", this.move)
        : window.removeEventListener("scroll", this.move);
    },
    move() {
      let scrolledABS =
        document.documentElement.scrollTop - this.$refs.box.clientHeight / 2;
      this.$refs.title.style.transform = `translate3d(-50%,${scrolledABS}px ,0 ) `;
      this.titleAnime(scrolledABS);
    },
    titleOpacity(scrolledABS, long) {
      let per = scrolledABS / long;

      if (per >= 1) {
        per = 2 - per;
      } else if (per <= 0) {
        per = 0;
        return;
      }

      per = (1 - per).toFixed(2) * 1;
      console.log("per: ", per);

      return per;
    },
    titleAnime(scrolledABS) {
      this.$refs.title.style.opacity = this.titleOpacity(
        scrolledABS,
        this.$refs.box.clientHeight / 2
      );
      if (this.$refs.box.offsetTop - scrollY <= 0) {
        this.$refs.title.style.color = "black";
        this.$refs.title.innerHTML = "hello,here is some Proj";
   
      } else if (scrollY - this.$refs.box.offsetTop < 0) {
        this.$refs.title.style.color = "orange";
        this.$refs.title.innerHTML = "Genji.xyz";

      }
    },

    onResize() {},
    setTop() {},
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.SmallBanner_box {
  height: 100vh;
  width: 100%;
  position: relative;

  .titleBox {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    pointer-events: none;
    // background-color: black;
    .movetitle {
      position: absolute;
      font-family: piedra !important;
      left: 50%;
      bottom: 100%;
      color: #faa04b;
      transform: translate(-50%, 0);
      text-overflow: ellipsis;
      white-space: nowrap;
      z-index: 90;
    }
  }

  .introduce {
    position: absolute;
    z-index: 91;
    margin: 0 auto;
    width: 100%;
    height: 100%;

    .container {
      height: 100%;
    }
    &__info {
      // background-color: white;
      margin: 1vh 0;
      border-radius: 20px;
      img {
        width: 4rem;
        height: 4rem;
        display: block;
        object-fit: contain;
        border-radius: 50%;
      }
      &__textBox {
        width: 100%;
        height: 100%;
        color: #e0dbeb;
      }
    }
  }
}
</style>
