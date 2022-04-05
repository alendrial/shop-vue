<template>
    <header class="header">
                <nav class="header__background"> <!--Меню и контент хэда-->
                    <div class="container header__menu"> <!--Меню в хэде-->
                        <div class="header__left"> 
                            <router-link to="/" class="menu__icon1"><img class="menu__icon1__anim" src="../assets/Group2.svg" alt="main_page_icon"></router-link>
                            <router-link to="/Product"><img class="menu__icon1__anim" src="../assets/Search.svg" alt="search_icon"></router-link>               
                            
                        </div>
                        <div class="header__right">
                            <BurgerMenu/>
                            <router-link to="/Registration" class="menu__icon2"><img class="menu__icon2__anim" src="../assets/Contacts.svg" alt="contact_icon"></router-link>
                            <router-link to="/Card" class="menu__icon2"><img class="menu__icon2__anim" src="../assets/Basket.svg" alt="basket_icon"></router-link>
                        </div>
                    </div> 
                </nav> 
                <div class="header__index"> <!--Контент в хэде-->
                <div class="container header__index__flex"> <!--Модуль для флекса-->
                    <div class="header__index__block">
                        <h1>
                            <span class="title_bold">THE BRAND</span> 
                            of&nbsp;LUXERIOUS
                            <span class="title_decor">FASHION</span>
                        </h1>
                    </div>
                    
                </div>
                </div> 
            </header>
</template>

<script>
import BurgerMenu from '../components/BlockBurgerMenu.vue'
export default {
  name: "HeaderHome",
  data() {
    
  },
  mounted() {

  },
  computed: {
      
  },
  components: {
    BurgerMenu,
  },
  methods: {
    
}
}

</script>

<style lang="scss">
//@import "../modules-css/_header.scss"
</style>