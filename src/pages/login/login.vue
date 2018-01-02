<template>
	<div>
		<div><img :src="logPath" alt="log" :style="{height:'40px',width:'40px'}"></div>
		<div>
			<Input v-model="userName" placeholder="userName" style="width: 300px"></Input><br>
			<Input v-model="password" placeholder="password" style="width: 300px"></Input><br>
			
			
			<Row>
        <Col span="3">
        	<Input v-model="verify" placeholder="verify" style="width: 100px"></Input>
        </Col>
        <Col span="3">
        	<div><img :style="{height:'32px',width:'80px'}" @click="getValidCode" :src="validCode"> </div>
        </Col>
    </Row>
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
			  		//带参数路由跳转。将用户信息传到home
			  		this.$router.push({ name: 'home', params:{userName:response.data[0].user.user_name}});
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