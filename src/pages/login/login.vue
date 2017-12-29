<template>
	<div>
		<div><img :src="logPath" alt="log" :style="{height:'40px',width:'40px'}"></div>
		<div>
			<Input v-model="userName" placeholder="userName" style="width: 300px"></Input><br>
			<Input v-model="password" placeholder="password" style="width: 300px"></Input><br>
			<Input v-model="verify" placeholder="verify" style="width: 100px"></Input>
			<img :style="{height:'20px',width:'40px'}" :src="validCode"> <br>
			<Button type="primary" @click="login" style="width: 300px">登录</Button>
		</div>
  </div>
</template>

<script>
	
	export default {
	  name: 'login',
	  data: function () {
	    return {
	      userName: '',
	      password: '',
	      verify: '',
	      logPath: require('../../assets/xiaolu.jpg'),
	      validCode: ''
	    }
	  },
	  created(){
  		//生命周期-vue创建完，调用这个函数。
  		this.getValidCode();
  	},
	  methods: {
	  	getValidCode(){
	  		this.$axios.get('/xiaolu/count').then(function(response){
	  			console.log(response);
	  		});
	  		this.validCode = this.$axios.get('/xiaolu/validateCode');
	  	},
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