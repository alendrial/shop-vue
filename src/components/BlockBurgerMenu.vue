<template>
<div class="relative__burger">
    <a class="menu__icon2 hidden__burger" href="catalog.html"><img class="menu_icon2_anim" src="../assets/Catalog.svg" alt="catalog_icon"></a>    
    <div class="absolute__burger">
        <details class="menu__icon2 burger">
            <summary>
                <div class="burger__summary">
                    <img class="menu_icon2_anim" src="../assets/Catalog.svg" alt="catalog_icon">
                    <img class="exit_img" src="../assets/Exit.svg" alt="">
                </div>
            </summary>
            <div class="burger__menu">
                <a class="burger__title" href="">MENU</a>
                <a class="burger__category" href="">MAN</a>
                <a class="burger__list" href="">Accesories</a>
                <a class="burger__list" href="">Bags</a>
                <a class="burger__list" href="">Denim</a>
                <a class="burger__list" href="">T-Shirts</a>
                <a class="burger__category" href="">WOMAN</a>
                <a class="burger__list" href="">Accesories</a>
                <a class="burger__list" href="">Jacket & Coats</a>
                <a class="burger__list" href="">Polos</a>
                <a class="burger__category" href="">KIDS</a>
                <a class="burger__list" href="">Accesories</a>
                <a class="burger__list" href="">Jacket & Coats</a>
                <a class="burger__list" href="">Polos</a>
                <a class="burger__list" href="">T-Shirts</a>
                <a class="burger__list" href="">Bags</a>
            </div>
        </details>
    </div>
</div>
</template>

<script>

export default {
  name: "BurgerMenu",
  data() {
    
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