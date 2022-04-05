<template>
<section class="container subscribe_form_module">
            <div class="subscribe_form">
                <form class="subscribe_form1" action="#">
                    <h1 class="subscribe_form1_text">Your name</h1>
                    <input class="input_form" type="text" placeholder="First Name" required pattern="[a-zA-Z]+$">
                    <input class="input_form" type="text" placeholder="Last Name" required pattern="[a-zA-Z]+$">
                    <div class="checkbox_module">
                    <label class="checkbox_module_male"><input class="checkbox_module_type" type="radio" name="name1" id="" required><span>Male</span></label>
                    <label class="checkbox_module_female"><input class="checkbox_module_type" type="radio" name="name1" id="" required><span>Female</span></label>
                    </div>
                    <h1 class="subscribe_form1_text">Login Details</h1>
                    <input class="input_form" type="email" name="" id="" placeholder="email@mail.com" required>
                    <input class="input_form" type="password" name="" id="" placeholder="Password" autocomplete="on" required minlength="8">  
                    <p class="subscribe_form1_p">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</p>
                     <button class="button_submit" type="submit">
                         Join Now <img class="submit_arrow" src="img/Sumbit_arrow.svg" alt=""></button>
                </form>
                
            </div>
            <div class="subscribe_text_reg">
                <h1 class="subscribe_text_tittle">LOYALTY HAS ITS PERKS</h1>
                <p class="subscribe_text_paragraph">Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</p>
                    <ul class="subscribe_text_list">
                        <li class="subscribe_text_list_link">15% off welcome offer</li>
                        <li class="subscribe_text_list_link">Free shipping, returns and exchanges on all orders</li>
                        <li class="subscribe_text_list_link">$10 off a purchase on your birthday</li>
                        <li class="subscribe_text_list_link">Early access to products</li>
                        <li class="subscribe_text_list_link">Exclusive offers & rewards</li>
                    </ul>

            </div>    
            </section>
</template>

<script>

export default {
  name: "Registration",
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