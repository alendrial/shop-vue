<template>
<header class="header">
  <nav class="header__background"> <!--Меню и контент хэда-->
    <div class="container header__menu"> <!--Меню в хэде-->
      <div class="header__left"> 
        <router-link to="/" class="menu__icon1"><img class="menu__icon1__anim" src="../assets/Group2.svg" alt="main_page_icon"></router-link>
        <router-link to="/Product"><img class="menu__icon1__anim" src="../assets/Search.svg" alt="search_icon"></router-link>                  
      </div>
      <div class="header__right">
        <router-link to="/Catalog" class="menu__icon2"><img class="menu__icon2__anim" src="../assets/Catalog.svg" alt="catalog_icon"></router-link>
        <router-link to="/Registration" class="menu__icon2"><img class="menu__icon2__anim" src="../assets/Contacts.svg" alt="contact_icon"></router-link>
        <CatalogCart @click="basketHidden()"/>
      </div>
    </div> 
  </nav> 
  <div class="header__content">
                <div class="container header__content__flex header__cat">
                    <div class="header__title header__cat1">
                        <h1>New Arrivals</h1>
                    </div>
                    <div class="header__category header__cat2">
                        <a class="header__category__link" href="">Home</a> /
                        <a class="header__category__link" href="" >Men</a> /
                        <a class="header__category__link" href="" >Arrivals</a>
                    </div>
                    
                </div>   
                </div>
</header>
</template>

<script>
import CatalogCart from "./BlockCatalogCart.vue"
export default {
  name: "HeaderCatalog",
  data() {
    
  },
  mounted() {

  },
  computed: {
      
  },
  components: {
    CatalogCart,
  },
  methods: {
    basketHidden(){
      let basketElement = document.querySelector('.basket');
      //let basketTotalElement = document.querySelector('.basketTotal');
      //let basketTotalValueElement = document.querySelector('.basketTotalValue');
      basketElement.classList.toggle('hidden')
    },
}
}

</script>

<style lang="scss">
//@import "../modules-css/_benefits.scss"
</style>