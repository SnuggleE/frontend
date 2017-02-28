<template>
  <div class="background">
    <h1>home</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  import * as api_performance from '../api/api_performance'
export default {
  name: 'login',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
      login(){
        let context=this;
        console.log(this.username);
        console.log(this.password);
        let userdata={
          username:context.username,
          password:context.password
        }
        api_performance.auth(userdata)
          .then(function (res) {
            console.log(res)
          })
      },
    modify(){
          console.log(this.password);
          api_performance.getuser()
            .then(function (res) {
              console.log(res)
            })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
