<template>
<section class="subscribe">
    <div class="subscribe__flex container">
        <div class="subscribe__wishes">
        <img src="../assets/wishes_img.png" alt="photo">
        <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
    </div>
        <div class="subscribe__form">
            <h1>SUBSCRIBE <br>
            <span>FOR OUR NEWLETTER AND PROMOTION</span></h1>
            <form class="subscribe__button" action="#"> 
                <input class="input__email" type="email" name="email" id="email" required placeholder="Enter Your Email">
                <button class="input__submit" type="submit">Subscribe</button>
            </form>
        </div>
    </div>
</section>   
</template>

<script>

export default {
  name: "Subscribe",
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
//@import "../modules-css/_subscribe.scss"
</style>