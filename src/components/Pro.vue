<template>
  <v-container class="Pro d-flex align-center py-12" v-if="text">

    <v-row class="d-flex justify-md-space-between align-center flex-column flex-md-row" :class="(index+1)%2 == 1? 'flex-md-row':'flex-md-row-reverse'" >
      <v-col md="3" >
        <p class="text-md-h4 text-h6 font-weight-bold">{{text.title}}</p>
        <p class="white--text" v-html="text.info"> </p>

		<div class="Pro__button text-center white--text pa-3 text-no-wrap"
			@click="$router.push(`/${text.router}`)"
		>Learn more</div>
      </v-col>


      <v-col md="9" class="show">
        <div class="imgBox">

          <img :src="bg" alt="">

        </div>

      </v-col>
    </v-row>

  </v-container>
</template>




<script>
export default {
  props: ["text","index"],
  computed: {
    bg() {
      return require(`../assets/Pro/web_${this.text.router}.png`);
    },
  },
};
</script>


<style lang="scss" scoped>


.Pro{
	width: 100%;

	&__button{

		width: 120px;
		border-radius: 10px;
		background-color: #F5654C;
		cursor: pointer;
		&:hover{
			box-shadow: rgba(0,0,0,0.25) 5px 5px 10px;
		}
	}

}
.imgBox {
  width: 100%;

  // background-image:radial-gradient(ellipse closest-side, rgba(#4C439B,0.3),  #4C439B), url('../assets/webFridge.png') ,;

  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(0,0,0,0.25) 5px 5px 10px;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
 
  }
}
</style>