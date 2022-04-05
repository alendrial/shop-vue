<template>
<section class="container featured_items_module">
    <div class="featured_items_text">
        <h2 class="featured_items_heading">Fetured Items</h2>
        <p class="featured_items_paragraph">Shop for items based on what we featured in this week</p>
    </div>
    <div class="featured_items">
        <ProductCardsItem 
        v-for="item, i of products.slice(0,6)" 
        :item="item" 
        :index="i"/>
    </div>
    <div class="buttun_flex_center">
        <router-link to="/Catalog" class="catalog_button" href="catalog.html">Browse All Product</router-link>
    </div>
</section>
</template>

<script>
import ProductCardsItem from "./BlockCardsItem"
export default {
  name: "ProductCards",
  props: ['products'],
  
  mounted() {

  },
  computed: {
      
  },

  components: {
    ProductCardsItem,
  },
  methods: {
    
}
}

</script>

<style lang="scss">
//@import "../modules-css/_index.scss"
</style>