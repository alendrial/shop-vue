<template>
<section class="container catalog_items_module">
<Filter/>
<div class="featured_items featured_items_marg_cat">
<ProductCardsItem v-for="item, i of products.slice(0,9)" 
        :item="item" 
        :index="i"
        />
</div>
<Slider/>
</section>
</template>

<script>
import Filter from "./BlockFilter.vue"
import ProductCardsItem from "./BlockCardsItem"
import Slider from "./BlockCatalogSlider"
export default {
  name: "ProductCardsCatalog",
  props: ['products'],
  
  mounted() {

  },
  computed: {
      
  },

  components: {
    ProductCardsItem, Filter, Slider,
  },
  methods: {
    
}
}

</script>

<style lang="scss">

</style>