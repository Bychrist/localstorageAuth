import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registers: [
      {"email":"admin@gmail.com","password":"admin"},
      {"email":"mary@gmail.com", "password":"mary"},
      {"email":"user@gmail.com", "password":"user"}
    
    ],
  
    user:{
      email:'',
      password:''
    },
    message:'',
    Auth:localStorage.getItem('user') || "",
    authUser: JSON.parse(localStorage.getItem("authUser")) || []

  },
  mutations: {

    loginMutation(state,user){

      for(var i =0; i <= state.registers.length; i++ )
          {
               if(user.email == state.registers[i].email && user.password == state.registers[i].password)
               {
                 router.push('/secure')
                 state.message = ""
                 state.Auth = true
                 localStorage.setItem('user', '&3299910374762');
                 localStorage.setItem('authUser', JSON.stringify(state.registers[i]))
                 state.authUser = state.registers[i];
                 break;
               }
               else{
                state.message = "your credential does not match any record"
               }
          }

    },

    logoutMutation(state)
    {
      localStorage.removeItem('user');
      state.user = ''
      state.Auth = ''
      router.push('/')
    },

  

  },

  actions: {

    login(context,user){
      
      context.commit('loginMutation',user)
    },

    logout(context){
      context.commit('logoutMutation')
    },
      
    

    
  },



})
