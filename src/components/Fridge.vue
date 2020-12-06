<template>
  <div class="firdge">

    <div id="Fridge">
      <ul @click="fridgeClick" :class="nth">
        <li v-for="n in 3" :key="n" :data-index="n">

        </li>

      </ul>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      nth: "",
    };
  },

  methods: {
    fridgeClick: function (e) {
      console.log(e);
      if (e.target.nodeName.toLowerCase() === "li") {
        const index = parseInt(e.target.dataset.index);
        this.nth = `open_${index}`;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
///setting
$defaultW: 375px;
$defaultH: 667px;
//ratio
$nw: 0.9;
$nh: 1;
//real px
$fridgeW: floor($defaultW * $nw);
$fridgeH: floor($defaultH * $nh);
$fresherH: floor($defaultH * 0.3);
$changerH: floor($defaultH * 0.2);

$freezerH: floor($defaultH * 0.5);

//isOpened
$open: rotateY(20deg);
$isOpened_bgcolor: linear-gradient(-60deg, #efeeed, #eeebe7);
//color shadow
$fridgeColor: #f4f3f2;
$fridgeShadow: 3px 10px 10px
    rgba(
      $color: #d7d3d0,
      $alpha: 0.7,
    ),
  4px 3px 2px white inset;

$fresher_shadow: 4px 5px 6px rgba(215, 211, 208, 1), 4px 4px 3px white inset,
  0px -3px 4px #dadada inset;
$changer_shadow: 4px 5px 6px rgba(215, 211, 208, 1), 4px 4px 3px white inset,
  0px -3px 4px #dadada inset;
$freezer_shadow: 4px 5px 12px rgba(#c7c1bd, 1), 4px 4px 3px white inset,
  0px -3px 4px #dadada inset;
$fridge_doorHandle_shadow: 1px 2px 2px #d2d4d4;
#app {
  display: flex;
  justify-content: center;
  align-content: center;
}
#Fridge > ul {
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  position: relative;
  width: $fridgeW;
  height: $fridgeH;
  border-radius: 20px;
  // box-shadow: $fridgeShadow;
  background-color: white;
  transform-style: preserve-3d;
  transition: all 0.75s ease-in-out;
  transform-origin: right;
  perspective-origin: left;
  perspective: 1000px;
  -webkit-perspective: 1000px;

  & > li {
    list-style: none;
    z-index: 1;
    display: block;
    box-sizing: border-box;
    width: $fridgeW;
    // background-color: $fridgeColor;

    background-image: linear-gradient(-60deg, #efeeed, #fbfaf8);

    //     box-shadow: $fridgeShadow;
    position: relative;
    transform-origin: right;
    transition: all 0.75s linear;
    &::before {
      content: "";
      width: 5px;
      height: 42px;
      position: absolute;
      left: 20px;
      border-radius: 10px;
      box-shadow: 1px 2px 2px #d2d4d4;
      background-image: linear-gradient(
        0deg,
        rgba($color: #87929f, $alpha: 0.7),
        rgba($color: #b8c7dc, $alpha: 0.7)
      );
    }
  }
  & > :nth-child(1) {
    height: $fresherH;
    box-shadow: $fresher_shadow;
    border-radius: 20px 20px 10px 10px;
    &::before {
      bottom: 20px;
    }
  }
  & > :nth-child(2) {
    height: $changerH;
    box-shadow: $changer_shadow;

    border-radius: 10px;
    &::before {
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  & > :nth-child(3) {
    height: $freezerH;
    border-radius: 10px 10px 20px 20px;
    box-shadow: $freezer_shadow;
    &::before {
      top: 20px;
    }
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;

    z-index: 0;
    top: 0;
    left: 0;
    border-radius: 20px 20px 20px 20px;
    box-shadow: $fridgeShadow;

    background-image: linear-gradient(
      90deg,
      rgba(#00fcff, 0%),
      #00fcff 10%,
      white
    );
  }
}

.open_1 {
  li:nth-child(1) {
    transform: $open;
    background-image: $isOpened_bgcolor;
  }
}
.open_2 {
  li:nth-child(2) {
    transform: $open;
    background-image: $isOpened_bgcolor;
  }
}
.open_3 {
  li:nth-child(3) {
    transform: $open;
    background-image: $isOpened_bgcolor;
  }
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>