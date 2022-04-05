<template>
<div class="featured_items_card">
            <div class="shadow_card">
                <img class="featured_items_img" :src="item.path" alt="ELLERY X M'O CAPSULE">
                <a class="featured_items_img_button" href=""><img class="img_button_basket" src="../assets/Basket_card.svg" alt="or"> Add to card</a>
            </div>
            <div class="description_card">
                <a class="featured_items_link" href=""><h4 class="featured_items_card_heading">{{item.title.toUpperCase()}}</h4></a>
                <p class="featured_items_card_paragraph">{{item.description}}</p>
                <div class="card_price">
                <a class="featured_items_card_price" href="#">{{item.price}}</a>
    
                </div>
            </div>
</div>
</template>

<script>

export default {
  name: "ProductCardsItem",
  props: {
    item: {
        type: Object,
        required: true,
    },
    index: Number,
  },
  data() {
    return {
       
  }
  },
  mounted() {

  },
  computed: {
      
  },
  components: {
    
  },
  methods: {
    
}
}

</script>

<style lang="scss">

</style>