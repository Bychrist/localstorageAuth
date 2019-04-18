<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div class="container">
              <a class="navbar-brand" href="#">Start Bootstrap</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item "  @click="logout">
                    <router-link v-if="this.$store.state.Auth != ''"  to="/" active-class exact class="nav-link">Logout</router-link>
                  </li>
                
                </ul>
              </div>
            </div>
        </nav>

     <div class="container">
        <router-view>

        </router-view>
     </div>
    
  </div>
</template>

<script>


export default {

data(){
  return{

    auth:this.$store.state.Auth
  }
},

methods:{
   logout:function(){
     //alert('fdasdf');
     this.$router.push('/')
     localStorage.removeItem('user')
     localStorage.removeItem('authUser')
     this.$store.state.authUser = ''
     this.$store.state.Auth =''
     
   }
},

  name: 'app',
  components: {

  }
}
</script>

<style>


</style>
