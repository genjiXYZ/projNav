<template>
  <div class="mainBox mt-10">

    <div class="test">
     
  


    </div>

 



    <v-container>

      <Pro v-for="(item,index) in list" :key="item.router" :text="item" :index="index" />

    </v-container>

  </div>
</template>



<script>
import Pro from "./Pro";
// import RightNav from "./RightNav";
export default {
  components: { Pro, 
  // RightNav
   },
  data() {
    return {
      list: [
        {
          title: "611的冰箱",
          router: "fridge",
          link: "",
          info: `冰箱食物 '增,删,改,查' 哈`,
        },
        {
          title: "risk of rain2图鉴",
          router: "risk",
          link: "",
          info: "一个游戏的装备,技能,物品图鉴",
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>




.mainBox {
  width: 100%;
  // border: 1px dashed white;
  color: orange;
  position: relative;

  // background-color: #080755;
  .nav {
    width: 100%;

    // background-color: #af95ff;
    position: sticky;

    top: 0;
    z-index: 100;
    border-radius: 20px;
    &__name {
    }
  }
}
</style>

