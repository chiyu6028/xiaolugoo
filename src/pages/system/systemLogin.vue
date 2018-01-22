<template>
	<div :style="{padding:'50px'}">
		<!-- <div><img :src="logPath" alt="log" :style="{height:'40px',width:'40px'}"></div> -->
		<Row>	
			<Col span ="6" offset="9">
				<div>
					<Input v-model="userName" type="text" placeholder="用户名"></Input><br>
					<Input v-model="password" type="password" placeholder="密码"></Input><br>
					<Row>
		        <Col span="10">
		        	<Input v-model="verify" placeholder="验证码"></Input>
		        </Col>
		        <Col span="14" class="valid">
		        	<div><img :style="{height:'32px'}" @click="getValidCode" :src="validCode"> </div>
		        </Col>
		    	</Row>
					<Button type="primary" @click="login" long>登录</Button>
				</div>
			</Col>
		</Row>
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
	  		//获取页面验证码
	  		this.$axios.get('/xiaolu/validateCode',{responseType: 'arraybuffer'})
	  			.then(response => {
			    return 'data:image/png;base64,' + btoa(
			      new Uint8Array(response.data)
			        .reduce((data, byte) => data + String.fromCharCode(byte), '')
			    );
			  }).then(data => {
			    this.validCode = data;
			  })
	  	},
	  	login: function(){
	  		//获取用户名和密码
	  		var user = {
	  			user_id: this.userName,
	  			user_password: this.password,
	  			validCode: this.verify,
	  		}

	  		this.$axios.get('/xiaolu/loginSubmit',{params:user}).then(response =>{
	  			console.log(response);
	  			if (response.data[0].flg == 1) {
	  				//vuex 触发事件.
			  		this.$store.commit('increment');
			  		this.$store.state.token="123456"
			  		//带参数路由跳转。将用户信息传到home
			  		this.$router.push({ path: '/system', params:{userName:response.data[0].user.user_name}});
	  			}else{
	  				if (response.data[0].flg == 4) {
	  					this.getValidCode();
	  					alert(response.data[0].msg);
	  				}else{
	  					alert(response.data[0].msg);
	  				}
	  			}
	  		})
	  	}
	  }
	}
</script>
<style>
.valid{
	text-align: right;
}
Input{
	margin-bottom: 10px;
}
</style>