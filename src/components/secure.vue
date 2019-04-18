<template>
    <div class="containr">
        <div class="jumbotron top">
            <h1>Welcome</h1> 
            <h3>{{ this.$store.state.authUser.email }}</h3> 
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

mounted(){
    if(!this.auth)
    {
        this.$router.push('/')
    }
},

updated()
{
     if(!this.auth)
    {
        this.$router.push('/')
    }
}



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .top{
        margin-top:50px
    }
</style>
