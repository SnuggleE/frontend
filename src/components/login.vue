<template>
  <div class="background">
    <div class="login">
      <p class="input">
        <el-input v-model="username" placeholder="用户名"></el-input>
      </p>
      <p class="input">
        <el-input type="password" v-model="password" placeholder="密码"></el-input>
      </p>
      <p class="input">
        <el-button @click="login" type="primary">登录</el-button>
        <el-button @click="modify" type="primary">修改</el-button>
      </p>
    </div>
    <el-dialog></el-dialog>
  </div>
</template>

<script>
  import * as api_performance from '../api/api_performance'
  import router from '../router/index'
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
            if(res.data.message=='ok')
            {
              router.push('/home');
            }
            else
                context.$message.error("用户名或者密码错误！")
          })
      },
    modify(){
          console.log(router);
          api_performance.getuser()
            .then(function (res) {
              console.log(res);
              if(res.data.message=='ok')
              {
                  router.push('/home')
              }
            })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background{
    width: 100%;
    height: 100%;
    background-color: #2c3e50;
  }
.login{
  width: 400px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -150px;
  background-color: #4d418b;
  border-radius: 5px;
  padding: 50px;
  box-sizing: border-box;
}
</style>
