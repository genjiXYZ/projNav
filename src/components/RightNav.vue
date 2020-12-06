<template>
  <div class="RightNav">

    <ul>
      <li v-for="(item) in routerList" :key="item">

        {{item}}
      </li>
    </ul>

    <!-- <v-row class="d-flex justify-end">
        <v-col md="8" class="d-flex justify-space-between">
          <div class="nav__name text-h6" v-for="(value) in list" :key="value.title">
            <span @click="$router.push(value.router)">{{value.title}}</span>


            <div class="Pro__button"> </div>
          </div>
        </v-col>
      </v-row> -->

  </div>
</template>


<script>
export default {
  data() {
    return {
      routerList: [1111, 2222, 3333, 4444],
    };
  },
};
</script>

<style lang="scss" scoped>
ul,
li {
	
  padding: 0;
  margin: 0;
  list-style: none;
  
}

ul {


	

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > li {
    transform: rotateZ(45deg);
	margin: 1rem 0;
	color: white;

  }
}
</style>