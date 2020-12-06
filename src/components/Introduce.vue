<template>
  <v-container class="d-flex align-center justify-center">
    <v-row ref="block" class="d-flex  align-center justify-center justify-md-space-around  align-md-baseline    flex-column flex-md-row   ">
      <v-col sm="11" md="3" class="introduce__info d-flex align-start  justify-center flex-md-column  white--text" v-for="(block, index) in introduceBlock" :key="index">
        <img :src="block.img" alt="" />
        <div class="introduce__info__textBox">
          <p class="text-md-h4  text-left  orange--text mt-md-10">
            {{ block.title }}
          </p>
          <p class="text-body-1" v-html="block.text"></p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      introduceBlock: [
        {
          img: require("../assets/introduceImg/avatar.png"),
          title: "Smomething",
          text: `Smomething:Smomething,<br>
      SmomethingSmomethingSmomething
          `,
        },
        {
          img: require("../assets/introduceImg/avatar.png"),
          title: "Smomething Smomething",
           text: `Smomething:Smomething,<br>
      SmomethingSmomethingSmomething
          `
        },
        {
          img: require("../assets/introduceImg/avatar.png"),
          title: "Smomething Smomething",
           text: `Smomething:Smomething,<br>
      SmomethingSmomethingSmomething
          `
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
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
</style>