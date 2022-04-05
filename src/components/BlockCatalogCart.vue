<template>
  <div>
    <button class="menu__icon2 btns" ><img class="menu__icon2__anim" src="../assets/Basket.svg" alt="basket_icon"></button>
          <div class="basket hidden">
            <div class="basketRow basketHeader">
              <div>Название товара</div>
              <div>Количество</div>
              <div>Цена за шт.</div>
              <div>Итого</div>
            </div>
          <div class="basketTotal">
            Товаров в корзине на сумму:
            $<span class="basketTotalValue">0</span>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "CatalogCart",
  props: ['products'],
  
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
//@import "../modules-css/_index.scss"
</style>