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
        <router-link to="/Card" class="menu__icon2"><img class="menu__icon2__anim" src="../assets/Basket.svg" alt="basket_icon"></router-link>
      </div>
    </div> 
  </nav> 
  <div class="header__content">
    <div class="container header__content__flex">
      <div class="header__title">
        <h1>Registration</h1>
      </div>             
    </div>   
  </div>
</header>
</template>

<script>

export default {
  name: "Header",
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
//@import "../modules-css/_benefits.scss"
</style>