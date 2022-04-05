<template>
  <Loader v-if="loading"/>
  <div v-else="!loading" class="wrapper">
  <HeaderHome/>
  <main>
  <ProductDeals/>
  <ProductCards :products="products"/>
  <Benefits/>
  <Subscribe/>
  </main>
  </div>
</template>

<script>
import Loader from '../components/Loader.vue'
import Footer from '../components/BlockFooter.vue'
import HeaderHome from '../components/BlockHomeHeader.vue'
import Subscribe from '../components/BlockSubscribe.vue'
import Benefits from '../components/BlockBenefits.vue'
import ProductCards from '../components/BlockCards.vue'
import ProductDeals from '../components/BlockDeals.vue'

export default {
  name: "",
  data() {
    return {
      loading: true,
       products: [
        {id : 1, title : "Jacket white", description : "White mew jacket, perfect for man", price : 336, path : require("../assets/catalog_2.png")},
        {id : 2, title : "Hat red", description : "Red notorius hat, new woman", price : 116, path : require("../assets/catalog_3.png")},
        {id : 3, title : "Socks orange", description : "Cozy socks for pretty woman", price : 970, path : require("../assets/catalog_4.png")},
        {id : 4, title : "Jacket white", description : "White mew jacket, perfect for man", price : 386, path : require("../assets/catalog_5.png")},
        {id : 5, title : "Shirt black", description : "Black shirt totally new", price : 262, path : require("../assets/catalog_4.png")},
        {id : 6, title : "Jacket white", description : "White mew jacket, perfect for man", price : 482, path : require("../assets/catalog_5.png")},
        {id : 7, title : "Shoes black", description : "Black tough shoes", price : 237, path : require("../assets/catalog_6.png")},
        {id : 8, title : "Hat orange", description : "Orange notorius hat, new woman", price : 570, path : require("../assets/catalog_7.png")},
        {id : 9, title : "Jacket white", description : "White mew jacket, perfect for man", price : 336, path : require("../assets/catalog_9.png")},
        {id : 10, title : "Hat red", description : "Red notorius hat, new woman", price : 116, path : require("../assets/catalog_2.png")},
        {id : 11, title : "Socks orange", description : "Cozy socks for pretty woman", price : 970, path : require("../assets/catalog_3.png")},
        {id : 12, title : "Jacket white", description : "White mew jacket, perfect for man", price : 386, path : require("../assets/catalog_4.png")},
        {id : 13, title : "Shirt black", description : "Black shirt totally new", price : 262, path : require("../assets/catalog_4.png")},
        {id : 14, title : "Jacket white", description : "White mew jacket, perfect for man", price : 482, path : require("../assets/catalog_5.png")},
      ],
      cart: [],
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(data => console.log(data))
      .then(json => { setTimeout(() => {this.todos = json
        this.loading = false}, 1000)
      
        
      })
  },
  computed: {
      
  },
  components: {
    Loader, Footer, HeaderHome, Subscribe, Benefits, ProductCards, ProductDeals,
    
  },
  methods: {
  
}
}

</script>

<style lang="scss">
@import "../modules-css/styleIndex.scss"
</style>