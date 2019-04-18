<template>
    <div class="top">
        <div class="row">
            <div class="col-md-4">
            &nbsp;
        </div>
        <div class="col-md-4 ">
              <div class="card card-block">
                  <div class="card-header">Login</div>
                  <div class="card-body">
                      <form @submit.prevent="login(user)">
                          <div class="form-group">
                          <label for="email">Email</label>
                          <input required name="email" v-model="user.email" type="email" class="form-control">
                          </div>

                          <div class="form-group">
                              <label for="password">Password</label>
                              <input name="password" v-model="user.password" type="password" class="form-control">
                          </div>

                          <input required type="submit" class="btn btn-sm btn-success" value="Login">
                        <br>
                        <span class="small-text text-danger">{{ this.$store.state.message }}</span>
                      </form>
                       </div>
              </div>
        </div>
          <div class="col-md-4">
                    &nbsp;
        </div>
        </div>
        
    </div>
</template>

<script>
export default {

  data(){
      return{
        user:{

        email:'',
        password:''

         },


      }
  },

    methods:{
        login:function(user){
           
            this.$store.dispatch('login',user)
         
        },
 
    },

    mounted(){
        if(this.$store.state.Auth != "")
        {
            this.$router.push('/secure')
        }

        localStorage.setItem('registers', JSON.stringify(this.$store.state.registers))
       
    }


 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  margin-top:50px;
}
</style>
