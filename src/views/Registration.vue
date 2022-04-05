<template>
  <div class="wrapper">
  <Header/>
  <main>
  <Registration/>
  <SubscribeReg/>
  <Footer/>
  </main>
  </div>
</template>

<script>
import Footer from '../components/BlockFooter.vue'
import Header from '../components/BlockHeader.vue'
import SubscribeReg from '../components/BlockSubscribeReg.vue'
import Registration from '../components/BlockRegistration.vue'

export default {
  name: "",
  data() {
    return {
      loading: true,
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
    Footer, Header, Registration, SubscribeReg,
    
  },
  methods: {
  
}
}

</script>

<style lang="scss">
@import "../modules-css/styleRegistration.scss"
</style>