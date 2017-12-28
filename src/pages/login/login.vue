<template>
	<div>
		<Input v-model="userName" placeholder="userName" style="width: 300px"></Input><br>
		<Input v-model="password" placeholder="password" style="width: 300px"></Input><br>
		<Input v-model="verify" placeholder="verify" style="width: 100px"></Input><br>
		<Button type="primary" @click="login" style="width: 300px">登录</Button>
	</div>
  
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      userName: '',
      password: '',
      verify: ''
    }
  },
  methods: {
  	login: function(){
  		//获取用户名和密码
  		var user = {
  			userName: this.userName,
  			password: this.password,
  			verify: this.verify,
  		}
  		//vuex 触发事件.
  		this.$store.commit('increment');
  		//带参数路由跳转。将用户信息传到home
  		this.$router.push({ name: 'home', params: user});
  	}
  }
}
</script>