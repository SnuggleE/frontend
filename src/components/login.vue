<template>
  <div class="background">
    <h1 class="title">北京同盛科创科技发展有限公司</h1>
    <div class="login">
      <p class="input">
        <el-input auto-complete="off" v-model="username" placeholder="用户名"></el-input>
      </p>
      <p class="input">
        <el-input auto-complete="off" type="password" v-model="password" placeholder="密码"></el-input>
      </p>
      <p class="input">
        <el-button @click="login" type="primary">登录</el-button>
        <el-button @click="modify" type="primary">修改</el-button>
      </p>
    </div>
    <el-dialog title="修改密码" v-model="dialogVisible"  size="tiny">
      <p class="input">
        <el-input auto-complete="off" v-model="newPwd" type="password" placeholder="新密码"></el-input>
      </p>
      <p class="input">
        <el-input auto-complete="off" v-model="newPwdRepeat" type="password" placeholder="重复输入"></el-input>
      </p>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitModify">确 定</el-button>
  </span>
    </el-dialog>
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
      password:'',
      dialogVisible:false,
      newPwdRepeat:'',
      newPwd:''
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
          let context=this;
      let userdata={
        username:context.username,
        password:context.password
      }
      api_performance.auth(userdata)
        .then(function (res) {
          console.log(res)
          if(res.data.message=='ok')
          {
            context.dialogVisible=true;
          }
          else
            context.$message.error("用户名或者密码错误！")
        })

    },
    submitModify(){
        let context=this;
        if(context.newPwdRepeat!==context.newPwd){
            context.$message.warning("两次输入不一致！");
            return;
        }
        else if(context.newPwdRepeat===context.newPwd){
            let newUserData={
                username:context.username,
              newPwd:context.newPwd
            }
            api_performance.modifyPwd(newUserData)
              .then(function (res) {
                if(res.data.message=='ok'){
                    context.$message.success('修改成功！请使用新密码登陆。');
                    context.dialogVisible=false;
                }
              })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background{
    width: 100%;
    height: 100%;
    background-color: #516881;

  }
.login{
  width: 400px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -150px;
  background-color: #6f5667;
  border-radius: 5px;
  padding: 50px;
  box-sizing: border-box;
}
  .title{
    background-color: transparent;
    color: #8b392b;
    padding-top: 50px;
    margin:0;
  }
</style>
